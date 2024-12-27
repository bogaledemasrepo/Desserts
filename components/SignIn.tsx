import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/deserts" });
      }}
    >
      <button className="px-8 py-3 bg-slate-200 rounded-full border border-slate-400">
        Sign In using Github
      </button>
    </form>
  );
}
