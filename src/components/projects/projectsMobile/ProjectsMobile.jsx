import "./projectsMobile.scss"
import { ThemeProvider, useTheme } from "../../../ThemeContext";

import LCI_Compact from "./LCI_Compact.png"
import Teerly_Compact from "./Teerly_Compact.png"
import Cente_Compact from "./Cente_Compact.png"
import CallMadeIcon from '@mui/icons-material/CallMade'

import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectsMobile() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="projectsMobile">
        <section id="Work">

        <div className="wrapper">
            
            <div className={theme === "light" ? "title" : "title dark"}>
                //PROJECTS
            </div>
            <div className="mobileProjectGroup">
                <div data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-anchor-placement="top-center">
                    <div className="projectItem">
                        <img src={LCI_Compact}/>
                        <div className="projectContentContainer">
                            {/* <div className="projectTitle">
                                LOLCHAMPINDEX
                            </div> */}
                            {/* <div className="projectDesc">
                                LoLChampIndex is a simple tool that allows League of Legends players to view basic information about in-game characters. Designed and developed for responsive viewing.
                            </div> */}
                            <div className="buttonContainer">
                                <a target="_blank" rel="noreferrer" href="https://seane4.github.io/lolchampindex/">
                                <button className={`primary-${theme}`}>Live Demo {<CallMadeIcon className="icon"/>}</button>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://seane4.medium.com/lolchampindex-case-study-interface-design-react-development-c346566dc900">
                                <button className={`secondary-${theme}`}>Case Study {<CallMadeIcon className="icon"/>}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-anchor-placement="top-center">
                    <div className="projectItem">
                        <img src={Teerly_Compact}/>    
                        <div className="projectContentContainer">
                            {/* <div className="projectTitle">
                                TEER.LY IOS UX/UI 
                            </div> */}
                            {/* <div className="projectDesc">
                                Teer.ly is a UX/UI project I created to address the problems student groups face when discovering and attending volunteer events.
                            </div> */}
                            <div className="buttonContainer">
                                <a target="_blank" rel="noreferrer" href="https://seane4.medium.com/teer-ly-mobile-ux-ui-case-study-be22289f272d">
                                <button className={`primary-${theme}`}>Case Study {<CallMadeIcon className="icon"/>}</button>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/1iSL3GpNr2rQT6Zrmj849fylpqkHo_dcZRf-N5Uolj38/edit#slide=id.g143ca19500d_0_44">
                                <button className={`secondary-${theme}`}>Slide Deck {<CallMadeIcon className="icon"/>}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-anchor-placement="top-center">
                    <div className="projectItem">
                        <img src={Cente_Compact}/>
                        <div className="projectContentContainer">
                            {/* <div className="projectTitle">
                                CENTE IOS UX/UI
                            </div> */}
                            {/* <div className="projectDesc">
                                Cente is a mobile experience UX/UI project I created that addresses the lack of money management tools for young couples. 
                            </div> */}
                            <div className="buttonContainer">
                                <a target="_blank" rel="noreferrer" href="https://seane4.medium.com/cente-mobile-ux-ui-design-536c23c631d9">
                                <button className={`primary-${theme}`}>Case Study {<CallMadeIcon className="icon"/>}</button>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/11ZHDSRNKzgpFS-lpN5cike2K5oRi23kpCtPRKoNRftY/edit#slide=id.p">
                                <button className={`secondary-${theme}`}>Slide Deck {<CallMadeIcon className="icon"/>}</button>
                                </a>
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

export default ProjectsMobile