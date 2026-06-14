import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";

const folderIcon = (
  <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <title>Folder</title>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const projects: {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}[] = [
  {
    title: "Enterprise Real Estate Platform",
    category: "Client Project",
    description:
      "Large-scale production platform serving real estate professionals with end-to-end document and workflow automation.",
    highlights: [
      "Document generation, PDF encryption, and bulk file processing",
      "Invoice generation with Stripe payment and webhook handling",
      "Dashboard analytics, reporting, and dynamic page builder",
      "Email notification services and workflow management",
    ],
    tech: ["NestJS", "React", "Azure", "Stripe", "Redis", "BullMQ", "MSSQL", "Playwright", "Puppeteer"],
    liveUrl: "https://www.ezroi.net/",
  },
  {
    title: "EZROI – Real Estate Investment Platform",
    category: "SaaS Platform",
    description:
      "Investment analysis platform helping teams evaluate real estate opportunities with reporting and document workflows.",
    highlights: [
      "Investment analysis workflows and export services",
      "Secure file uploads and document management",
      "Dashboard modules with analytics views",
      "Optimized backend APIs and database performance",
    ],
    tech: ["NestJS", "React", "Azure", "SQL Server", "Redis"],
    liveUrl: "https://red-hill-067ec861e.5.azurestaticapps.net/login",
  },
  {
    title: "AI Email Intelligence & Notification System",
    category: "Serverless / AI",
    description:
      "Automated email monitoring system that summarizes inbox activity and delivers smart notifications.",
    highlights: [
      "AWS Lambda worker for inbox monitoring",
      "OpenAI-powered email summarization",
      "WhatsApp Cloud API notification delivery",
      "Idempotent processing with DynamoDB and EventBridge scheduling",
    ],
    tech: ["TypeScript", "NestJS", "AWS Lambda", "DynamoDB", "S3", "OpenAI", "WhatsApp API"],
  },
];

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <ScrollAnimation animateIn="flipInX" key={project.title}>
            <div className="project">
              <header>
                {folderIcon}
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" title="Live demo">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" title="GitHub">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  )}
                </div>
              </header>

              <div className="body">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
