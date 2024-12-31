import { auth } from "@/auth";
import SignIn from "@/components/SignIn";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (session?.user) redirect("/deserts");
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col space-x-4 p-8 rounded-sm border border-slate-300">
        <h1 className="text-4xl text-myred font-bold py-8">
          Wellcome to Deserts application!
        </h1>
        <div className="w-full p-4">
          <p className="text-md text-slate-400">
            Hir you can manage your deserts order!
          </p>
        </div>
        <div className=" flex justify-evenly items-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
