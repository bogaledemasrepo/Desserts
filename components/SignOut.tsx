import { signOut } from "@/auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="absolute bottom-0 px-3 py-1 bg-slate-200 rounded-md border border-slate-400 hover:bg-slate-300 hover:border-slate-200 transition-all">
        Logout
      </button>
    </form>
  );
}
