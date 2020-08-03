import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Video from './components/Video';
import db from './firebase';

function App() {
  const appRef = useRef(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  return (
    <div className='App'>
      <div className='app__videos' ref={appRef}>
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
              appRef={appRef}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
