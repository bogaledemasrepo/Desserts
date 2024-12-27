import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl text-myred font-bold py-4">
        Wellcome to deserts applications
      </h1>
      <div className="flex space-x-4 p-8 rounded-sm border border-slate-300">
        <SignIn />
        <SignOut />
      </div>
    </div>
  );
};

export default page;
