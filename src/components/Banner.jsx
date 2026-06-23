'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Turn Ideas Into Reality",
    description: "Get validation and support to bring your startup vision to life.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "Innovate & Collaborate",
    description: "Connect with brilliant minds and build the future of technology.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Scale Your Startup",
    description: "From concept to market, get the resources you need to scale fast.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl mx-auto">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.image} alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center text-center p-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">{slide.description}</p>
            <Link 
              href="/ideas" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold transition-all"
            >
              Explore Ideas →
            </Link>
          </div>
        </div>
      ))}
      
     
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${i === current ? "bg-emerald-500" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}