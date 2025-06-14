import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import Features from '../components/Features';
import GoogleMap from '../components/GoogleMap';
import TeamSection from '../components/TeamSection';
import NewsSection from '../components/NewsSection';

const Home = () => {
  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
  script.async = true;
  script.onload = () => {
    window.botpressWebChat.init({
      botId: '36454121-eebc-4a9d-822c-1f0ca92fb5a6',
      hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
      messagingUrl: 'https://messaging.botpress.cloud',
      clientId: '36454121-eebc-4a9d-822c-1f0ca92fb5a6',
      botName: 'Hosponline Help',
      showPoweredBy: false,
      theme: 'prism',
      themeColor: '#f96d00',
      enableReset: true
    });
  };
  document.body.appendChild(script);
}, []);

  return (
    <div>
      <Hero />
      <Features />
      <TeamSection />
      <NewsSection />
      <OurPolicy />
      <NewsletterBox />
      <GoogleMap />
    </div>
  );
};

export default Home;
