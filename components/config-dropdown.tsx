"use client"

import { BookOpen, CircleHelp, MonitorCog, Moon, Sun } from "lucide-react";
import {
  MessageSquare,
  UserPlus,
  Cog,
} from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ConfigDropdown() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
            <Cog className="w-4 h-4"/>
            <span className="sr-only">Configuration</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Configuration</DropdownMenuLabel>
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus />
              <span>Themes</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="data-[active=true]:bg-secondary"
                  data-active={useTheme().theme === "light"}
                >
                  <Sun />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="data-[active=true]:bg-secondary"
                  data-active={useTheme().theme === "dark"}
                >
                  <Moon />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="data-[active=true]:bg-secondary"
                  data-active={useTheme().theme === "system"}
                >
                  <MonitorCog />
                  <span>Système</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Autre</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() =>{
            window.location.href = "mailto:valentin.rudloff.perso@gmail.com?subject=faire un retour sur le site célébrations"
          }}>
            <MessageSquare />
            <span>Faire un retour</span>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <CircleHelp />
            <span>A propos</span>
          </DropdownMenuItem> */}
          <DropdownMenuItem onClick={() =>{
            window.location.href = "mailto:valentin.rudloff.perso@gmail.com?subject=Besoin d'aide sur le site célébrations"
          }}>
            <CircleHelp />
            <span>Aide</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
