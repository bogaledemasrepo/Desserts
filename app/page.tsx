import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";

export default function page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col space-x-4 p-8 rounded-sm border border-slate-300">
        <h1 className="text-4xl text-myred font-bold py-8">
          Wllcome to deserts application!
        </h1>
        <div className=" flex justify-evenly items-center">
          <SignIn />
          <SignOut />
        </div>
      </div>
    </div>
  );
}
