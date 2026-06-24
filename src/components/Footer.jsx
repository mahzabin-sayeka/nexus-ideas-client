
import React from 'react';
import { FaXTwitter, FaFacebookF, FaGoogle } from "react-icons/fa6"; 

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">NexusIdeas</h2>
          <p className="text-sm leading-relaxed mb-6">
            NexusIdeas provides a seamless platform for innovators to showcase, 
            discuss, and refine their ideas. Join our community and bring your 
            vision to life with collaborative tools.
          </p>
          <button className="text-blue-400 font-semibold hover:underline">LEARN MORE ABOUT NexusIdeas</button>
        </div>

        
        <div>
          <h3 className="text-white font-bold mb-6">Useful Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Ideas</a></li>
            <li><a href="#" className="hover:text-white">Add Idea</a></li>
            <li><a href="#" className="hover:text-white">My Interactions</a></li>
            <li><a href="#" className="hover:text-white">Contacts</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-white font-bold mb-6">Contact with us</h3>
          <p className="mb-2">📞 8 800 567.890.11</p>
          <p className="mb-6">✉️ support@NexusIdeas.com</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition">
            SEND A MESSAGE
          </button>
          
          <div className="flex gap-4 mt-8">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaXTwitter className="cursor-pointer hover:text-white" /> 
            <FaGoogle className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
        <p>© 2026 NexusIdeas. Designed by Mahjabin Jannath, Developed by Mahjabin Jannath.</p>
      </div>
    </footer>
  );
}