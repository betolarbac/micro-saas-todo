import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { createCheckoutSessionAction } from "./actions";

export default function Page() {
  return (
    <form action={createCheckoutSessionAction}>
      <Card>
        <CardHeader className="border-b border-border">
          <CardTitle>Uso do Plano</CardTitle>
          <CardDescription>
            Você está atualmente no plano [current_plan]. Ciclo de cobrança
            atual:{""}
            [next_due_date].
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <header className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">1/5</span>
              <span className="text-muted-foreground text-sm">20%</span>
            </header>

            <main>
              <Progress value={20} />
            </main>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-border pt-6">
          <span>Para obter um limite maior, assine o plano PRO</span>
          <Button type="submit">Atualizar para PRO</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
