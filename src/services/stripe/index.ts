import { config } from "@/config";
import Stripe from "stripe";
import { prisma } from "../database";

export const stripe = new Stripe(config.stripe.secretKey || "", {
  apiVersion: "2024-04-10",
  httpClient: Stripe.createFetchHttpClient(),
});

export const getStripeCustomerByEmail = async (email: string) => {
  const customers = await stripe.customers.list({ email });
  return customers.data[0];
};

export const createStripeCustomer = async (input: {
  name?: string;
  email: string;
}) => {
  let customer = await getStripeCustomerByEmail(input.email);
  if (customer) return customer;

  const createdCustomer = await stripe.customers.create({
    name: input.name,
    email: input.email,
  });

  const createdCustomerSubscription = await stripe.subscriptions.create({
    customer: createdCustomer.id,
    items: [
      {
        price: config.stripe.plans.free.priceId,
      },
    ],
  });

  await prisma.user.update({
    where: {
      email: input.email,
    },
    data: {
      stripeCustomerID: createdCustomer.id,
      stripeSubscriptionID: createdCustomerSubscription.id,
      stripeSubscriptionStatus: createdCustomerSubscription.status,
      stripePriceId: config.stripe.plans.free.priceId,
    },
  });

  return createdCustomer;
};

export const createCheckoutSession = async (
  userId: string,
  userEmail: string,
  userStripeSubScriptionId: string,
) => {
  try {
    const customer = await createStripeCustomer({
      email: userEmail,
    });

    const subscription = await stripe.subscriptionItems.list({
      subscription: userStripeSubScriptionId,
      limit: 1,
    })

    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: `http://localhost:3000/app/settings/billing`,
      flow_data: {
        type: "subscription_update_confirm",
        after_completion: {
          type: "redirect",
          redirect: {
            return_url: `http://localhost:3000/app/settings/billing?success=true`,
          },
        },
        subscription_update_confirm: {
          subscription: userStripeSubScriptionId,
          items: [
            {
              id: subscription.data[0].id,
              price: config.stripe.plans.pro.priceId,
              quantity: 1,
            }
          ]
        }
      }
    })

    return {
      url: session.url,
    };
  } catch (error) {
    throw new Error("Error to create checkout session");
  }
};
