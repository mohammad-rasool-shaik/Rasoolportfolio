import { Container } from "./styles";
import Rasool from "../../assets/Rasool.png";
import htmlIcon from "../../assets/html-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi there! I'm Mohammad Rasool, a Full Stack Software Developer based in Hyderabad, India. I specialize in creating robust and user-friendly web applications using technologies such as JavaScript, React.js, Node.js, and REST APIs. My passion lies in delivering custom online experiences tailored to my clients' needs.
        </p>
        <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          I have gained hands-on experience working as a software developer and love tackling projects that push my boundaries. You can explore some of my work in the projects section.
        </p>
        <p>
          I am open to new collaborations and opportunities where I can contribute and grow. Feel free to connect with me; links are in the footer.
        </p>

        <h3>Here are my main skills:</h3>
        <div className="hard-skills">
          <div className="hability">
            <img src={vscodeIcon} alt="Visual Studio Code" />
          </div>
          <div className="hability">
            <img src={mysqlIcon} alt="MySQL" />
          </div>
          <div className="hability">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="hability">
            <img src={typescriptIcon} alt="TypeScript" />
          </div>
          <div className="hability">
            <img src={nodeIcon} alt="Node.js" />
          </div>
          <div className="hability">
            <img src={htmlIcon} alt="HTML" />
          </div>
          <div className="hability">
            <img src={cssIcon} alt="CSS" />
          </div>
          <div className="hability">
            <img src={bootstrapIcon} alt="Bootstrap" />
          </div>
          <div className="hability">
            <img src={jsIcon} alt="JavaScript" />
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src={Rasool} alt="Rasool" />
      </div>
    </Container>
  );
}
