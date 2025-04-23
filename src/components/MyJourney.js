// src/components/MyJourney.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/MyJourney.css';

const timelineItems = [
  {
    type: 'experience',
    date: 'Feb 2024 - Present',
    title: 'Software Engineer - Experian (Caspex)',
    subtitle: '',
    description: '',
  },
  {
    type: 'experience',
    date: 'Apr 2022 - Jun 2024',
    title: 'Volunteer - National Service Scheme',
    subtitle: 'National Service Scheme',
    description: '',
  },
  {
    type: 'experience',
    date: 'Jan 2022 - Jun 2024',
    title: 'Core Member - Aakarshan',
    subtitle: 'Aakarshan',
    description:
      'Core Member of Aakarshan Art Club, KMIT: Runner-up in the Artistry Competition. Actively contributed to organizing various college activities.',
  },
  {
    type: 'education',
    date: '2020 - 2024',
    title: 'B.Tech, Computer Science And Engineering',
    subtitle: 'Keshav Memorial Institute of Technology',
    description: 'Grade: 9.2',
  },
  {
    type: 'education',
    date: 'Jul 2018 - May 2020',
    title: 'Intermediate, MPC',
    subtitle: 'FIITJEE',
    description: 'Grade: 9.7',
  },
];

export default function MyJourney() {
  return (
    <div className="my-journey-page">
      <header className="my-journey-header">
        <h1>
          <span role="img" aria-label="journey">⏳</span> My Journey
        </h1>
      </header>

      <VerticalTimeline>
        {timelineItems.map((item, index) => {
          const iconStyle = item.type === 'experience'
            ? { background: '#1DB954', color: '#fff' }
            : { background: '#121212', color: '#fff', border: '3px solid #1DB954' };

          return (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              contentStyle={{
                background: '#121212',
                color: '#fff',
                borderTop: '3px solid #1DB954',
              }}
              contentArrowStyle={{ borderRight: '7px solid #1DB954' }}
              iconStyle={iconStyle}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              {item.subtitle && (
                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              )}
              {item.description && <p>{item.description}</p>}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
