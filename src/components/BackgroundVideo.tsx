import { useEffect, useRef, useState } from "react";

interface BackgroundVideoProps {
  src: string;
  poster: string;
  className?: string;
}

export function BackgroundVideo({ src, poster, className = "" }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const initHls = async () => {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        video.load();
      } else {
        const Hls = (await import("hls.js")).default;
        if (Hls.isSupported()) {
          const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true,
          });
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => {});
          });
        }
      }
    };

    initHls();
  }, [src]);

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
