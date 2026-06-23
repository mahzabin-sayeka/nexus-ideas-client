

// import IdeasFilter from '@/components/IdeasFilter';
// import Link from 'next/link';

// const ideas = [
//   { id: 1, title: "AI Mental Health Chatbot", cat: "AI", desc: "24/7 support bot.", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" },
//   { id: 2, title: "Smart Healthcare Wearable", cat: "Health", desc: "Real-time monitoring.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80" },
//   { id: 3, title: "Blockchain Supply Chain", cat: "Tech", desc: "Transparent tracking.", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80" },
//   { id: 4, title: "Online Coding Tutor", cat: "Education", desc: "Personalized learning.", img: "https://images.unsplash.com/photo-1501504905252-473c47e082f8?w=400&q=80" },
//   { id: 5, title: "Budget Tracker App", cat: "Finance", desc: "Smart savings tool.", img: "https://images.unsplash.com/photo-1554224155-8d04cb27cd6c?w=400&q=80" },
//   { id: 6, title: "Carbon Footprint Tracker", cat: "Environment", desc: "Go green daily.", img: "https://images.unsplash.com/photo-1473341617437-09fed2d6407a?w=400&q=80" },
//   { id: 7, title: "AI Market Predictor", cat: "AI", desc: "Stocks analysis.", img: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=400&q=80" },
//   { id: 8, title: "Remote Telemedicine", cat: "Health", desc: "Doctor on call.", img: "https://images.unsplash.com/photo-1584467735871-852839217865?w=400&q=80" },
//   { id: 9, title: "VR Classroom", cat: "Education", desc: "Immersive learning.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80" },
//   { id: 10, title: "Crypto Wallet", cat: "Finance", desc: "Secure your coins.", img: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&q=80" },
//   { id: 11, title: "Clean Water Sensor", cat: "Environment", desc: "Save water sources.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80" },
//   { id: 12, title: "SaaS Workflow Tool", cat: "Tech", desc: "Boost productivity.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
//   { id: 13, title: "AI Fitness Coach", cat: "AI", desc: "Workout guidance.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" },
//   { id: 14, title: "Financial Literacy Bot", cat: "Finance", desc: "Manage your money.", img: "https://images.unsplash.com/photo-1579621970588-a35d0e7bb9b6?w=400&q=80" },
//   { id: 15, title: "Eco-Friendly Delivery", cat: "Environment", desc: "Low emission transport.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" },
//   { id: 16, title: "Language Learning App", cat: "Education", desc: "Learn new languages.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80" },
//   { id: 17, title: "AI Security Camera", cat: "Tech", desc: "Safe homes always.", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&q=80" },
//   { id: 18, title: "Nutritional Planner", cat: "Health", desc: "Eat healthy food.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80" },
//   { id: 19, title: "Solar Power Hub", cat: "Environment", desc: "Renewable energy.", img: "https://images.unsplash.com/photo-1509391366360-2addb56e7d28?w=400&q=80" },
//   { id: 20, title: "University CRM", cat: "Education", desc: "Manage campus life.", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80" },
// ];
// // মেইন কম্পোনেন্ট
// export default async function IdeasPage(props) {
//   // searchParams টি props থেকে await করে নিতে হবে
//   const searchParams = await props.searchParams;
  
//   const query = searchParams.q?.toLowerCase() || '';
//   const category = searchParams.cat || '';
//   const sort = searchParams.sort || 'newest';

//   let filteredIdeas = ideas.filter(idea => {
//     return idea.title.toLowerCase().includes(query) && 
//            (category ? idea.cat === category : true);
//   });

//   if (sort === 'popular') {
//     filteredIdeas = [...filteredIdeas].sort((a, b) => b.id - a.id);
//   }

//   return (
//     <main className="py-16 bg-white dark:bg-slate-950">
//       <div className="max-w-7xl mx-auto px-6">
//         <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Explore Ideas</h1>
        
//         <IdeasFilter />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//           {filteredIdeas.map((idea) => (
//             <div key={idea.id} className="border border-slate-200 dark:border-slate-800 rounded-2xl p-4 hover:shadow-lg transition-all">
//               <div className="h-48 mb-4 overflow-hidden rounded-xl">
//                 <img src={idea.img} alt={idea.title} className="w-full h-full object-cover" />
//               </div>
//               <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400">
//                 {idea.cat}
//               </span>
//               <h3 className="font-bold text-lg mt-2 text-slate-900 dark:text-white">{idea.title}</h3>
//               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{idea.desc}</p>
//               <Link href={`/ideas/${idea.id}`} className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//                 View Details
//               </Link>
//             </div>
//           ))}
//         </div>

//         {filteredIdeas.length === 0 && (
//           <p className="text-center text-slate-500 mt-16">No ideas found. Try a different search.</p>
//         )}
//       </div>
//     </main>
//   );
// }



import IdeasFilter from '@/components/IdeasFilter';
import Link from 'next/link';


const ideas = [
  { id: 1, title: "AI Mental Health Chatbot", cat: "AI", desc: "24/7 support bot.", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" },
  { id: 2, title: "Smart Healthcare Wearable", cat: "Health", desc: "Real-time monitoring.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80" },
  { id: 3, title: "Blockchain Supply Chain", cat: "Tech", desc: "Transparent tracking.", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80" },
  { id: 4, title: "Online Coding Tutor", cat: "Education", desc: "Personalized learning.", img: "https://images.unsplash.com/photo-1501504905252-473c47e082f8?w=400&q=80" },
  { id: 5, title: "Budget Tracker App", cat: "Finance", desc: "Smart savings tool.", img: "https://images.unsplash.com/photo-1554224155-8d04cb27cd6c?w=400&q=80" },
  { id: 6, title: "Carbon Footprint Tracker", cat: "Environment", desc: "Go green daily.", img: "https://images.unsplash.com/photo-1473341617437-09fed2d6407a?w=400&q=80" },
  { id: 7, title: "AI Market Predictor", cat: "AI", desc: "Stocks analysis.", img: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=400&q=80" },
  { id: 8, title: "Remote Telemedicine", cat: "Health", desc: "Doctor on call.", img: "https://images.unsplash.com/photo-1584467735871-852839217865?w=400&q=80" },
  { id: 9, title: "VR Classroom", cat: "Education", desc: "Immersive learning.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80" },
  { id: 10, title: "Crypto Wallet", cat: "Finance", desc: "Secure your coins.", img: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&q=80" },
  { id: 11, title: "Clean Water Sensor", cat: "Environment", desc: "Save water sources.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80" },
  { id: 12, title: "SaaS Workflow Tool", cat: "Tech", desc: "Boost productivity.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
  { id: 13, title: "AI Fitness Coach", cat: "AI", desc: "Workout guidance.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" },
  { id: 14, title: "Financial Literacy Bot", cat: "Finance", desc: "Manage your money.", img: "https://images.unsplash.com/photo-1579621970588-a35d0e7bb9b6?w=400&q=80" },
  { id: 15, title: "Eco-Friendly Delivery", cat: "Environment", desc: "Low emission transport.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" },
  { id: 16, title: "Language Learning App", cat: "Education", desc: "Learn new languages.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80" },
  { id: 17, title: "AI Security Camera", cat: "Tech", desc: "Safe homes always.", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&q=80" },
  { id: 18, title: "Nutritional Planner", cat: "Health", desc: "Eat healthy food.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80" },
  { id: 19, title: "Solar Power Hub", cat: "Environment", desc: "Renewable energy.", img: "https://images.unsplash.com/photo-1509391366360-2addb56e7d28?w=400&q=80" },
  { id: 20, title: "University CRM", cat: "Education", desc: "Manage campus life.", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80" },
];

export default async function IdeasPage(props) {
  const params = await props.searchParams;
  
  const query = params.q?.toLowerCase() || '';
  const category = params.cat || '';
  const sort = params.sort || 'newest';

  
  let filteredIdeas = ideas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(query);
    const matchesCategory = category ? idea.cat === category : true;
    return matchesSearch && matchesCategory;
  });

  
  if (sort === 'popular') {
    filteredIdeas = [...filteredIdeas].sort((a, b) => b.id - a.id);
  } else {
    
    filteredIdeas = [...filteredIdeas].sort((a, b) => a.id - b.id);
  }

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Explore Ideas</h1>
        
        
        <IdeasFilter />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredIdeas.map((idea) => (
            <div key={idea.id} className="border rounded-2xl p-4 hover:shadow-lg transition-all">
              <div className="h-48 mb-4 overflow-hidden rounded-xl">
                <img src={idea.img} alt={idea.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs px-2 py-1 rounded bg-slate-100">{idea.cat}</span>
              <h3 className="font-bold text-lg mt-2">{idea.title}</h3>
              <p className="text-sm mb-4">{idea.desc}</p>
              <Link href={`/ideas/${idea.id}`} className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                View Details
              </Link>
            </div>
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <p className="text-center text-slate-500 mt-16">No ideas found. Try a different search.</p>
        )}
      </div>
    </main>
  );
}