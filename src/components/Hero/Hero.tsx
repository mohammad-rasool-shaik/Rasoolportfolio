import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <h1>Shaik Rusum Mohammad Rasool</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <h3>Senior Full-Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <p className="small-resume">3+ Years of Experience · Hyderabad, India</p>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeInUp">
          <BrowserRouter>
            <a href="mailto:rasool84658@gmail.com" className="button">Contact</a>
          </BrowserRouter>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp">
      <div className="social-media"><a
        href="https://www.linkedin.com/in/mohammad-rasool66/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/ras00786"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
        </div>
        </ScrollAnimation>

      </div>
     

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight">
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
     
    </Container>

  )
}
