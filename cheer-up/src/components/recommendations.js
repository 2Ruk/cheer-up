import React, { useState, useEffect } from 'react';
import { quoteList } from '../util/quoteList';
import { recommendYoutubeList } from '../util/recomendYoutube';
import Quote from './quote';
import Song from './song';

const Recommendations = () => {
  const [quote, setQuote] = useState('');
  const [song, setSong] = useState({});
  
  const randomSelect = (list) => {
    return list[Math.floor(Math.random() * list.length)]
  }

  useEffect(() => {
    const randomQuote = randomSelect(quoteList);
    const randomSong =randomSelect(recommendYoutubeList)
    setQuote(randomQuote);
    setSong(randomSong)
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomQuote = randomSelect(quoteList);
      setQuote(randomQuote);
    }, 20000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='main-container'>
      <div className='quote-song-container'>
        <Quote quote={quote} />
        <Song title={song.title} youtuber={song.youtuber} videoId={song.videoId} />
      </div>
    </div>
  );
};

export default Recommendations;
