import { useEffect, useState } from "react";

function VideoSection({ data }) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">

      {/* Loading Screen */}
      {!showVideo && (
        <div className="flex items-center justify-center h-full bg-black text-white text-2xl">
          Loading...
        </div>
      )}

      {/* YouTube Video After 10 Seconds */}
      {showVideo && (
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/5ECv0XLOBaI?autoplay=1&mute=1&loop=1&playlist=5ECv0XLOBaI&controls=0&showinfo=0&modestbranding=1"
          title="Project Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default VideoSection;
