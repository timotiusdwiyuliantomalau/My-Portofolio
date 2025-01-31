import React, { useEffect } from 'react';

const FastBotsEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.fastbots.ai/embed.js';
    script.defer = true;
    script.dataset.botId = 'cm6iza0uw190asvk27hbvutfa';
    
    document.body.appendChild(script);

    return () => {
      // Cleanup ketika component di-unmount
      document.body.removeChild(script);
    };
  }, []);

  return null; // Component ini tidak merender apapun
};

export default FastBotsEmbed;