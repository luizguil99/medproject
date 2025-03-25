import React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Atom, Brain, FlaskRound as Flask, HeartPulse, Microscope, Pill, Stethoscope, TestTube } from "lucide-react";
import { userData } from "../../data/user";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

export function Sidebar({ className, isOpen = true }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-sidebar-background text-sidebar-foreground",
        isOpen ? "w-64" : "w-[70px]",
        className
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        {isOpen ? (
          <div className="flex items-center gap-2">
            <HeartPulse className="h-6 w-6 text-primary" />
            <span className="font-bold">MedEnem</span>
          </div>
        ) : (
          <HeartPulse className="mx-auto h-6 w-6 text-primary" />
        )}
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 p-2">
          <Button
            variant="ghost"
            className={cn(
              "justify-start",
              isOpen ? "" : "justify-center px-0"
            )}
          >
            <Brain className="mr-2 h-5 w-5" />
            {isOpen && <span>Dashboard</span>}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "justify-start",
              isOpen ? "" : "justify-center px-0"
            )}
          >
            <Microscope className="mr-2 h-5 w-5" />
            {isOpen && <span>Cursos</span>}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "justify-start",
              isOpen ? "" : "justify-center px-0"
            )}
          >
            <TestTube className="mr-2 h-5 w-5" />
            {isOpen && <span>Simulados</span>}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "justify-start",
              isOpen ? "" : "justify-center px-0"
            )}
          >
            <Atom className="mr-2 h-5 w-5" />
            {isOpen && <span>Exercícios</span>}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "justify-start",
              isOpen ? "" : "justify-center px-0"
            )}
          >
            <Flask className="mr-2 h-5 w-5" />
            {isOpen && <span>Laboratório</span>}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "justify-start",
              isOpen ? "" : "justify-center px-0"
            )}
          >
            <Stethoscope className="mr-2 h-5 w-5" />
            {isOpen && <span>Mentoria</span>}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "justify-start",
              isOpen ? "" : "justify-center px-0"
            )}
          >
            <Pill className="mr-2 h-5 w-5" />
            {isOpen && <span>Recursos</span>}
          </Button>
        </nav>
      </ScrollArea>
      <div className="border-t p-4">
        {isOpen && (
          <div className="flex flex-col gap-1">
            <p className="text-xs text-sidebar-foreground/60">
              Progresso do curso
            </p>
            <div className="h-2 w-full rounded-full bg-sidebar-accent">
              <div
                className="h-2 rounded-full bg-primary"
                style={{ width: `${userData.progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-sidebar-foreground/60">
              {userData.progress}% completo
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
