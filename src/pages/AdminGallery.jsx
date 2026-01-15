import React, { useEffect, useState } from 'react';

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchImages = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/gallery/all');
      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.error('Failed to fetch images:', err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('http://localhost:5000/api/gallery/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ imageUrl, caption }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess('Image uploaded successfully!');
        setImageUrl('');
        setCaption('');
        fetchImages();
      } else {
        setError(data.message || 'Upload failed');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/gallery/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setImages(images.filter((img) => img._id !== id));
      } else {
        setError(data.message || 'Delete failed');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Gallery</h2>

      <form onSubmit={handleUpload} className="mb-6 space-y-4 max-w-md">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Caption (optional)"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img._id} className="bg-white p-4 shadow rounded">
            <img src={img.imageUrl} alt={img.caption} className="w-full h-48 object-cover mb-2 rounded" />
            <p className="text-sm text-gray-600">{img.caption}</p>
            <button
              onClick={() => handleDelete(img._id)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;