import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Course } from "../../types";
import { Clock, BookOpen } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video w-full bg-muted">
        <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/10 p-6 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary">{course.title.charAt(0)}</span>
        </div>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <BookOpen className="mr-1 h-4 w-4" />
            <span>{course.modules} módulos</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{course.duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
