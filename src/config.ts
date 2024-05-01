export const config = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    webhookSecret: "",
    plans: {
      free: {
        priceId: "price_1PBV6hRxszi3EZomkd285KfD",
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: "price_1PBV75Rxszi3EZomfyNEeZlg",
        quota: {
          TASKS: 100,
        },
      },
    },
  },
};
