import React, { useEffect, useState } from 'react';

const AdminAnnouncement = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch latest announcement
  const fetchAnnouncement = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/announcements');
      const data = await res.json();
      if (data) {
        setTitle(data.title || '');
        setContent(data.content || '');
      }
    } catch (err) {
      console.error('Error fetching announcement:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/announcements/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('✅ Announcement updated successfully!');
      } else {
        setMessage(data.message || '❌ Failed to update.');
      }
    } catch (err) {
      console.error('Update failed:', err);
      setMessage('❌ Something went wrong.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Tournament Announcement</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {message && <p className="text-sm">{message}</p>}

          <div>
            <label className="block text-sm font-semibold">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Announcement
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminAnnouncement;
