import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin');
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/protected/dashboard", {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();
        setAdminData(data);
      } catch (err) {
        console.error("Error verifying token:", err);
        navigate('/admin');
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-600 flex items-center justify-center p-6">
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl w-full max-w-5xl p-10">
        
        {/* Header Welcome Section */}
        {adminData ? (
          <>
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
              Welcome, {adminData.username} 👋
            </h1>
            <p className="text-lg text-white/90 mb-10">
              Manage your college data from here.
            </p>

            {/* Action Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

              <Link
                to="/admin-gallery"
                className="bg-white/20 backdrop-blur-md shadow-xl hover:bg-white/30 
                text-white px-6 py-6 rounded-2xl font-bold text-center transition transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">📸</div>
                Manage Gallery
              </Link>

              <Link
                to="/admin-announcement"
                className="bg-white/20 backdrop-blur-md shadow-xl hover:bg-white/30
                text-white px-6 py-6 rounded-2xl font-bold text-center transition transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">📢</div>
                Announcements
              </Link>

              <Link
                to="/admin-submissions"
                className="bg-white/20 backdrop-blur-md shadow-xl hover:bg-white/30
                text-white px-6 py-6 rounded-2xl font-bold text-center transition transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">📝</div>
                Player Submissions
              </Link>

            </div>

            {/* Logout button */}
            <div className="text-right mt-10">
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-6 py-2 text-white font-semibold rounded-xl shadow-md"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <p className="text-white text-lg">Loading...</p>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
