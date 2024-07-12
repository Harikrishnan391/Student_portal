"use client";

import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
  FileText,
  BarChart2,
  IndianRupee,
  Settings,
  LogOut,
  Moon,
  Sun,
  BookOpenText
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Asssignments from "@/components/feature/Asssignments";
import UpcomingClasses from "@/components/feature/UpcomingClasses";

export default function Dashboard() {
  const { setTheme } = useTheme();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
            <BookOpenText className="h-6 w-6" />
              <span className="">Online Learn</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="avatar ml-6 items-center border-b  py-4">
            <Avatar className="ml-6">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="ml-4">
              <span className="block py-1 text-lg font-bold text-clip">
                John Doe
              </span>
              <h4 className="text-sm font-medium text-gray-500">
                Intermediate
              </h4>
            </div>
          </div>
          <div className="flex-1 mt-3">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-6">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-4 py-3 bg-muted text-primary transition-all hover:text-primary"
              >
                <div className="p-1.5 rounded-full bg-blue-500">
                  <Home className="h-4 w-4 " />
                </div>
                Dashboard
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <div className="p-1.5 rounded-full bg-slate-300">
                  <Users className="h-4 w-4" />
                </div>
                All Classes
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <div className="p-1.5 rounded-full bg-slate-300">
                  <FileText className="h-4 w-4" />
                </div>
                Assignments{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <div className="p-1.5 rounded-full bg-slate-300">
                  <BarChart2 className="h-4 w-4" />
                </div>
                Performance
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <div className="p-1.5 rounded-full bg-slate-300">
                  <IndianRupee className="h-4 w-4" />
                </div>
                Fee Details
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <div className="p-1.5 rounded-full bg-slate-300">
                  <Settings className="h-4 w-4" />
                </div>
                Settings
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4 ml-6 flex items-center">
            <div className="p-1 rounded-full bg-slate-300">
              <LogOut className="w-4 h-4" />
            </div>
            <span className=" rounded-lg ml-3 text-muted-foreground hover:text-primary">
              Logout
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex  items-center gap-4 border-b bg-muted/40 px-4 lg:h-[100px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  AllClasses
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Assignments
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Performance
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Fee Details
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
              <div className="mt-auto">
                <LogOut className="w-4 h-4" />
                <span className=" rounded-lg ml-3 text-muted-foreground hover:text-primary">
                  Logout
                </span>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full  flex-4 ">
            <nav className="flex  items-center gap-4 py-1 shadow-sm mt-4">
              <Link href="/login">Blog</Link>
              <Link href="/News">News</Link>
              <Link href="/helpcenter">Helpcenter</Link>
              <Link href="/customer-care">CustomerCare</Link>
            </nav>

            <div className="py-2 ">
              <h3 className="text-3xl font-serif font-thin">Dashboard</h3>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-1 lg:gap-6 lg:p-2 bg-slate-100">
          <div className="flex flex-1 gap-3 ">
            <div className="flex-1">
              <UpcomingClasses />
            </div>
            <div className="flex-1 hidden lg:block">
              <Asssignments />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
