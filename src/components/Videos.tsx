
import ReactPlayer from 'react-player';

export default function Videos() {
  const videos = [
    'https://www.youtube.com/watch?v=FQSPCvJDbls',
    'https://www.youtube.com/watch?v=Ji045usI72U',
    'https://www.youtube.com/watch?v=i-9hIsEsSSo'
  ];

  return (
    <section id="videos" className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Watch & Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((url, index) => (
            <div key={index} className="aspect-video">
              <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls
                light
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}