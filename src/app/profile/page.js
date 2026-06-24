"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) router.push("/login");
  }, [session, isPending, router]);

  if (isPending) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white border rounded-3xl shadow-sm">
      <div className="text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-2xl font-bold mb-4">
          {session.user.name.charAt(0)}
        </div>
        <h1 className="text-xl font-bold">{session.user.name}</h1>
        <p className="text-gray-500 mb-6">{session.user.email}</p>
        <button 
          onClick={async () => { await authClient.signOut(); router.push("/login"); }}
          className="text-red-500 font-bold hover:underline"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
export default ProfilePage;