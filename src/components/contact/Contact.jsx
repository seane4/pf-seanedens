import "./contact.scss"
import { useTheme } from "../../ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";

function Contact() {

  const { theme, toggleTheme } = useTheme();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  const [state, handleSubmit] = useForm("xpzedrqe");
  if (state.succeeded) {
      setName("")
      setEmail("")
      setCompany("")
      setMessage("")
  }

  return (
    <div className={theme === "light" ? "contact" : "contact dark"}>
      <section id="Contact">

      <div className="wrapper">
        //CONTACT
        <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true" data-aos-anchor-placement="center-bottom">
          <div className={theme === "light" ? "heading" : "heading dark"}>Let's Exchange Ideas</div>
        </div>

        <div className="formContainer">
          <form action="https://formspree.io/f/xpzedrqe" method="POST">
            <div className="formContent">
              <div className="left">

                <div className="fieldBody">
                  <label htmlFor="name" className="formTitle">Name</label>
                  <input 
                  required 
                  className={theme === "light" ? "inputClass" : "inputClass dark"} 
                  type="text"
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Full Name" 
                  id="name"
                  value={name} 
                  name="name"/>
                  <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  />
                </div>
                
                <div className="fieldBody">
                  <label htmlFor="email" className="formTitle">Email</label>
                  <input 
                  required 
                  className={theme === "light" ? "inputClass" : "inputClass dark"} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address" 
                  id="email"
                  value={email} 
                  name="email"/>
                  <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  />
                </div>
                
                <div className="fieldBody">
                  <label htmlFor="company" className="formTitle">Company*</label>
                  <input 
                  className={theme === "light" ? "inputClass" : "inputClass dark"} 
                  type="text"
                  onChange={(e) => setCompany(e.target.value)} 
                  placeholder="Company (Optional)" 
                  id="company"
                  value={company} 
                  name="company"/>
                </div>
              </div>
              <div className="right">
                <div className="messageBody">
                  <label htmlFor="Message" className="formTitle">Message</label>
                  <textarea 
                  required 
                  className={theme === "light" ? "textareaClass" : "textareaClass dark"} placeholder="Your Message" 
                  id="Message" 
                  onChange={(e) => setMessage(e.target.value)}
                  value={message} 
                  rows="10" 
                  cols="50" 
                  name="message"/>
                  <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  />
                </div>
              </div>
            </div>
            <button  type="submit" onClick={(e) => handleSubmit} className={`button-${theme}`}>Submit</button>
          </form>
        </div>

        <div className={theme === "light" ? "footer" : "footer dark"}>Designed & developed by me - thanks for stopping by!</div>
      </div>
      </section>
    </div>
  )
}

export default Contact