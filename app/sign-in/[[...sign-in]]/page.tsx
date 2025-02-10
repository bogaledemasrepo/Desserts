import { SignIn } from "@clerk/nextjs";
export const runtime = "edge";
export default function Page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <SignIn />;
    </div>
  );
}
