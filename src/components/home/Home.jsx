import React from 'react'
import Nav from '../nav/Nav';
import Sidebar from '../sidebar/Sidebar'
import Hero from '../hero/Hero';
import "./home.scss"
import Projects from '../projects/Projects';
import ProjectsMobile from '../projects/projectsMobile/ProjectsMobile';
import About from "../about/About"
import Contact from "../contact/Contact"
import { ThemeProvider, useTheme } from "../../ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


//fonts
import "../../fonts/Mona-Sans-ExtraBold.woff2";
import "../../fonts/Mona-Sans-Medium.woff2";
import "../../fonts/Mona-Sans-Regular.woff2";
import "../../fonts/Mona-Sans-SemiBold.woff2";
import "../../fonts/Mona-Sans-Bold.woff2";

import ScrollButton from '../scrollbutton/ScrollButton';
import CloseIcon from '@mui/icons-material/Close';


function Home() {

  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    AOS.init();
  }, [])

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const projectBreakpoint = 1330;

  useEffect(() => {
  const handleWindowResize = () => setScreenWidth(window.innerWidth)
  window.addEventListener("resize", handleWindowResize);

  return () => window.removeEventListener("resize", handleWindowResize);
  }, [])

  return (
    <div className={theme === "light" ? "home" : "home dark"}>
        <div className={menuOpen ? `menuWrapper ${theme} open` : `menuWrapper ${theme}`}>
          <button onClick={() => setMenuOpen(!menuOpen)} className={`close ${theme}`}>{<CloseIcon className='icon'/>}</button>
          <div className={theme === "light" ? "itemWrapper" : "itemWrapper dark"}>
            <Link offset={-200} onClick={() => setMenuOpen(!menuOpen)} smooth spy to="Home" className="item" activeClass="item active">HOME</Link>
            <Link offset={-150} onClick={() => setMenuOpen(!menuOpen)} smooth spy to="Work" className="item">WORK</Link>
            <Link offset={-150} onClick={() => setMenuOpen(!menuOpen)} smooth spy to="About" className="item">ABOUT</Link>
            <Link offset={-150} onClick={() => setMenuOpen(!menuOpen)} smooth spy to="Contact" className="item">CONTACT</Link>
          </div>
          <div className="socialWrapper">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/seanedens/" className={`social ${theme}`}>LinkedIn</a>
            <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/edenssean1/" className={`social ${theme}`}>Pinterest</a>
            <a target="_blank" rel="noreferrer" href="https://github.com/seane4" className={`social ${theme}`}>GitHub</a>
            <a target="_blank" rel="noreferrer" href="https://seane4.medium.com/" className={`social ${theme}`}>Medium</a>
          </div>
        </div>
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} width={screenWidth}/>
        <div className="container">
          {screenWidth < 1000 ? "" : <Sidebar/>}
          <div className="content">
            <Hero/>
            {screenWidth > projectBreakpoint ? <Projects/> : <ProjectsMobile/>}
            <About/>
            <Contact/>
          </div>
          <ScrollButton/>
        </div>

    </div>
  )
}

export default Home