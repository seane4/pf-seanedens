import React from 'react'
import Nav from '../nav/Nav';
import Sidebar from '../sidebar/Sidebar'
import Hero from '../hero/Hero';
import "./home.scss"
import Projects from '../projects/Projects';
import About from "../about/About"
import Contact from "../contact/Contact"
import { ThemeProvider, useTheme } from "../../ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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

  
  return (
    <div className={theme === "light" ? "home" : "home dark"}>
        <Nav/>
        <div className="container">
          <Sidebar/>
          <div className="content">
            <Hero/>
            <Projects/>
            <About/>
            <Contact/>

          </div>
          <ScrollButton/>
        </div>

    </div>
  )
}

export default Home