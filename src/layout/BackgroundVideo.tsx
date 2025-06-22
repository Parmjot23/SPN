import React from 'react';
import bgVideo from '../assets/Animation - 1750619673472.webm';

const BackgroundVideo: React.FC = () => (
  <video
    className="fixed inset-0 w-full h-full object-cover -z-10"
    src={bgVideo}
    autoPlay
    loop
    muted
    playsInline
  />
);

export default BackgroundVideo;
