import "./contact.scss"
import { useTheme } from "../../ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === "light" ? "contact" : "contact dark"}>
      <section id="Contact">

      <div className="wrapper">
        //CONTACT
        <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true" data-aos-anchor-placement="center-center">
          <div className={theme === "light" ? "heading" : "heading dark"}>LET'S<br/>EXCHANGE<br/>IDEAS</div>
        </div>

        <div className="formContainer">
          <form>
            <div className="formContent">
              <div className="left">
                <div className="fieldBody">
                  <label for="name" className="formTitle">Name</label>
                  <input className={theme === "light" ? "inputClass" : "inputClass dark"} type="text" placeholder="Your Name" id="name"/>
                </div>
                
                <div className="fieldBody">
                  <label for="email" className="formTitle">Email</label>
                  <input className={theme === "light" ? "inputClass" : "inputClass dark"} type="text" placeholder="Your Email" id="email"/>
                </div>
                
                <div className="fieldBody">
                  <label for="company" className="formTitle">Company*</label>
                  <input className={theme === "light" ? "inputClass" : "inputClass dark"} type="text" placeholder="Your Company" id="company"/>
                </div>
              </div>
              <div className="right">
                <div className="messageBody">
                  <label for="name" className="formTitle">Message</label>
                  <textarea className={theme === "light" ? "textareaClass" : "textareaClass dark"} placeholder="Your Message" id="message" rows="10" cols="50"/>
                </div>
              </div>
            </div>
            <button className={`button-${theme}`}>Send Message</button>
          </form>
        </div>

        <div className={theme === "light" ? "footer" : "footer dark"}>Designed & developed by me - thanks for stopping by!</div>
      </div>
      </section>
    </div>
  )
}

export default Contact