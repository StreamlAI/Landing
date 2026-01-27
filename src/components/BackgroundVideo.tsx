import { useRef, useState } from "react";

interface BackgroundVideoProps {
  src: string;
  poster: string;
  className?: string;
}

export function BackgroundVideo({ src, poster, className = "" }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPoster, setShowPoster] = useState(true);

  const handleCanPlay = () => {
    setIsLoaded(true);
    setTimeout(() => setShowPoster(false), 500);
  };

  const handlePlaying = () => {
    setIsLoaded(true);
    setTimeout(() => setShowPoster(false), 300);
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {showPoster && (
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        onCanPlay={handleCanPlay}
        onPlaying={handlePlaying}
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
