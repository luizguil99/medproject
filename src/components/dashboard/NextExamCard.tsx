import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CalendarDays, Clock } from "lucide-react";

export function NextExamCard() {
  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Próximo Simulado ENEM</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            <span>Domingo, 15 de Outubro</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>09:00 - 12:30</span>
          </div>
          <div className="rounded-md bg-primary/10 p-3">
            <p className="text-sm">
              Este simulado cobre todos os tópicos de Ciências da Natureza
              relevantes para medicina no ENEM.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Inscrever-se</Button>
      </CardFooter>
    </Card>
  );
}
