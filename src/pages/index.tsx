import React, { useEffect } from 'react';
import './app.css';

interface SceneProps {
  image: string;
  text?: string;
  music: string;
  extraContent?: React.ReactNode;
}

const Scene: React.FC<SceneProps> = ({ image, text, music, extraContent }) => {
  useEffect(() => {
    const audio = new Audio(music);
    audio.play();
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [music]);

  return (
    <div className="scene" style={{ backgroundImage: `url(${image})` }}>
      {text && <div className="text">{text}</div>}
      {extraContent}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="container">
      <Scene 
        image="https://cdn.dribbble.com/users/3071760/screenshots/13150887/media/be4fafc7ccbbad9ef29aafd555806fd4.png" 
        music="https://example.com/music1.mp3" 
      />
      <Scene 
        image="https://example.com/thinking_future.jpg" 
        text="思考未来是什么样" 
        music="https://example.com/music2.mp3" 
      />
      <Scene 
        image="https://example.com/quiet_stream.jpg" 
        text="我们未来的可能是什么样: 静谧小溪旁听者溪水入眠" 
        music="https://example.com/music3.mp3"
      />
      <Scene 
        image="https://example.com/neon_city.jpg" 
        text="还是霓虹闪烁万家灯火的一员" 
        music="https://example.com/music4.mp3"
      />
      <Scene 
        image="https://example.com/grassland.jpg"
        text="又或者选择大草原的辽阔和自由" 
        music="https://example.com/music5.mp3"
      />
      <Scene 
        image="https://example.com/together.jpg" 
        text="但是人生最重要的就是现在" 
        music="https://example.com/music6.mp3"
      />
    </div>
  );
};

export default App;