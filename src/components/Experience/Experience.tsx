import React from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};

function Experience() {
    const timeline = [
        {
            icon: workIcon,
            date: 'July 2025 – Present',
            title: 'SR. SOFTWARE ENGINEER',
            subtitle: 'Max Trans Systems, Hyderabad',
            tech: 'NestJS, TypeScript, Redis, BullMQ, Azure, MSSQL, MySQL, Puppeteer, Playwright, PDF Processing, Docker',
            highlights: [
                'Led migration of legacy Node.js services into scalable NestJS-based modular architecture.',
                'Designed event-driven workflows using Redis and BullMQ for report generation, invoice processing, and email automation.',
                'Implemented distributed caching and rate-limiting strategies, reducing database load by 30%.',
                'Built secure PDF generation, encryption, watermarking, merging, and document transformation services.',
                'Developed bulk document processing pipelines and asynchronous job queues for CPU-intensive tasks.',
                'Built workflow builders and dynamic page-builder functionality using Puck Editor and Rich Text Editor.',
            ],
        },
        {
            icon: workIcon,
            date: 'April 2025 - June 2025',
            title: 'FREELANCE FULL-STACK ENGINEER',
            subtitle: 'Nexg Works, Hyderabad',
            tech: 'NestJS, FastAPI, OpenAI, Qdrant, PostgreSQL, Docker, AWS',
            highlights: [
                'Designed enterprise-grade authentication systems with JWT, 2FA, CSP policies, and security monitoring.',
                'Built AI-powered document intelligence platform using RAG architecture, FastAPI, OpenAI, and vector databases.',
                'Automated deployment pipelines and infrastructure provisioning.',
                'Developed cloud-native APIs and integrations for third-party services.',
            ],
        },
        {
            icon: workIcon,
            date: 'August 2023 - March 2025',
            title: 'SOFTWARE DEVELOPER',
            subtitle: 'Aadvi Tech Solution, Hyderabad',
            tech: 'React.js, Node.js, MongoDB, Express.js, MSSQL, AWS',
            highlights: [
                'Delivered multiple production applications using React, Node.js, NestJS, MongoDB, and SQL databases.',
                'Built real-time features using WebSockets and event-driven architecture.',
                'Improved application performance through state management, lazy loading, and caching techniques.',
                'Optimized SEO and page performance using Server-Side Rendering and Static Site Generation.',
                'Developed secure REST APIs and authentication systems.',
            ],
        },
    ];

    return (
        <>
        <section id="experience">
            <h1 className='SkillsHeading' style={{marginTop:'100px', marginBottom:'50px'}}> Professional <b> Experience </b> </h1>
            <div  style={{paddingLeft:'0%', width:'100%',minHeight:'30vh', display:'flex',justifyContent:'center',alignItems:'center'}} >
                <VerticalTimeline layout="1-column">
                    {timeline.map((t, i) => {
                        const contentStyle = { background: '#e31f71', color: '#fff' };
                        const arrowStyle = { borderRight: '7px solid #e31f71' };

                        return (
              
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                date={t.date}
                                {...t.icon}
                            >
                                {t.title ? (
                                    <React.Fragment>
                                        <h3 className="vertical-timeline-element-title">{t.title}</h3>
                                        {t.subtitle && (
                                            <h4 className="vertical-timeline-element-subtitle">
                                                {t.subtitle}
                                            </h4>
                                        )}
                                        {t.tech && (
                                            <p style={{ fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
                                                {t.tech}
                                            </p>
                                        )}
                                        {t.highlights && (
                                            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                                                {t.highlights.map((item, j) => (
                                                    <li key={j} style={{ marginBottom: '0.4rem' }}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </React.Fragment>
                                ) : undefined}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
            </section>
        </>
    );
}

export default Experience;
