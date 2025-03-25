import React from "react";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";
import { ProgressCard } from "../components/dashboard/ProgressCard";
import { CourseCard } from "../components/dashboard/CourseCard";
import { StatsCard } from "../components/dashboard/StatsCard";
import { NextExamCard } from "../components/dashboard/NextExamCard";
import { RecentLessons } from "../components/dashboard/RecentLessons";
import { courses } from "../data/courses";
import { userData } from "../data/user";

export function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-6 text-3xl font-bold">Olá, {userData.name.split(" ")[0]}!</h1>
            
            <div className="grid gap-6 md:grid-cols-3">
              <StatsCard
                title="Questões Resolvidas"
                value="487"
                description="Últimos 30 dias"
                icon="brain"
              />
              <StatsCard
                title="Tempo de Estudo"
                value="42h"
                description="Últimos 30 dias"
                icon="clock"
              />
              <StatsCard
                title="Taxa de Acerto"
                value="76%"
                description="Média geral"
                icon="target"
              />
            </div>
            
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="mb-4 text-xl font-semibold">Seus Cursos</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {courses.slice(0, 4).map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <ProgressCard />
                <NextExamCard />
              </div>
            </div>
            
            <div className="mt-6">
              <h2 className="mb-4 text-xl font-semibold">Continue Estudando</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <RecentLessons />
                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                  <h3 className="mb-4 text-lg font-medium">Dica do Dia</h3>
                  <div className="rounded-md bg-primary/10 p-4">
                    <p className="text-sm">
                      <strong>Memorização Ativa:</strong> Em vez de apenas ler o conteúdo, tente explicá-lo em voz alta como se estivesse ensinando alguém. Estudos mostram que essa técnica melhora a retenção em até 70%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
