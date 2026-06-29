"use client";
import { useState } from "react";

export default function AddIdeaPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    // ফর্মের ডাটা সংগ্রহ করা
    const ideaData = {
      title: form.title.value,
      category: form.category.value,
      shortDescription: form.shortDescription.value,
      detailedDescription: form.detailedDescription.value,
      tags: form.tags.value,
      imageUrl: form.imageUrl.value,
      budget: form.budget.value,
      targetAudience: form.targetAudience.value,
      problem: form.problem.value,
      solution: form.solution.value,
    };

    // সার্ভারে পাঠানো
    const res = await fetch("http://localhost:5000/api/ideas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ideaData),
    });

    if (res.ok) {
      alert("Idea submitted successfully!");
      form.reset(); // ফর্ম খালি করে দেওয়া
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Submit Your Idea</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Idea Title *" className="w-full border p-2" required />
        <input name="category" placeholder="Category *" className="w-full border p-2" required />
        <input name="shortDescription" placeholder="Short Description *" className="w-full border p-2" />
        <textarea name="detailedDescription" placeholder="Detailed Description *" className="w-full border p-2" />
        <input name="tags" placeholder="Tags (comma-separated)" className="w-full border p-2" />
        <input name="imageUrl" placeholder="Image URL" className="w-full border p-2" />
        <input name="budget" placeholder="Estimated Budget" className="w-full border p-2" />
        <input name="targetAudience" placeholder="Target Audience" className="w-full border p-2" />
        <textarea name="problem" placeholder="Problem Statement" className="w-full border p-2" />
        <textarea name="solution" placeholder="Proposed Solution" className="w-full border p-2" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit Idea to Vault</button>
      </form>
    </div>
  );
}