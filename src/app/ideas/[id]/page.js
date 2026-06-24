0000000


'use client';
import { useState } from 'react';
import { use } from 'react';
import { ideas } from '@/data/ideasData';

export default function IdeaDetailsPage({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const ideaData = ideas.find((item) => item.id.toString() === id.toString());

  if (!ideaData) return <p className="text-center mt-20">Idea not found!</p>;

  const [comments, setComments] = useState(ideaData.comments || []);
  const [newComment, setNewComment] = useState('');
  
  
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handlePostComment = () => {
    if (!newComment.trim()) return;
    const comment = {
      id: Date.now(),
      user: "Mahzabin",
      text: newComment,
      date: new Date().toLocaleDateString()
    };
    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleDelete = (commentId) => {
    setComments(comments.filter(c => c.id !== commentId));
  };


  const startEdit = (comment) => {
    setEditingId(comment.id);
    setEditText(comment.text);
  };

  
  const saveEdit = (commentId) => {
    setComments(comments.map(c => c.id === commentId ? { ...c, text: editText } : c));
    setEditingId(null);
    setEditText('');
  };

  return (
    <main className="max-w-4xl mx-auto p-6 mt-10">
      <img src={ideaData.img} className="w-full h-80 object-cover rounded-xl" alt={ideaData.title} />
      
      <div className="mt-6">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">{ideaData.cat}</span>
        <h1 className="text-4xl font-bold mt-2">{ideaData.title}</h1>
        <p className="text-gray-500">{ideaData.date}</p>

        <div className="grid grid-cols-2 gap-8 mt-8 border-y py-6">
          <div>
            <h4 className="text-sm font-bold text-gray-400 uppercase">Target Audience</h4>
            <p className="mt-1">{ideaData.targetAudience}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-400 uppercase">Budget</h4>
            <p className="mt-1">{ideaData.budget}</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h4 className="font-bold">Problem Statement</h4>
          <p className="text-gray-700">{ideaData.problem}</p>
          <h4 className="font-bold">Proposed Solution</h4>
          <p className="text-gray-700">{ideaData.solution}</p>
        </div>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold mb-4">Comments ({comments.length})</h2>
          <textarea 
            className="w-full p-3 border rounded-lg mb-2"
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button 
            onClick={handlePostComment}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Post Comment
          </button>

          <div className="mt-6">
            {comments.map(c => (
              <div key={c.id} className="mb-4 p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                {editingId === c.id ? (
                  <div className="flex-1 mr-4">
                    <input 
                      className="w-full p-2 border rounded mb-1" 
                      value={editText} 
                      onChange={(e) => setEditText(e.target.value)} 
                    />
                    <button onClick={() => saveEdit(c.id)} className="text-green-600 text-sm font-bold hover:underline">Save</button>
                  </div>
                ) : (
                  <div>
                    <p className="font-bold text-sm">{c.user}</p>
                    <p>{c.text}</p>
                    <p className="text-xs text-gray-400">{c.date}</p>
                  </div>
                )}
                
                <div className="flex gap-2">
                  {editingId !== c.id && (
                    <button onClick={() => startEdit(c)} className="text-blue-500 text-sm hover:underline">Edit</button>
                  )}
                  <button onClick={() => handleDelete(c.id)} className="text-red-500 text-sm hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
