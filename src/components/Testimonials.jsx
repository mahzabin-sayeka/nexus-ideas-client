'use client';
import { motion } from 'framer-motion'; 

export default function Testimonials() {
  const testimonials = [
    { name: "LuneCore", text: "They managed to fix a bug within 24 hours. Awesome support." },
    { name: "louiswhit", text: "I was really happy with the product. These types of dashboard systems help." },
    { name: "anfern", text: "Very nice theme, Really amazing ! I discover new features everyday." },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Discover what our clients say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800"
            >
              <p className="text-slate-600 dark:text-slate-300 mb-6">{item.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  {item.name[0]}
                </div>
                <h4 className="font-bold">{item.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}