// app/skills/page.js
"use client"
import React from 'react';

export default function Skills() {
  return (
    <div className="container">
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>NestJS</li>
              <li>MongoDB</li>
              <li>JWT</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>AWS</h3>
            <ul>
              <li>AWS Lambda</li>
              <li>Amazon SES</li>
              <li>Amazon SNS</li>
              <li>AWS CodeBuild</li>
              <li>AWS CodeDeploy</li>
              <li>Amazon ECS</li>
              <li>Amazon S3</li>
              <li>Amazon EC2</li>
              <li>AWS Amplify</li>
              <li>Amazon Route 53</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Authentication</h3>
            <ul>
              <li>Auth0</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Figma</li>
              <li>Adobe XD</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
