import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Gar Type</h2>
        <p className="text-lg mb-4">
          Gar Type is a free pixel art shooting game developed by Lumpy. Set in a sci-fi universe
          with a humorous twist, players defend Earth from an invasion by a living planet using
          prototype weapons and power-ups.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <FeatureCard
            title="Mouse Control"
            description="Control your character with mouse movements and clicks to shoot"
          />
          <FeatureCard
            title="Power-ups"
            description="Collect random power-ups to enhance your combat abilities"
          />
          <FeatureCard
            title="Pixel Art"
            description="Beautiful pixel art graphics with a unique sci-fi theme"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}