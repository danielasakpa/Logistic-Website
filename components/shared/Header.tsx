import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import { Separator } from "../ui/separator";
import Logo from "./Logo";

const AuthenticationButtons = () => (
  <div className="flex w-32 justify-end items-center gap-3">
    <MobileNav />
    <SignedIn>
      <UserButton afterSignOutUrl="/" />
    </SignedIn>
    <SignedOut>
      <Button asChild className="rounded-full" size="lg">
        <Link href="/sign-in">Login</Link>
      </Button>
    </SignedOut>
  </div>
);

const Header = () => (
  <header className="w-full py-5 px-2 fixed top-0 z-40">
    <div className="!px-8 !py-6 wrapper bg-black flex items-center justify-between rounded-lg">
      <Logo />
      {/* <Separator
        orientation="vertical"
        className="border border-gray-50 h-12 ml-10"
      /> */}
      <nav className="md:flex-between hidden">
          <NavItems />
        </nav>
      <div className="flex items-center justify-end lg:justify-between md:ml-10">
        <AuthenticationButtons />
      </div>
    </div>
  </header>
);

export default Header;
