import React, { useState } from 'react';

interface ProductImagesProps {
  images: string[];
  name: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ images, name }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="grid gap-4">
      <div className="aspect-h-5 aspect-w-4 overflow-hidden rounded-lg">
        <img
          src={images[currentImage]}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`relative overflow-hidden rounded-lg ${
                i === currentImage ? 'ring-2 ring-blue-800' : 'ring-1 ring-gray-200'
              }`}
            >
              <img
                src={image}
                alt={`${name} - изображение ${i + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImages;