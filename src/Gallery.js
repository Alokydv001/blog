/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';


const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {images.map((image, index) => (
        <div key={index} onClick={() => handleImageClick(image)}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
