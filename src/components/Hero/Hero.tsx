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
          <h1>Mohammad Rasool</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <p className="small-resume">1+ Year of Experience</p>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeInUp">
          <BrowserRouter>
            <a href="https://www.linkedin.com/in/mohammad-rasool66/" className="button">Contact</a>
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