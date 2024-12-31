import React from "react";
import SignOut from "./SignOut";
import { auth } from "@/auth";
import Image from "next/image";

const Header = async () => {
  const user = await auth();

  console.log(user);
  return (
    <header
      className="fixed w-[85vw] mx-auto px-1 top-0 z-50
         bg-slate-200 flex items-center justify-between"
    >
      <h1 className="text-4xl font-bold py-4">Dessers</h1>
      <div>
        {user?.user?.image ? (
          <div className="w-[80px] h-[80px] rounded-full z-10 cursor-pointer relative">
            <Image
              className="absolute bottom-0 rounded-full border-2 border-neutral-400"
              width={80}
              height={80}
              src={user.user.image}
              alt="user"
            />
            <SignOut />
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
