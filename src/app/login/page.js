"use client";
import React, { useState } from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");
    
    const { error } = await authClient.signIn.email({ email, password });
    
    if (error) {
      toast.error(error.message, { id: toastId });
    } else {
      toast.success("Logged in!", { id: toastId });
      router.push(callbackUrl);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <div className="p-8 bg-white shadow-xl rounded-2xl w-full max-w-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl" onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold">Login</button>
        </form>
        <button 
          onClick={() => authClient.signIn.social({ provider: "google", callbackURL: callbackUrl })}
          className="w-full mt-4 border p-3 rounded-xl font-medium hover:bg-slate-50"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};
export default LoginPage;