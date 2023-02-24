import React, { Fragment, useEffect, useState, } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import '../styles/TrailerMovies.css'

function TrailerTvShows({ TvShowsTitle, toggle }) {
  const [video, setVideo] = useState(TvShowsTitle);
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    })
  }, [video]);

  return (
    <Fragment>
      <div className="Container">
      </div>
      <div className="player">
        <h2 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{TvShowsTitle}</h2>
        <ReactPlayer url={videoURL} controls={true} width={750} height={450} muted={false}/>
      </div>
    </Fragment>
  )
}

export default TrailerTvShows
