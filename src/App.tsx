import React from 'react';
import Header from './components/Header';
import GameEmbed from './components/GameEmbed';
import About from './components/About';
import Videos from './components/Videos';
import Guide from './components/Guide';
// import Reviews from './components/Reviews';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <GameEmbed />
        <About />
        <Videos />
        <Guide />
        {/* <Reviews /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;