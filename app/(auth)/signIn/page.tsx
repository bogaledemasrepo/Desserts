// import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <div className="flex space-x-4 p-8 rounded-sm border border-slate-300">
        <Link
          href={"/deserts"}
          className="py-3 px-8 bg-red-200 border-2 border-red-300 rounded-full font-bold"
        >
          SignIn
        </Link>
        {/* <SignIn /> */}
        <SignOut />
      </div>
    </div>
  );
};

export default page;
