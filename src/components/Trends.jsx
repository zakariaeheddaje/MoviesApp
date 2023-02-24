import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Container } from './NavBar'
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai'
import NoImg from './NoImg.jpeg'
import TrailerTrending from '../trailers/TrailerTernding'


function Trends() {
  const [trendTitle, setTrendTitle] = useState('')
  const [trailer, setTrailer] = useState(true)
  const { toggle , inputValue} = useContext(Container)
  const input = inputValue
  const Shown = input ? 'search' : 'trending'
  const Api = `https://api.themoviedb.org/3/${Shown}/all/week`
  const [TrendArray, setTrendArray] = useState([])
  const Images = 'https://image.tmdb.org/t/p/w500'
  const Trends = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: 'dd4484f8f3624798c762f90b03c6b4f3',
        query: input
        
      }
    })
    const results = data.data.results
    setTrendArray(results)
  }
  useEffect(() => {
    Trends()
  }, [input])
  const TrendTitle = ((trend) => {
    setTrendTitle(trend.title)
    setTrailer(!trailer)

  })
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className='movies-container'>
          {TrendArray.map((trend) => {
            return (
              <div id={trailer ? 'container' : 'NoContainer'}>
                <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => TrendTitle(trend)}></AiFillPlayCircle>
                <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImg} alt='' onClick={() => TrendTitle(trend)} />
                <h3 id='smaller-Text' className={toggle ? "mainColor" : "secondaryColor"}>{trend.name} {trend.title}</h3>
              </div>

            )
          })}
          {trailer ? console.log : <TrailerTrending TrendTitle={trendTitle} toggle={toggle}/>}
          <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} cursor={'pointer'} onClick={() => setTrailer(true)} />
        </div>
      </div>
    </Fragment>
  )
}

export default Trends