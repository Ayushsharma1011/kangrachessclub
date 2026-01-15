import React, { useEffect, useState } from 'react';

const AdminSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState('');

  // ✅ Fetch submissions from backend
  const fetchSubmissions = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/submissions/pending', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setSubmissions(data);
      } else {
        setError(data.message || 'Failed to fetch submissions');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // ✅ Approve a submission
  const handleApprove = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/submissions/approve/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (res.ok) {
        setSubmissions(submissions.filter((sub) => sub._id !== id));
        alert('Submission approved successfully');
      } else {
        alert('Failed to approve');
      }
    } catch {
      alert('Error approving submission');
    }
  };

  // ✅ Delete a submission
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/submissions/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (res.ok) {
        setSubmissions(submissions.filter((sub) => sub._id !== id));
      } else {
        alert('Failed to delete');
      }
    } catch {
      alert('Error deleting submission');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Submissions</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {submissions.length === 0 ? (
        <p>No pending submissions.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {submissions.map((sub) => (
            <div key={sub._id} className="bg-white shadow p-4 rounded">
              <img src={sub.imageUrl} alt={sub.caption} className="w-full h-48 object-cover rounded mb-2" />
              <p className="text-sm mb-2">{sub.caption}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleApprove(sub._id)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDelete(sub._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSubmissions;
