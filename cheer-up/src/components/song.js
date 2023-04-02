import React from 'react';

const Song = ({ title, youtuber,videoId }) => (
  <div>
    <h3>잠시, 쉬어가요</h3>
    {videoId && (
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}
    {/* <p>{title} </p> */}
    {/* <small>{youtuber} 님의 리스트</small> */}
  </div>
);

export default Song;