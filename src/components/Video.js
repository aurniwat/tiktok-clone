import React, { useState, useRef } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      setPlaying((c) => !c);
      videoRef.current.pause();
    } else {
      setPlaying((c) => !c);
      videoRef.current.play();
    }
  };

  return (
    <div className='video'>
      <video
        ref={videoRef}
        className='video__player'
        loop
        onClick={onVideoPress}
        src={url}
      />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter channel={channel} description={description} song={song} />
    </div>
  );
};

export default Video;
