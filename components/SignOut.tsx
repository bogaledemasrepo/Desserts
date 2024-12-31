import { signOut } from "@/auth";
import { LuLogOut } from "react-icons/lu";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="absolute bottom-0 right-0 px-3 py-1 bg-transparent rounded-md bg-slate-200 border-2 border-slate-300  hover:bg-slate-300 hover:border-slate-200 transition-all">
        <LuLogOut />
      </button>
    </form>
  );
}
