import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Brain, Clock, Target } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: "brain" | "clock" | "target";
}

export function StatsCard({ title, value, description, icon }: StatsCardProps) {
  const Icon = () => {
    switch (icon) {
      case "brain":
        return <Brain className="h-5 w-5 text-primary" />;
      case "clock":
        return <Clock className="h-5 w-5 text-primary" />;
      case "target":
        return <Target className="h-5 w-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
