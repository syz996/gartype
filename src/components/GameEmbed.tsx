import { useState } from 'react';

export default function GameEmbed() {
  const [isIframeVisible, setIframeVisible] = useState(false); // 初始状态为隐藏




  return (
    <section id="game" className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="aspect-video w-full max-w-5xl mx-auto bg-black rounded-lg overflow-hidden">
          <iframe
            src="https://html-classic.itch.zone/html/12341048/index.html"
            scrolling="no"
            className="w-full h-full"
            title="Gar Type Game"
            style={{ display: isIframeVisible ? 'block' : 'none' }}></iframe>
          <div style={{ display: !isIframeVisible ? 'block' : 'none' }}>
            <img src='https://img.itch.zone/aW1nLzE5MDg2MDQ1LnBuZw==/original/MhbkMZ.png'></img>
            <img src='https://img.itch.zone/aW1nLzE5MDc4Mzc1LnBuZw==/original/9E%2BivZ.png'></img>
            <div className="button-div">
              <button className="button" onClick={() => setIframeVisible(!isIframeVisible)}>Play Game</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}