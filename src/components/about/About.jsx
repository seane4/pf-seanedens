import "./about.scss"
import SeanPic from "./SeanPic.png"
import SeanPic2 from "./SeanPic2.png"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import ErrorIcon from '@mui/icons-material/Error';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Groups3Icon from '@mui/icons-material/Groups3';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import { ThemeProvider, useTheme } from "../../ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === "light" ? "about" : "about dark"}>
      <section id="About">

      <div className="wrapper">
        <div 
        // data-aos="fade-right"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="800"
        // data-aos-once="true"
        // data-aos-anchor-placement="bottom-center"
        className="title">//ABOUT</div>
        
        <div 
        // data-aos="fade-right"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="800"
        // data-aos-once="true"
        // data-aos-anchor-placement="top-center"
        className="desc">
          Design and development are ways of thinking that I combine to read between the lines. In any situation, I enjoy being pragmatic, kind, empathetic, and open to all possibilities. I’m always jotting down notes, taking walks to reflect on things, and catching up with friends over their newest hobbies or ideas.
        </div>

        <div className="container">
          <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true" data-aos-anchor-placement="center-center">
            <div className="imgContainer">
              <img src={SeanPic2} />
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="900" data-aos-once="true" data-aos-anchor-placement="center-center">
            <div className={theme === "light" ? "trait" : "trait dark"}>
              <div className="traitWrapper">
                <div className="traitContainer">
                  <div className="traitTitle">{<BookmarksOutlinedIcon className="icon"/>}CURIOUS</div>
                  <div className="traitDesc">Being curious is a large part of who I am. Every day I ask questions, seek out new information, and reflect on what I already believe to be true.</div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1200" data-aos-once="true" data-aos-anchor-placement="center-center">
            <div className={theme === "light" ? "trait" : "trait dark"}>
              <div className="traitWrapper">
                <div className="traitContainer">
                  <div className="traitTitle">{<SettingsSuggestOutlinedIcon className="icon"/>}RESOURCEFUL</div>
                  <div className="traitDesc">In challenging environments with limited resources, I do my best to find creative solutions and work efficiently. Most times we overlook the idea of doing more with less.</div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1500" data-aos-once="true" data-aos-anchor-placement="center-center">
            <div className={theme === "light" ? "trait" : "trait dark"}>
              <div className="traitWrapper">
                <div className="traitContainer">
                  <div className="traitTitle">{<QueryStatsOutlinedIcon className="icon"/>}INTROSPECTIVE</div>
                  <div className="traitDesc">It's important to me that I reflect and seek feedback to better understand my strengths and weaknesses, then use that to continually improve and develop.</div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1800" data-aos-once="true" data-aos-anchor-placement="center-center">
            <div className={theme === "light" ? "trait" : "trait dark"}>
              <div className="traitWrapper">
                <div className="traitContainer">
                  <div className="traitTitle">{<AirlineStopsIcon className="icon"/>}RESILIENT</div>
                  <div className="traitDesc">Remaining focused and committed during unfortunate times is an important part of the process for me. Things always fall in place when the time is right.</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* <div className="title">OUTLINING MY CREATIVE PROCESS</div>
      
        <div className="mainProcessCardContainer">

          

          <div className="card">
            <div className="cardWrapper">
              <div className="topCard">
                <ErrorIcon className="icon"/>
                <div className="heading">HUMAN-CENTERED FRUSTRATION</div>
              </div>
              <div className="botCard">
                <div className="cardDesc">
                  Speaking with users to understand their frustration keeps me centered as a designer. This could be reading into larger macro-trends, or learning more about a specific workflow.
                </div>
              </div>
            </div>
          </div>
          
          <div className="card right">
            <div className="cardWrapper">
              <div className="topCard">
                <LightbulbIcon className="icon"/>
                <div className="heading">DEFINE & PRIORITIZE</div>
              </div>
              <div className="botCard">
                <div className="cardDesc">
                  Simple, understandable insights are the by-product of clear thinking and true empathy. I believe that when I can digest a problem end-to-end, collaboration becomes much easier. This allows me to connect big-picture product ideas with the fine details of specific experience obstacles.
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardWrapper">
              <div className="topCard">
                <FeedbackIcon className="icon"/>
                <div className="heading">GETTING EARLY FEEDBACK</div>
              </div>
              <div className="botCard">
                <div className="cardDesc">
                  Early feedback is crucial for validating assumptions, testing hypotheses, and identifying issues before investing significant resources. This stage involves gathering user feedback through things like user testing and other forms of research to inform future product iterations.
                </div>
              </div>
            </div>
          </div>
          <div className="card right">
            <div className="cardWrapper">
              <div className="topCard">
                <Groups3Icon className="icon"/>
                <div className="heading">CONTINUOUS COLLABORATION</div>
              </div>
              <div className="botCard">
                <div className="cardDesc">
                  It's crucial to recognize that ongoing communication and alignment are key to the success of any project. By remaining open to feedback and regularly sharing progress with the team, we can ensure that our ideas are aligned with user needs and overall business goals.
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      </section>
    </div>
  )
}

export default About