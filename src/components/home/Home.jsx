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

//fonts
import "../../fonts/Mona-Sans-ExtraBold.woff2";
import "../../fonts/Mona-Sans-Medium.woff2";
import "../../fonts/Mona-Sans-Regular.woff2";
import "../../fonts/Mona-Sans-SemiBold.woff2";
import "../../fonts/Mona-Sans-Bold.woff2";
import ScrollButton from '../scrollbutton/ScrollButton';


function Home() {

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    AOS.init();
  }, [])

  const [projectWidth, setProjectWidth] = useState(window.innerWidth);
  const projectBreakpoint = 1330;

  useEffect(() => {
  const handleWindowResize = () => setProjectWidth(window.innerWidth)
  window.addEventListener("resize", handleWindowResize);

  return () => window.removeEventListener("resize", handleWindowResize);
  }, [])

  return (
    <div className={theme === "light" ? "home" : "home dark"}>
        <Nav width={projectWidth}/>
        <div className="container">
          {projectWidth < 1000 ? "" : <Sidebar/>}
          <div className="content">
            <Hero/>
            {projectWidth > projectBreakpoint ? <Projects/> : <ProjectsMobile/>}
            <About/>
            <Contact/>

          </div>
          <ScrollButton/>
        </div>

    </div>
  )
}

export default Home