import React, { useEffect, useState, useRef } from 'react';
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
  appRef,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    appRef.current.addEventListener('scroll', checkVisible);

    return () => appRef.current.removeEventListener('scroll');
  }, []);

  const checkVisible = () => {
    const rect = videoRef.current.getBoundingClientRect();
    const viewHeight = appRef.current.clientHeight;
    if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
      videoRef.current.pause();
    }
  };

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
