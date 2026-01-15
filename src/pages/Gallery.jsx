import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
   


const Gallery = () => {
  const navigate=useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'tournaments', name: 'Tournaments' },
    { id: 'training', name: 'Training Sessions' },
    { id: 'awards', name: 'Awards & Ceremonies' },
    { id: 'events', name: 'Special Events' }
  ];

  const galleryImages = [
    {
      id: 1,
      category: 'tournaments',
      title: 'Kangra Rapid Chess Championship 2025',
      description: 'Intense competition during the championship',
      image: 'ca1.jpg,ca2.jpg,ca3.jpg,ca5.jpg,pic1.jpg,a1.jpg'
    }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    const imageList = image.image.split(',').map(img => img.trim());
    setSelectedImage({ ...image, images: imageList });
    setActiveImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    const nextImage = filteredImages[newIndex];
    const nextImageList = nextImage.image.split(',').map(img => img.trim());
    setSelectedImage({ ...nextImage, images: nextImageList });
    setActiveImageIndex(0);
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Kangra Chess Club</title>
        <meta name="description" content="Explore our photo gallery showcasing tournaments, training sessions, awards ceremonies, and special events at Kangra Chess Club." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Capturing memorable moments from our chess tournaments, training sessions, and special events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => {
              const imageList = image.image.split(',').map(img => img.trim());
              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer card-hover"
                  onClick={() => openLightbox(image)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      alt={image.description}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      src={imageList[0]}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox-overlay fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full mx-auto p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) =>
                  prev === 0 ? selectedImage.images.length - 1 : prev - 1
                );
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) =>
                  (prev + 1) % selectedImage.images.length
                );
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="flex justify-center items-center max-h-[80vh] overflow-auto"
            >
              <img
                src={selectedImage.images[activeImageIndex]}
                alt={`${selectedImage.title} ${activeImageIndex + 1}`}
                className="max-h-[70vh] rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-black bg-opacity-75 text-white p-4 rounded-b-lg mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <p className="text-sm text-gray-400 mt-2">
                Image {activeImageIndex + 1} of {selectedImage.images.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Upload Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Chess Moments</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Have photos from our events? We'd love to feature them in our gallery. 
              Contact us to share your chess memories with the community.
            </p>
            <Button onClick={()=>navigate('/contact')} className="bg-purple-600 hover:bg-purple-700" size="lg">
              Contact Us to Share Photos
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
