
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc = "/placeholder.svg", 
  className 
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      onError={handleError} 
      className={className} 
    />
  );
};

export default ImageWithFallback;
