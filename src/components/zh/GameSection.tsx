import { useState } from 'react';
import { Maximize, Play } from 'lucide-react';


export function GameSection() {
  const [isPlaying, setIsPlaying] = useState(false);


  const handlePlay = () => setIsPlaying(true);

  const toggleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (!iframe) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      iframe.requestFullscreen();
    }
  };

  return (
    <section id="game" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="relative aspect-video max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <img className="absolute" src='https://img.itch.zone/aW1nLzE5MDc4Mzc1LnBuZw==/original/9E%2BivZ.png'></img>
              <button
                onClick={handlePlay}
                className="bg-white text-black px-8 py-4 rounded-full flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
              >
                <Play className="w-6 h-6" />
                <span className="font-medium">Play Game</span>
              </button>
            </div>
          ) : (
            <>
              <iframe
                src="https://html-classic.itch.zone/html/12341048/index.html"
                className="w-full h-full"
                allow="fullscreen"
              />
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-colors"
                title="Fullscreen"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}