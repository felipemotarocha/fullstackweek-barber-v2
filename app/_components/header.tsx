import React from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"

export default function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}
