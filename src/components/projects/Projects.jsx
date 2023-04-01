import "./projects.scss"
import LCIIMG_PNG from "./LCI_WebCoverPNG.png"
import CallMadeIcon from '@mui/icons-material/CallMade'
import TeerlyIMG_PNG from "./Teerly_WebCoverPNG.png"
import CenteIMG_PNG from "./Cente_WebCoverPNG.png"
import SoCircleIMG_PNG from "./ELC_PortfolioCover.png"
import { ThemeProvider, useTheme } from "../../ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react"

function Projects() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="projects">
      <section id="Projects">

      <div className="wrapper">
        <div className={theme === "light" ? "title" : "title dark"}>
          //PROJECTS
        </div>
        <div className="projectGroup">
        <div data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor-placement="top-bottom">
          <div className={theme === "light" ? "project" : "project dark"}>
            <div className="projectWrapper">

              <div className="content">
                <div className="topContent">
                  <span className={theme === "light" ? "projectTitle" : "projectTitle dark"}>
                    SOCIRCLE - ESTÉE LAUDER
                  </span>
                  <span className={theme === "light" ? "desc" : "desc dark"}>
                    A hackathon project designed and developed to enable the discovery of relevant skincare products for those with accessibility needs. Results pending.
                  </span>
                </div>
                <div className="bottomContent">
                  <div className="buttonGroup">
                    <a target="_blank" rel="noreferrer" href="https://seane4.github.io/socircle-app/">
                      <button className={`mainButton-${theme}`}>Live Demo {<CallMadeIcon className="icon"/>}</button>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://seane4.medium.com/socircle-case-study-estée-lauder-accessible-beauty-hackathon-b18a264893fd">
                      <button className={`secondaryButton-${theme}`}>Case Study {<CallMadeIcon className="icon"/>}</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="imageContainer">
                <img src={SoCircleIMG_PNG} />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor-placement="center-bottom">
          <div className={theme === "light" ? "project" : "project dark"}>
            <div className="projectWrapper">

              <div className="content">
                <div className="topContent">
                  <span className={theme === "light" ? "projectTitle" : "projectTitle dark"}>
                    LOLCHAMPINDEX
                  </span>
                  <span className={theme === "light" ? "desc" : "desc dark"}>
                    LoLChampIndex is a UI exploration project that allows League of Legends players to view basic information about in-game characters. Designed and developed for responsive viewing.
                  </span>
                </div>
                <div className="bottomContent">
                  <div className="buttonGroup">
                    <a target="_blank" rel="noreferrer" href="https://seane4.github.io/lolchampindex/">
                      <button className={`mainButton-${theme}`}>Live Demo {<CallMadeIcon className="icon"/>}</button>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://seane4.medium.com/lolchampindex-case-study-interface-design-react-development-c346566dc900">
                      <button className={`secondaryButton-${theme}`}>Case Study {<CallMadeIcon className="icon"/>}</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="imageContainer">
                <img src={LCIIMG_PNG} />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor-placement="center-bottom">
          <div className={theme === "light" ? "project" : "project dark"}>
            <div className="projectWrapper">

              <div className="content">
                <div className="topContent">
                  <span className={theme === "light" ? "projectTitle" : "projectTitle dark"}>
                    TEER.LY IOS UX/UI
                  </span>
                  <span className={theme === "light" ? "desc" : "desc dark"}>
                    Teer.ly is an iOS mobile experience concept I designed to address the problems student groups face when discovering and attending volunteer events.
                  </span>
                </div>
                <div className="bottomContent">
                  <div className="buttonGroup">
                    
                    <a target="_blank" rel="noreferrer" href="https://seane4.medium.com/teer-ly-mobile-ux-ui-case-study-be22289f272d">
                      <button className={`mainButton-${theme}`}>Case Study  {<CallMadeIcon className="icon"/>}</button>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/1iSL3GpNr2rQT6Zrmj849fylpqkHo_dcZRf-N5Uolj38/edit#slide=id.g143ca19500d_0_44">
                      <button className={`secondaryButton-${theme}`}>Slide Deck {<CallMadeIcon className="icon"/>}</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="imageContainer">
                <img src={TeerlyIMG_PNG} />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor-placement="center-bottom">
          <div className={theme === "light" ? "project" : "project dark"}>
            <div className="projectWrapper">

              <div className="content">
                <div className="topContent">
                  <span className={theme === "light" ? "projectTitle" : "projectTitle dark"}>
                    CENTE IOS UX/UI
                  </span>
                  <span className={theme === "light" ? "desc" : "desc dark"}>
                    Cente is an iOS mobile experience concept I designed that addresses the lack of money management tools for young couples. 
                  </span>
                </div>
                <div className="bottomContent">
                  <div className="buttonGroup">
                    <a target="_blank" rel="noreferrer" href="https://seane4.medium.com/cente-mobile-ux-ui-design-536c23c631d9">
                      <button className={`mainButton-${theme}`}>Case Study {<CallMadeIcon className="icon"/>}</button>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/11ZHDSRNKzgpFS-lpN5cike2K5oRi23kpCtPRKoNRftY/edit#slide=id.p">
                      <button className={`secondaryButton-${theme}`}>Slide Deck {<CallMadeIcon className="icon"/>}</button>
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="imageContainer">
                <img src={CenteIMG_PNG} />
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

export default Projects