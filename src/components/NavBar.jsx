import React, { Fragment, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { Routes, Route, NavLink } from 'react-router-dom'
import '../styles/NavBar.css'
import Movies from './Movies'
import TvShows from './TvShows'
import Pricing from './Pricing'
import Trending from './Trends'
export const Container = React.createContext()

function NavBar() {
    const [toggle, setToggle] = useState(true)
    const [inputValue, setInputValue] = useState('')
    return (
        <Container.Provider value={{ toggle, inputValue }}>
            <Fragment>
                <nav className={toggle ? '' : 'navBarColor'}>
                    <div className='nav-options'>
                        <h1 id={toggle ? '' : "heading"}>MYFLIX</h1>
                        <NavLink to='' >
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                        </NavLink>
                        <NavLink to='/TvShows' >
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span>
                        </NavLink>
                        <NavLink to='/Trending' >
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
                        </NavLink>
                        <NavLink to='/Pricing' >
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
                        </NavLink>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder='Search' id={toggle ? 'input-dark' : 'input-light'} onChange={(e) => setInputValue(e.target.value)} />
                        <HiSearch fontSize={21}  id={toggle ? 'search-dark' : 'search-light'} />
                        <div id={toggle ? "color-switcher-dark" : "color-switcher-light"} onClick={() => setToggle(!toggle)}>
                            <div id={toggle ? "color-switcher-mover" : "color-switcher-moved"}>
                                {toggle ? <MdLightMode fontSize={35} color={'white'} /> : <MdDarkMode fontSize={35}/>}
                            </div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='' element={<Movies />} />
                    <Route path='TvShows' element={<TvShows />} />
                    <Route path='Trending' element={<Trending />} />
                    <Route path='Pricing' element={<Pricing />} />
                </Routes>
            </Fragment>
        </Container.Provider >
    )
}

export default NavBar