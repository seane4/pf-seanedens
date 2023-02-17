import "./hero.scss"
import { ThemeProvider, useTheme } from "../../ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Hero() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="hero">
        <section id="Home">
        <div className="wrapper">
            <div className="titleContainer">
            <div data-aos="fade-right" data-aos-duration="900" data-aos-once="true">
                <div 
                className={theme === "light" ? "title" : "title dark"}>PRODUCT</div>
                <div 
                className={theme === "light" ? "title indent" : "title dark indent"}>DESIGNER &</div>
                <div 
                className={theme === "light" ? "title" : "title dark"}>DEVELOPER</div>
            </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="900" data-aos-once="true">
              <div className={theme === "light" ? "textContent" : "textContent dark"}>
                  Business-minded designer and developer. I make human-centered tools that aim to drive organizational value with curiosity at the center of my creative process.
              </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Hero