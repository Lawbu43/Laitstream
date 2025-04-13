import { useState, useEffect } from 'react';

function Hero() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Simulate live stream status check
    setTimeout(() => setIsLive(true), 2000);
  }, []);

  return (
    <section id="home" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Watch Rugby Live</h2>
        <p className="text-lg mb-6">Stream your favorite rugby matches in HD with La_IT Consultant.</p>
        <div className="max-w-4xl mx-auto">
          {isLive ? (
            <video
              className="w-full rounded-lg shadow-lg"
              controls
              autoPlay
              muted
            >
              <source src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" type="application/vnd.apple.mpegurl" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="bg-gray-300 h-96 flex items-center justify-center rounded-lg">
              <p className="text-xl">Stream loading...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;