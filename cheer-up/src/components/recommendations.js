import React, { useState, useEffect } from 'react';
import { quoteList } from '../util/quoteList';
import { recommendYoutubeList } from '../util/recomendYoutube';
import Quote from './quote';
import Song from './song';
import { IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const Recommendations = () => {
  const [playList , setPlayList] = useState([]);
  const [quote, setQuote] = useState('');
  const [song, setSong] = useState({});
  
  const randomSelect = (list) => {
    return list[Math.floor(Math.random() * list.length)]
  }

  const handlePrevSong = () => {
    if(playList.length <= 1) return;
    playList.pop();
    setSong(playList[playList.length - 1])
  };

  const handleNextSong = () => {
    const randomSong = randomSelect(recommendYoutubeList)
    playList.push(randomSong);
    setSong(randomSong)
  };

  useEffect(() => {
    const randomQuote = randomSelect(quoteList);
    const randomSong =randomSelect(recommendYoutubeList)
    setQuote(randomQuote);
    if(playList.length === 0){
      playList.push(randomSong);
      setSong(randomSong)
    }
  }, []);



  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomQuote = randomSelect(quoteList);
      setQuote(randomQuote);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='main-container'>
      <div className='quote-song-container'>
        <Quote quote={quote} />
        <div className="song-wrapper">
          <IconButton className='song-button' onClick={handlePrevSong} size='large' sx={{ fontSize: '3rem' }}>
            <ArrowLeft />
          </IconButton>
          <Song title={song.title} youtuber={song.youtuber} videoId={song.videoId} />
          <IconButton className='song-button' onClick={handleNextSong} size='large' sx={{ fontSize: '3rem' }}>
            <ArrowRight />
          </IconButton>
        </div>

    
      </div>
    </div>
  );
};

export default Recommendations;
