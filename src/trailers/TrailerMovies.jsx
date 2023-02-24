import React, { Fragment, useEffect, useState, } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import '../styles/TrailerMovies.css'

function TrailerMovies({ moviesTitle, toggle }) {
  const [video, setVideo] = useState(moviesTitle);
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
      <div className='player'>
        <h2 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{moviesTitle}</h2>
        <ReactPlayer url={videoURL} controls={true} width={750} height={450} muted={false} />
      </div>
      </div>

    </Fragment>
  )
}

export default TrailerMovies
