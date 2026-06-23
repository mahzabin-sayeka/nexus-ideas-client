

import Link from 'next/link';

export default function TrendingIdeas() {
  const ideas = [
    { 
      id: 1, 
      title: "Mental Health Companion Chatbot", 
      cat: "AI", 
      desc: "AI chatbot providing 24/7 emotional support.",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" 
    },
    { 
      id: 2, 
      title: "EdTech Language Immersion", 
      cat: "Education", 
      desc: "VR-based language learning platform.",
      img: "https://images.unsplash.com/photo-1503676260728-1c09da0947e8?w=400&q=80" 
    },
    { 
      id: 3, 
      title: "Blockchain Supply Chain", 
      cat: "Tech", 
      desc: "Transparent tracking for raw materials.",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80" 
    },
    { 
      id: 4, 
      title: "Urban Vertical Farming", 
      cat: "Environment", 
      desc: "Automated farming for small apartments.",
      img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfacb?w=400&q=80" 
    },
    { 
      id: 5, 
      title: "Remote Work Fintech", 
      cat: "Finance", 
      desc: "Invoicing and tax platform for freelancers.",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80" 
    },
    { 
      id: 6, 
      title: "Healthcare Wearable", 
      cat: "Health", 
      desc: "Real-time glucose and pressure monitoring.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80" 
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Trending Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea) => (
            <div key={idea.id} className="border border-slate-200 dark:border-slate-800 rounded-2xl p-4 hover:shadow-lg transition-all">
              <div className="h-48 mb-4 overflow-hidden rounded-xl">
                <img 
                  src={idea.img} 
                  alt={idea.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400">
                {idea.cat}
              </span>
              <h3 className="font-bold text-lg mt-2 text-slate-900 dark:text-white">{idea.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{idea.desc}</p>
              <Link href={`/ideas/${idea.id}`} className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}