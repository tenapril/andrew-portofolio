import React from 'react';

const AnimatedText: React.FC = () => {
  return (
    <div className="overflow-hidden py-10 bg-background">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 flex">
          <span className="text-4xl mx-4 text-foreground">Enthusiast Data Engineer - Indonesia</span>
          <span className="text-4xl mx-4 text-foreground">Enthusiast Data Engineer - Indonesia</span>
          <span className="text-4xl mx-4 text-foreground">Enthusiast Data Engineer - Indonesia</span>
          <span className="text-4xl mx-4 text-foreground">Enthusiast Data Engineer - Indonesia</span>
        </div>
        <div className="animate-marquee2 whitespace-nowrap py-2 flex absolute top-0 left-0">
          <span className="text-4xl mx-4 text-foreground">Enthusiast Data Engineer - Indonesia</span>
          <span className="text-4xl mx-4 text-foreground">Enthusiast Data Engineer - Indonesia</span>
          <span className="text-4xl mx-4 text-foreground">Enthusiast Data Engineer - Indonesia</span>
          <span className="text-4xl mx-4 text-foreground">Enthusiast Data Engineer - Indonesia</span>
        </div>
      </div>
      <div className="relative flex overflow-x-hidden mt-4">
        <div className="animate-marquee whitespace-nowrap py-2 flex">
          <span className="text-4xl mx-4 p-2">Let's work together, I'm open for discussion</span>
          <span className="text-4xl mx-4 p-2">Let's work together, I'm open for discussion</span>
          <span className="text-4xl mx-4 p-2">Let's work together, I'm open for discussion</span>
          <span className="text-4xl mx-4 p-2">Let's work together, I'm open for discussion</span>
        </div>
        <div className="animate-marquee2 whitespace-nowrap py-2 flex absolute top-0 left-0">
          <span className="text-4xl mx-4 p-2">Let's work together, I'm open for discussion</span>
          <span className="text-4xl mx-4 p-2">Let's work together, I'm open for discussion</span>
          <span className="text-4xl mx-4 p-2">Let's work together, I'm open for discussion</span>
          <span className="text-4xl mx-4 p-2">Let's work together, I'm open for discussion</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;