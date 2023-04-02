import React from 'react';

const Song = ({ title, youtuber,videoId }) => {

  return (
  <div>
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
        
  </div>
  )
}

export default Song;