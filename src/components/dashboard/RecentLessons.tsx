import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const recentLessons = [
  {
    id: "1",
    title: "Estrutura Celular e Organelas",
    duration: "45 min",
    completed: true,
  },
  {
    id: "2",
    title: "Metabolismo Celular",
    duration: "30 min",
    completed: true,
  },
  {
    id: "3",
    title: "Divisão Celular: Mitose e Meiose",
    duration: "50 min",
    completed: false,
  },
  {
    id: "4",
    title: "Genética Molecular",
    duration: "60 min",
    completed: false,
  },
];

export function RecentLessons() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Aulas Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                {lesson.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
                <span className={lesson.completed ? "text-muted-foreground" : ""}>
                  {lesson.title}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{lesson.duration}</span>
              </div>
            </div>
          ))}
        </div>
        <Button variant="link" className="mt-4 px-0">
          Ver todas as aulas
        </Button>
      </CardContent>
    </Card>
  );
}
