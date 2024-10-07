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
            date: 'August 2023 - present',
            title: 'ASSOCIATE SOFTWARE ENGINEER',
            subtitle: 'AADVI TECH SOLUTIONS',
            desc: 'JavaScript, MERN stack developer, UI(User Interface) design, Postman API ,MySQL, Git/GitHub, Docker,',
        },

    ];

    return (
        <>
        <section id="experience">
            <h1 className='SkillsHeading' style={{marginTop:'100px', marginBottom:'50px'}}> Professional <b> Experience </b> </h1>
            <div  style={{paddingLeft:'0%', width:'100%',minHeight:'30vh', display:'flex',justifyContent:'center',alignItems:'center'}} >
                <VerticalTimeline layout="1-column">
                    {timeline.map((t, i) => {
                        const contentStyle =
            i === 0
                ? { background: '#e31f71', color: '#fff' }
                : undefined;
                        const arrowStyle =
            i === 0
                ? { borderRight: '7px solid  rgb(33, 150, 243)' }
                : undefined;

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
                                        {t.desc && <p>{t.desc}</p>}
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
