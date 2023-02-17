import "./sidebar.scss"
import { SocialIcon } from 'react-social-icons';
import { useState } from "react";
import { ThemeProvider, useTheme } from "../../ThemeContext";

function Sidebar() {

  const { theme, toggleTheme } = useTheme();

  let [hovered, setHovered] = useState("#BFBFBF")

  let darkModeText = "#FFFFFF"
  let lightModeText = "#111111"
  let mainColor = ""
  let dimColor = ""
  let dimLightText = "#BFBFBF"
  let dimDarkText = "#3d3d3d"

  if (theme === "light") {
    mainColor = lightModeText;

    dimColor = dimLightText;
  } else {
    mainColor = darkModeText;
    dimColor = dimDarkText;
  }

  return (
    <div className={theme === "light" ? "sidebar" : "sidebar dark"}>
      <div className="wrapper">
        <div className="iconsContainer">
          <SocialIcon fgColor={hovered === "Pinterest" ? mainColor : dimColor} onMouseEnter={() => setHovered("Pinterest")} onMouseLeave={() => setHovered(null)} bgColor="transparent" className="icon" target="_blank" url="https://www.pinterest.com/edenssean1/" />
          <SocialIcon fgColor={hovered === "Medium" ? mainColor : dimColor} onMouseEnter={() => setHovered("Medium")} onMouseLeave={() => setHovered(null)} bgColor="transparent" className="icon" target="_blank" url="https://seane4.medium.com/" />
          <SocialIcon fgColor={hovered === "LinkedIn" ? mainColor : dimColor} onMouseEnter={() => setHovered("LinkedIn")} onMouseLeave={() => setHovered(null)} bgColor="transparent" className="icon" target="_blank" url="https://www.linkedin.com/in/seanedens/" />
          <SocialIcon fgColor={hovered === "GitHub" ? mainColor : dimColor} onMouseEnter={() => setHovered("GitHub")} onMouseLeave={() => setHovered(null)} bgColor="transparent" className="icon" target="_blank" url="https://github.com/seane4" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar