import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import TrailerMovies from '../trailers/TrailerMovies'
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai'
import { Container } from './NavBar'
import NoImg from './NoImg.jpeg'
import '../styles/Movies.css'

function Movies() {
  const { toggle, inputValue } = useContext(Container)
  const input = inputValue
  const [MoviesData, setMoviesData] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle] = useState()
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const Images = 'https://image.tmdb.org/t/p/w500'
  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: 'dd4484f8f3624798c762f90b03c6b4f3',
        query: input
      }
    })
    const results = (data.data.results)
    setMoviesData(results)
  }

  useEffect(() => {
    setTimeout(() =>{
      MovieCall()
    })
  }
    , [input])
    const MovieTitle = (movie) => {
      setTitle(movie.name)
      setTrailer(!trailer)
  
    }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className='movies-container'>
          {MoviesData.map((movie) => {
            return (
              <Fragment>
                <div id={trailer ? 'container' : 'NoContainer'}>
                  <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() =>  MovieTitle(movie)}/>
                  <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt='' onClick={() =>  MovieTitle(movie)}/>
                  <h3 id={movie.title.length > 28 ? 'smaller-Text' : ''} className={toggle ? "mainColor" : "secondaryColor"}>{movie.title}</h3>
                </div>
              </Fragment>
            )
          })}
          {trailer ? console.log : <TrailerMovies MoviesTitle={title} toggle={toggle}/>}
          <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} onClick={() => setTrailer(true)} />
        </div>
      </div>
    </Fragment>
  )
}

export default Movies