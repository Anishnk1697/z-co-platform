import React, { useState, useMemo, useEffect } from 'react';

// Smart Image Component with Fallback Logic
export const SmartImage = ({
  alt,
  className,
  fallbackSeed
}: {
  alt: string;
  className?: string;
  fallbackSeed: string;
}) => {
  // Drastically reduced filename patterns to minimize flickering/network thrashing
  const urls = useMemo(() => {
    const patterns = [
      `/asset/${fallbackSeed}.jpg`,
      `/asset/${fallbackSeed}.png`,
      `/asset/${fallbackSeed}.jpeg`,
      `/input_file_0.jpg`,
      `/input_file_1.jpg`,
      `https://picsum.photos/seed/${fallbackSeed}/1200/1600`
    ];
    return patterns;
  }, [fallbackSeed]);

  const [srcIndex, setSrcIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentSrc = urls[srcIndex];

  const handleError = () => {
    if (srcIndex < urls.length - 1) {
      setSrcIndex(prev => prev + 1);
      setIsLoaded(false);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className} bg-slate-900/50`}>
      {/* Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-slate-500 animate-spin opacity-20" />
        </div>
      )}

      <img
        src={currentSrc}
        alt={alt}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        referrerPolicy="no-referrer"
        className={`${className} transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
      />
    </div>
  );
};

// Smart Video Component with Fallback Logic
export const SmartVideo = ({ className }: { className?: string }) => {
  const videoUrls = useMemo(() => [
    '/asset/hero-video.mp4',
    ...Array.from({ length: 20 }, (_, i) => `/input_file_${i}.mp4`),
    'https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-city-32644-large.mp4'
  ], []);

  const [videoSrc, setVideoSrc] = useState<string | null>(videoUrls[0]);
  const [attempt, setAttempt] = useState(0);

  const handleVideoError = () => {
    if (attempt < videoUrls.length - 1) {
      const nextAttempt = attempt + 1;
      setAttempt(nextAttempt);
      setVideoSrc(videoUrls[nextAttempt]);
    }
  };

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      key={videoSrc}
      className={className}
      onError={handleVideoError}
    >
      {videoSrc && <source src={videoSrc} type="video/mp4" onError={handleVideoError} />}
      Your browser does not support the video tag.
    </video>
  );
};
