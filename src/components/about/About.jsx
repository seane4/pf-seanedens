import "./about.scss"
import SeanPic2 from "./SeanPic2.png"
import SeanPic2Banner from "./SeanPic2Banner.png"
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import { ThemeProvider, useTheme } from "../../ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

function About() {

  const { theme, toggleTheme } = useTheme();
  const [width, setWidth] = useState(window.innerWidth);
  const photoBreakpoint = 1800;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [])


  return (
    <div className={theme === "light" ? "about" : "about dark"}>
      <section id="About">

      <div className="wrapper">
        <div className="title">//ABOUT</div>
        
        <div className="desc">
          Hello! I'm a self-taught designer who enjoys bringing experiences to life. I come from a business background, which helps me connect the dots between things like user frustrations, competitive analysis, visual design, and technical constraints. Having an end-to-end perspective excites me because I'm an extremely curious self-learner and always looking for ways to improve my holistic design approach.
        </div>

        <div className="container">
          <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true" data-aos-anchor-placement="center-bottom">
            <div className="imgContainer">
              <img src={width < photoBreakpoint ? SeanPic2Banner : SeanPic2} />
            </div>
          </div>
          
          <div className="traitsContainer">
            <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="300" data-aos-once="true" data-aos-anchor-placement="center-bottom">
              <div className={theme === "light" ? "trait" : "trait dark"}>
                <div className="traitWrapper">
                  <div className="traitContainer">
                    <div className="traitTitle">{<BookmarksOutlinedIcon className="icon"/>}CURIOUS</div>
                    <div className={theme === "light" ? "traitDesc" : "traitDesc dark"}>Being curious is a large part of who I am. Every day I ask questions, seek out new information, and reflect on what I already believe to be true.</div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="400" data-aos-once="true" data-aos-anchor-placement="center-bottom">
              <div className={theme === "light" ? "trait" : "trait dark"}>
                <div className="traitWrapper">
                  <div className="traitContainer">
                    <div className="traitTitle">{<SettingsSuggestOutlinedIcon className="icon"/>}RESOURCEFUL</div>
                    <div className={theme === "light" ? "traitDesc" : "traitDesc dark"}>In challenging environments with limited resources, I do my best to find creative solutions and work efficiently. Most times we overlook the idea of doing more with less.</div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="500" data-aos-once="true" data-aos-anchor-placement="center-bottom">
              <div className={theme === "light" ? "trait" : "trait dark"}>
                <div className="traitWrapper">
                  <div className="traitContainer">
                    <div className="traitTitle">{<QueryStatsOutlinedIcon className="icon"/>}INTROSPECTIVE</div>
                    <div className={theme === "light" ? "traitDesc" : "traitDesc dark"}>It's important to me that I reflect and seek feedback to better understand my strengths and weaknesses, then use that to continually improve and develop.</div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="600" data-aos-once="true" data-aos-anchor-placement="center-bottom">
              <div className={theme === "light" ? "trait" : "trait dark"}>
                <div className="traitWrapper">
                  <div className="traitContainer">
                    <div className="traitTitle">{<AirlineStopsIcon className="icon"/>}RESILIENT</div>
                    <div className={theme === "light" ? "traitDesc" : "traitDesc dark"}>Remaining focused and committed during harsh periods is a valuable part of the process for me. Things always fall in place when the time is right.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </section>
    </div>
  )
}

export default About