import React from "react";
import { Bell, Menu, Search, User } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { userData } from "../../data/user";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-white"
              >
                <path d="M19 3v12h-5c-.023-3.681.184-7.406 5-12zm0 12v6h-1v-3M8 3v12h5c.023-3.681-.184-7.406-5-12zm0 12v6h1v-3" />
              </svg>
            </div>
            <span className="text-xl font-bold text-primary">MedEnem</span>
          </div>
        </div>
        
        <div className="hidden md:flex md:w-1/3">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar conteúdos..."
              className="w-full pl-8"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary"></span>
          </Button>
          
          <Avatar>
            <AvatarImage src="/avatar.png" alt={userData.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {userData.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
