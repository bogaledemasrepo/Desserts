import { signOut } from "@/auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="px-8 py-3 bg-slate-200 rounded-full border border-slate-400">
        Sign Out using Github
      </button>
    </form>
  );
}
