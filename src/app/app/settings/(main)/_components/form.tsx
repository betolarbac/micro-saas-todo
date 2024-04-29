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
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormDescription>
                Este é como você aparecerá em seu perfil.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu email" readOnly {...field} />
              </FormControl>
              <FormDescription>
                Este é o email de contato para alterar o email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <SheetFooter>
          <Button disabled={form.formState.isSubmitting} type="submit">
            {form.formState.isSubmitting ? "Salvando..." : "Salvar alterações"} 
          </Button>
        </SheetFooter>
      </form>
    </Form>
  );
}

