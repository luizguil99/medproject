import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { userData } from "../../data/user";

export function ProgressCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Seu Progresso</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium">Progresso Geral</span>
              <span className="text-sm text-muted-foreground">{userData.progress}%</span>
            </div>
            <Progress value={userData.progress} className="h-2" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">{userData.points}</span>
              <span className="text-xs text-muted-foreground">Pontos acumulados</span>
            </div>
            
            <div className="flex flex-col items-end">
              <span className="text-2xl font-bold">{userData.streak}</span>
              <span className="text-xs text-muted-foreground">Dias de sequência</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
