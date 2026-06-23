'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function IdeasFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`/ideas?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
      <input 
        type="text" 
        placeholder="Search ideas..." 
        className="px-4 py-2 rounded-lg border border-slate-300 dark:bg-slate-800"
        onChange={(e) => handleFilter('q', e.target.value)}
      />
      
      <select 
  onChange={(e) => handleFilter('cat', e.target.value)} 
  className="px-4 py-2 rounded-lg border border-slate-300 dark:bg-slate-800"
>
  <option value="">All Categories</option>
  <option value="AI">AI</option>
  <option value="Education">Education</option>
  <option value="Environment">Environment</option>
  <option value="Finance">Finance</option>
  <option value="Health">Health</option>
  <option value="Tech">Tech</option>
</select>

      <select onChange={(e) => handleFilter('sort', e.target.value)} className="px-4 py-2 rounded-lg border border-slate-300 dark:bg-slate-800">
        <option value="newest">Newest</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
}