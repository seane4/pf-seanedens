import "./scrollbutton.scss"
import React, {useState} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from "../../ThemeContext";

const ScrollButton = () =>{
  
    const { theme, toggleTheme } = useTheme();
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 3000){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <div className="scrollbutton">
            <KeyboardArrowUpIcon className={`icon-${theme}`} onClick={scrollToTop}
            style={{display: visible ? 'inline' : 'none'}} />
        </div>
    );
  }
    
  export default ScrollButton;