import "./hero.scss"
import { ThemeProvider, useTheme } from "../../ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import seanheadshot from "./SeanHeadshot.png"
import { useEffect } from "react";

function Hero() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="hero">
        <section id="Home">
        <div className="wrapper">
            <div className="titleContainer">
              <div className="heroimg">
                <img src={seanheadshot}/>
              </div>
            <div data-aos="fade-right" data-aos-duration="900" data-aos-once="true">
                <div 
                className={theme === "light" ? "title" : "title dark"}>Experience & <br/> Interface Designer</div>
                <div 
                className={theme === "light" ? "title mini" : "title mini dark"}>(Who can also code!)</div>
            </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="900" data-aos-once="true">
              <div className={theme === "light" ? "textContent" : "textContent dark"}>
                I combine business, design, and front-end development to create human-centered experiences. Currently seeking opportunities.
              </div>
            </div>
            <a href="#Contact" className={theme === "light" ? "buttonMain-light" : "buttonMain-dark"} >Let's Chat</a>
        </div>
        <div className="rightside"></div>
        </section>
    </div>
  )
}

export default Hero