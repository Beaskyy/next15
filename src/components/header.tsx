import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white py-2 text-gray-800 w-full px-8">
      <p>logo</p>
      <div className="flex items-center gap-5">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
