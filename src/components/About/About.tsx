import { Container } from "./styles";
import Rasool from "../../assets/Rasool.png";
import {
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiAmazonaws,
  SiMicrosoftazure,
  SiDocker,
  SiOpenai,
} from "react-icons/si";

const mainTech = [
  { icon: SiNestjs, label: "NestJS", color: "#E0234E" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "var(--nextjs-icon-color)" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiAmazonaws, label: "AWS", color: "#FF9900" },
  { icon: SiMicrosoftazure, label: "Azure", color: "#0078D4" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiRedis, label: "Redis", color: "#DC382D" },
  { icon: SiOpenai, label: "OpenAI", color: "#412991" },
  { icon: SiPython, label: "Python", color: "#3776AB" },
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Vue 3", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["NestJS", "Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL", "WebSockets", "BullMQ", "Kafka"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "ClickHouse", "Qdrant"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Lambda", "S3", "SQS", "DynamoDB", "Azure Functions", "Blob Storage", "Docker", "Firebase"],
  },
  {
    title: "AI & Document Processing",
    skills: ["OpenAI API", "RAG Systems", "Vector Search", "PDF Generation", "Playwright", "Puppeteer", "OCR"],
  },
];

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi there! I'm Shaik Rusun Mohammad Rasool, a Senior Full-Stack Developer based in Hyderabad, India. I design and build scalable SaaS platforms, enterprise applications, and cloud-native solutions using NestJS, Node.js, React.js, Next.js, TypeScript, AWS, and Azure.
        </p>
        <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          I specialize in distributed systems, event-driven architectures, document processing pipelines, workflow automation, payment integrations, and AI-powered applications. I have delivered high-volume production systems handling file processing, PDF generation, invoice automation, reporting, secure authentication, and cloud infrastructure.
        </p>
        <p>
          I am open to new collaborations and opportunities where I can contribute and grow. Feel free to connect with me at{" "}
          <a href="mailto:rasool84658@gmail.com">rasool84658@gmail.com</a> or through the links in the footer.
        </p>

        <h3>Here are my main skills:</h3>

        <div className="main-tech-icons">
          {mainTech.map(({ icon: Icon, label, color }) => (
            <div className="tech-icon-item" key={label}>
              <Icon color={color} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="skill-categories">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h4>{category.title}</h4>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <img src={Rasool} alt="Rasool" />
      </div>
    </Container>
  );
}
