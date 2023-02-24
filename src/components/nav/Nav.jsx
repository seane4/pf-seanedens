import { useState } from "react"
import "./nav.scss"
import * as Icon from "./SeanLogo.js"
import CallMadeIcon from '@mui/icons-material/CallMade'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { ThemeProvider, useTheme } from "../../ThemeContext";

function Nav({width, menuOpen, setMenuOpen}) {

  const { theme, toggleTheme } = useTheme();
  

  return (
    <div className={theme === "light" ? "nav" : "nav dark"}>
      <div className="wrapper">
        <div className={theme === "light" ? "logo" : "logo dark"}>
          <Icon.SeanLogo theme={theme} size={100}/>
        </div>
        <div className="fullItemsBar">
          { 
            width > 1000 ? (
              <div className="itemsLeft">
                <Link offset={-200} smooth spy to="Home" className={`item-${theme}`} activeClass={`item-${theme} active`}>Home</Link>
                <Link offset={-150} smooth spy to="Work" className={`item-${theme}`} activeClass={`item-${theme} active`}>Work</Link>
                <Link offset={-150} smooth spy to="About" className={`item-${theme}`} activeClass={`item-${theme} active`}>About</Link>
                <Link offset={-150} smooth spy to="Contact" className={`item-${theme}`} activeClass={`item-${theme} active`}>Contact</Link>
              </div>
            ) : null
          }
          <div className="itemsRight">
            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ie2O8tUHI6eXPCWzZxbyhoFOniiTE8pg/view">
              {
                width > 550 ? (
                <button className={theme === "light" ? "buttonMain-light" : "buttonMain-dark"}>My Resume
                  {<CallMadeIcon className="icon"/>}
                </button>
                ) : 
                  <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ie2O8tUHI6eXPCWzZxbyhoFOniiTE8pg/view">
                    <button className={theme === "light" ? "themeIcon-light" : "themeIcon-dark"}>
                      {<ContactPageIcon className="icon"/>}
                    </button>
                  </a>
              }
            </a>
            <button onClick={toggleTheme} className={theme === "light" ? "themeIcon-light" : "themeIcon-dark"}>{theme === "light" ? <DarkModeIcon/> : <LightModeIcon/>}</button>
            {
              width < 1000 ? (
                  <button className={theme === "light" ? "themeIcon-light" : "themeIcon-dark"}>
                    <MenuIcon onClick={() => setMenuOpen(!menuOpen)} className="icon"/>
                  </button>
              ) : null
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Nav