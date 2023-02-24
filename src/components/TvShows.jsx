import axios from 'axios'
import React, { Fragment, useEffect, useState, useContext } from 'react'
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai'
import { Container } from './NavBar'
import '../styles/Movies.css'
import NoImg from './NoImg.jpeg'
import TrailerTvShows from '../trailers/TrailerTvShows'


function TvShows() {
  const { toggle, inputValue } = useContext(Container)
  const input = inputValue
  const [showData, setShowData] = useState([])
  const Shown = input ? 'search' : 'discover'
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle] = useState()
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`
  const Images = 'https://image.tmdb.org/t/p/w500'

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: 'dd4484f8f3624798c762f90b03c6b4f3',
        query: input

      }
    })
    const results = (data.data.results)
    setShowData(results)
  }
  useEffect(() => {
    TvShows()
  }, [input])
  console.log(showData)
  const TvShowTitle = (shows) => {
    setTitle(shows.name)
    setTrailer(!trailer)

  }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className='movies-container'>
          {showData.map((shows) => {
            return (
              <Fragment key={shows.id}>
                <div id={trailer ? 'container' : 'NoContainer'}>
                  <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => TvShowTitle(shows)} />
                  <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg} alt='' onClick={() => TvShowTitle(shows)} />
                  <h3 id={shows.name.length > 28 ? 'smaller-Text' : ''} className={toggle ? "mainColor" : "secondaryColor"}>{shows.name}</h3>
                </div>
              </Fragment>
            )
          })}
          {trailer ? console.log : <TrailerTvShows TvShowsTitle={title} toggle={toggle}/>}
          <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} onClick={() => setTrailer(true)} />

        </div>
      </div>

    </Fragment>
  )
}

export default TvShows