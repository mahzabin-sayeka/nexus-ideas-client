"use client";
import React, { useState } from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Creating account...");

    await authClient.signUp.email({
      email,
      password,
      name,
    }, {
      onSuccess: () => {
        toast.success("Welcome to IdeaVault!", { id: toastId });
        router.push("/");
        router.refresh();
      },
      onError: (ctx) => {
        toast.error(ctx.error.message, { id: toastId });
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
      <div className="p-8 bg-white shadow-xl rounded-2xl w-full max-w-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Join IdeaVault</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input type="text" placeholder="Full Name" required className="w-full p-3 border rounded-xl" onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" required className="w-full p-3 border rounded-xl" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required className="w-full p-3 border rounded-xl" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700">Sign Up</button>
        </form>
        <button 
          onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/" })}
          className="w-full mt-4 border p-3 rounded-xl font-medium hover:bg-slate-50"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};
export default SignUpPage;