'use client'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; 

export default function AppNavbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // mobile menu er state
  const { theme, setTheme } = useTheme();
  const [isLoggedIn] = useState(false); 

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="font-bold text-2xl text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
          <span>🚀</span>
          <Link href="/">NexusIdeas</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-medium text-slate-700 dark:text-slate-300 items-center">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/ideas" className="hover:text-emerald-600 transition-colors">Ideas</Link>
          {isLoggedIn && (
            <>
              <Link href="/add-idea" className="hover:text-emerald-600 transition-colors">Add Idea</Link>
              <Link href="/my-ideas" className="hover:text-emerald-600 transition-colors">My Ideas</Link>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-xl p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Auth Display */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-emerald-600 border-2 border-emerald-200"></div>
                <span className="font-semibold dark:text-slate-100">AJ</span>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link href="/login" className="px-4 py-2 hover:text-emerald-600 dark:text-slate-300 transition-colors">Login</Link>
                <Link href="/register" className="bg-slate-900 dark:bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-600 transition-all">Register</Link>
              </div>
            )}
          </div>

          {/* Hamburger for Mobile */}
          <button className="md:hidden text-2xl p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t p-6 flex flex-col gap-4 text-center">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/ideas" onClick={() => setIsOpen(false)}>Ideas</Link>
          {isLoggedIn ? (
            <button className="text-red-500 font-semibold">Logout</button>
          ) : (
            <>
              <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
              <Link href="/register" className="bg-emerald-600 text-white py-2 rounded-full" onClick={() => setIsOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}