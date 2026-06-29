'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

// ১. আলাদা একটি কম্পোনেন্ট তৈরি করলাম যেখানে useSearchParams থাকবে
function LoginContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams(); // এটি এখন Suspense এর ভেতরে আছে
  const callbackUrl = searchParams.get('callbackUrl') || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");
    
    const { error } = await authClient.signIn.email({ 
      email, 
      password,
      callbackURL: callbackUrl
    });
    
    if (error) {
      toast.error(error.message, { id: toastId });
    } else {
      toast.success("Logged in!", { id: toastId });
      router.push(callbackUrl);
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input type="email" placeholder="Email" required className="w-full p-3 border rounded-xl" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" required className="w-full p-3 border rounded-xl" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold">Login</button>
      
      <button 
        type="button"
        onClick={() => authClient.signIn.social({ provider: "google", callbackURL: callbackUrl })}
        className="w-full mt-4 border p-3 rounded-xl font-medium hover:bg-slate-50"
      >
        Login with Google
      </button>
    </form>
  );
}

// ২. মেইন পেজ কম্পোনেন্ট
export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <div className="p-8 bg-white shadow-xl rounded-2xl w-full max-w-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        {/* Suspense এর ভেতরে LoginContent টি ব্যবহার করলাম */}
        <Suspense fallback={<div>Loading...</div>}>
          <LoginContent />
        </Suspense>
      </div>
    </div>
  );
}