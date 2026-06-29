

// 'use client';
// import { useState } from 'react';
// import { useRouter } from "next/navigation";
// import { authClient } from "@/lib/auth-client";
// import toast from "react-hot-toast";

// export default function SignUpPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [photoURL, setPhotoURL] = useState(''); // নতুন ফিল্ড
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     // পাসওয়ার্ড ভ্যালিডেশন
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
//     if (!passwordRegex.test(password)) {
//       toast.error("Password must be at least 6 characters, including uppercase and lowercase letters.");
//       return;
//     }

//     const toastId = toast.loading("Creating account...");

//     const { error } = await authClient.signUp.email({
//       email,
//       password,
//       name,
//       image: photoURL, // Photo URL এখানে পাস করা হলো
//       callbackURL: "/"
//     });

//     if (error) {
//       toast.error(error.message, { id: toastId });
//     } else {
//       toast.success("Welcome to NexusIdeas!", { id: toastId }); // নাম পরিবর্তন
//       router.push("/");
//       router.refresh();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
//       <div className="p-8 bg-white shadow-xl rounded-2xl w-full max-w-sm border border-slate-100">
//         <h2 className="text-2xl font-bold mb-6 text-center">Join NexusIdeas</h2>
//         <form onSubmit={handleSignUp} className="space-y-4">
//           <input type="text" placeholder="Full Name" required className="w-full p-3 border rounded-xl" onChange={(e) => setName(e.target.value)} />
//           <input type="email" placeholder="Email" required className="w-full p-3 border rounded-xl" onChange={(e) => setEmail(e.target.value)} />
//           <input type="text" placeholder="Photo URL" className="w-full p-3 border rounded-xl" onChange={(e) => setPhotoURL(e.target.value)} />
//           <input type="password" placeholder="Password (Min 6 chars, Upper & Lower)" required className="w-full p-3 border rounded-xl" onChange={(e) => setPassword(e.target.value)} />
//           <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700">Sign Up</button>
//         </form>
//         <button 
//           onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/" })}
//           className="w-full mt-4 border p-3 rounded-xl font-medium hover:bg-slate-50"
//         >
//           Continue with Google
//         </button>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 6 characters, including uppercase and lowercase letters.");
      return;
    }

    const toastId = toast.loading("Creating account...");

    const { error } = await authClient.signUp.email({
      email,
      password,
      name,
      image: photoURL,
      callbackURL: "/"
    });

    if (error) {
      toast.error(error.message, { id: toastId });
    } else {
      toast.success("Welcome to NexusIdeas!", { id: toastId });
      router.push("/"); // রিডাইরেক্ট রুট
      router.refresh();
    }
  };

  // গুগল সাইন-আপ হ্যান্ডলার
  const handleGoogleSignUp = async () => {
    const toastId = toast.loading("Redirecting to Google...");
    await authClient.signIn.social({ 
      provider: "google", 
      callbackURL: "/" 
    }, {
      onError: (ctx) => {
        toast.error(ctx.error.message || "Google login failed", { id: toastId });
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
      <div className="p-8 bg-white shadow-xl rounded-2xl w-full max-w-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Join NexusIdeas</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input type="text" placeholder="Full Name" required className="w-full p-3 border rounded-xl" onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" required className="w-full p-3 border rounded-xl" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Photo URL" className="w-full p-3 border rounded-xl" onChange={(e) => setPhotoURL(e.target.value)} />
          <input type="password" placeholder="Password (Min 6 chars, Upper & Lower)" required className="w-full p-3 border rounded-xl" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700">Sign Up</button>
        </form>
        <button 
          onClick={handleGoogleSignUp}
          className="w-full mt-4 border p-3 rounded-xl font-medium hover:bg-slate-50"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}