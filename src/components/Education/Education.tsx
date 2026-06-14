import React from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGraduationCap,
    faSchool,
} from '@fortawesome/free-solid-svg-icons';

const schoolIcon = {
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

function Education() {
    const timeline = [
        {
            icon: starIcon,
            date: '2019 – 2023',
            title: 'Bachelor of Engineering (Computer Science)',
            subtitle: 'CGPA: 7.2 / 10',
            desc: 'Pace Institute of Technology and Sciences',
        },
        {
            icon: schoolIcon,
            date: '2017 – 2019',
            title: 'Intermediate',
            subtitle: 'CGPA: 8.0 / 10',
            desc: 'M.N.M Junior College',
        },
    ];

    return (
        
        <>
        <section id="education">
            <h1 className='SkillsHeading' style={{marginTop:'100px'}}> My <b> Education </b> </h1>

            <div className="App" style={{marginTop:'60px',minHeight:'70vh'}}>
                <VerticalTimeline>
                    {timeline.map((t, i) => {
                        const contentStyle =
            
                { background: 'rgb(33, 150, 243)', color: '#fff' }
                
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

export default Education;
