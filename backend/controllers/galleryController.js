import Gallery from '../models/Gallery.js';

// Get all images
export const getAllImages = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: 'Server error while fetching images.' });
  }
};

// Upload new image
export const uploadImage = async (req, res) => {
  const { imageUrl, caption } = req.body;
  if (!imageUrl) {
    return res.status(400).json({ message: 'Image URL is required' });
  }

  try {
    const newImage = new Gallery({ imageUrl, caption });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ message: 'Upload failed' });
  }
};

// Delete image
export const deleteImage = async (req, res) => {
  try {
    const deleted = await Gallery.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Image not found' });
    res.json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed' });
  }
};
