// src/pages/Developer.js
import React from 'react';
import '../styles/Developer.css';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

/* ——— Projects ——— */
const projects = [
  {
    title: 'Text2Vision',
    description:
      'Two‑stage GAN + BERT that turns descriptive text into lifelike bird images.',
    tech: ['Python', 'TensorFlow', 'NLP'],
    github:
      'https://github.com/BhavanaPoosa/Text-To-Image-Generator/tree/main/StackGAN_BERT-TxtToImg'
  },
  {
    title: 'Portfolio Site',
    description:
      'This Spotify‑inspired portfolio you’re browsing right now 😎.',
    tech: ['React', 'Framer Motion', 'CSS'],
    github: 'https://github.com/bhavana/portfolio'
  },
  {
    title: 'Only Us',
    description:
      'Image encryption / decryption with the AES algorithm and Node.js.',
    tech: ['JavaScript', 'Crypto Libraries', 'Node.js'],
    github: 'https://github.com/BhavanaPoosa/Image-Encryption-AES'
  },
  {
    title: 'PickNCheck',
    description:
      'Deep‑learning inventory system with real‑time object detection.',
    tech: ['Python', 'PyTorch', 'SQLite'],
    github: 'https://github.com/BhavanaPoosa/deep-inventory-management-system'
  }
];

/* ——— Timeline items ——— */
const timelineItems = [
  { year: '7 months',  company: 'FSD Technology',    position: 'Software Developer' },
  { year: '5 months', company: 'ESS Technology',    position: 'SWE Trainee' },
  { year: '2020 - 2024',    company: 'Keshav Memorial Institute Of Technology',   position: "B.Tech CSE" }
];

export default function Developer() {
  return (
    <main className="developer-page">
      {/* ───── Intro with avatar ───── */}
      <section className="intro">
        <div className="intro-photo" tabIndex={0}>
          <img
            src="/Me.jpeg"
            alt="Bhavana Poosa"
            loading="lazy"
          />
          <span className="hover-info">
            Bhavana Poosa<br />
            Software Developer
          </span>
        </div>

        <div className="intro-text">
          <h1>
            <span role="img" aria-label="laptop">
              💻
            </span>{' '}
            Developer
          </h1>
          <p>
            I build reliable, modern web applications by blending technical
            expertise with creative problem‑solving. My projects focus on clean
            code, robust performance, and intuitive UX—from sleek front‑end
            designs to scalable back‑end solutions.
          </p>
        </div>
      </section>

      {/* ───── Tech stack ───── */}
      <section className="skills">
        <h2>
          <span role="img" aria-label="brain">
            🧠
          </span>{' '}
          Tech Stack
        </h2>
        <div className="skills-grid">
          {[
            'Java',
            'Spring Boot',
            'MySQL',
            'Data Structures',
            'React',
            'Git',
            'Svelte',
            'JavaScript',
            'HTML',
            'CSS',
            'Node.js',
            'Express',
            'Maven',
            'Gradle',
            'Cucumber',
            'AWS',
            'Jenkins',
            'Docker',
            'Python'
          ].map(t => (
            <span key={t} className="skill-tag">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ───── Experience / Achievements ───── */}
      <section className="experience">
        <h2>
        <span role="img" aria-label="rocket">🚀</span> Key Achievements
        </h2>
        <div className="experience-card">
        <h3> Contributions & Achievements</h3>
        <h4>Driving Impactful Product Development</h4>
          <ul>
            <li>
              Enhanced Test Coverage and Code Quality : Improved unit test coverage for core components, ensuring better code reliability and reducing the likelihood of production issues.
            </li>
            <li>
              Security Improvements : Addressed vulnerabilities in third-party libraries, strengthening the application's security and ensuring compliance with industry standards.
            </li>
            <li>
              Performance Optimization : Implemented lazy data loading and stack-fetching strategies, resulting in more efficient data handling and faster load times for users.
            </li>
            <li>
              Bug Fixing and User Experience Improvements : Resolved key user-reported defects, including issues with registration and alert search functionality, leading to a more stable and seamless user experience.
            </li>
            <li>
              Continuous Integration and Deployment (CI/CD) Enhancements : Updated Docker configurations and integrated SonarQube properties, improving the build process and ensuring higher quality code in production.
            </li>
          </ul>
        </div>
      </section>

      {/* ───── Projects ───── */}
      <section className="projects">
        <h2>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          Projects
        </h2>
        <div className="project-cards">
          {projects.map(p => (
            <div key={p.title} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tech-used">
                {p.tech.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Timeline ───── */}
      <section className="timeline">
        <h2>
          <span role="img" aria-label="time">
            ⏳
          </span>{' '}
          A Glimpse Into My Journey
        </h2>
        <VerticalTimeline>
          {timelineItems.map(it => (
            <VerticalTimelineElement
              key={it.year}
              date={it.year}
              contentStyle={{
                background: '#121212',
                color: '#fff',
                borderTop: '3px solid #1DB954'
              }}
              contentArrowStyle={{ borderRight: '7px solid #1DB954' }}
              iconStyle={{ background: '#1DB954', color: '#fff' }}
            >
              <h3>{it.company}</h3>
              <h4>{it.position}</h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>

      {/* ───── Certifications ───── */}
      <section className="certifications">
        <h2>
          <span role="img" aria-label="certificate">
            💡
          </span>{' '}
          Certifications
        </h2>
        <div className="certification-cards">
          {[
            {
              title: 'Oracle GenAI Certification',
              url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7D81CEBBB5D3C154ECF13B057BD150262497E1AD9BF8A8CA249BC9884E74C02A',
              desc:
                'Validates expertise in building and deploying generative‑AI solutions on Oracle Cloud.'
            },
            {
              title: 'DSA – Smart Interviews',
              url: 'https://smartinterviews.in/certificate/ba9f459c',
              desc:
                'Proficiency in data structures & algorithms; solved 180+ problems with optimal time/space.'
            },
            {
              title: 'Foundations of Cybersecurity (Coursera)',
              url: 'https://www.coursera.org/account/accomplishments/certificate/2RQU7MEZQJZC',
              desc:
                'Covered security protocols, encryption, risk assessment and network hardening.'
            },
            {
              title: 'AWS Solutions Architecture Simulation',
              url:
                'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_AjNPxuyuZA43u2oj6_1692797596352_completion_certificate.pdf',
              desc:
                'Hands‑on design of scalable AWS stacks; cost optimisation & fault‑tolerance.'
            },
            {
              title: 'Goldman Sachs SE Virtual Program',
              url:
                'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_AjNPxuyuZA43u2oj6_1690654790347_completion_certificate.pdf',
              desc:
                'Completed real‑life GS engineering tasks: data pipelines, REST APIs and SDLC rituals.'
            }
          ].map(cert => (
            <div className="certification-card" key={cert.title}>
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                View Credential
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Resume link ───── */}
      <section className="resume">
        <h2>
          <span role="img" aria-label="document">
            📄
          </span>{' '}
          Want to work with me?
        </h2>
        <p>
          <a href="/BhavanaPoosa-resume.pdf" target="_blank" rel="noopener noreferrer">
            Download My Resume
          </a>
        </p>
      </section>
    </main>
  );
}
