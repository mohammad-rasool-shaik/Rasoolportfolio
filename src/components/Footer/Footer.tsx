import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

export function Footer() {
  return (
    <Container className="footer">
      <h2>Made with ❤️ by Shaik Rusum Mohammad Rasool</h2>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

      <p style={{ marginBottom: '1rem' }}>
        <a href="mailto:rasool84658@gmail.com">rasool84658@gmail.com</a>
        {' · '}
        <a href="tel:+918465848116">+91 8465848116</a>
      </p>

      <div className="social-media">
        <a
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
    </Container>
  )
}
