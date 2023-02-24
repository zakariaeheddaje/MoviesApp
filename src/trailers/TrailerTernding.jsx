import React, { Fragment, useEffect, useState, } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import '../styles/TrailerMovies.css'

function TrailerTrending({ TrendTitle, toggle }) {
  const [video, setVideo] = useState(TrendTitle);
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    }).catch((error) => {
      console.error(error);
    });
  }, [video]);

  return (
    <Fragment>
      <div className="Container">
      </div>
      <div className="player">
        <h2 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{TrendTitle}</h2>
        <ReactPlayer url={videoURL} controls={true} width={750} height={450} muted={false} />
      </div>
    </Fragment>
  )
}

export default TrailerTrending
