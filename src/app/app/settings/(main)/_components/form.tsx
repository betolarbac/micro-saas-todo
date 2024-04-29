"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfileSchema } from "../schema";
import { updateProfile } from "../action";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SheetFooter } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type ProfileFormProps = {
  defaultValues: Session["user"];
};

export function ProfileForm({ defaultValues }: ProfileFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      email: defaultValues?.email ?? "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await updateProfile(data);

    router.refresh();

    toast({
      title: "Perfil atualizado",
      description: "Seus dados de perfil foram atualizados",
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <>
              <Card>
                <CardHeader className="border-b border-border">
                  <CardTitle>Nome</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <FormItem>
                      <CardDescription>
                        Este é o nome como você aparecerá em seu perfil.
                      </CardDescription>
                      <FormControl>
                        <Input placeholder="Digite seu nome" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-border pt-6">
                  <SheetFooter>
                    <Button
                      disabled={form.formState.isSubmitting}
                      type="submit"
                    >
                      {form.formState.isSubmitting
                        ? "Salvando..."
                        : "Salvar alterações"}
                    </Button>
                  </SheetFooter>
                </CardFooter>
              </Card>
            </>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Card>
              <CardHeader className="border-b border-border">
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <FormItem>
                    <CardDescription>
                      Para mudar seu email entre em contato com suporte@email.com
                    </CardDescription>
                    <FormControl>
                      <Input
                        placeholder="Digite seu email"
                        disabled
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              </CardContent>
            </Card>
          )}
        />
      </form>
    </Form>
  );
}
