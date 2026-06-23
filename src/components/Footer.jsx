'use client'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand part */}
        <div className="flex flex-col gap-4">
          <div className="font-bold text-2xl text-emerald-600 dark:text-emerald-400">🚀 NexusIdeas</div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Your digital gateway to infinite innovations. Explore, validate, and track your startup vision with ease and speed.
          </p>
        </div>

        {/* Platform Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-slate-900 dark:text-white">Platform</h3>
          <Link href="/ideas" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 text-sm">All Ideas</Link>
          <Link href="/categories" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 text-sm">Categories</Link>
          <Link href="/my-ideas" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 text-sm">My Ideas</Link>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-slate-900 dark:text-white">Support</h3>
          <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 text-sm">About Us</Link>
          <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 text-sm">Contact</Link>
          <Link href="/faqs" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 text-sm">FAQs</Link>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-slate-900 dark:text-white">Get Started</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Join our community of innovators and start your journey today.</p>
          <Link href="/register" className="bg-slate-900 dark:bg-emerald-600 text-white px-5 py-2 rounded-full text-center hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all text-sm">
            Get Started
          </Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">
        <p>© 2026 NexusIdeas. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-emerald-600">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-emerald-600">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}