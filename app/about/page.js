//app/about
"use client"
import React from 'react';

export default function About() {
  return (
    <div className="about-container">
      <section>
        <h2 className="section-title">Experience</h2>

        <div className="job">
          <h3 className="job-title">Software Engineer</h3>
          <span className="job-dates">(Jan 2024 - Present)</span>
          <p className="job-company">Ibrow Technology Pvt Ltd, Chennai</p>
          <ul className="job-description">
            <li>Designed and implemented front-end solutions in alignment with design mockups and specifications for 5 distinct web applications.</li>
            <li>Developed and maintained responsive web applications to ensure optimal user experience across various devices.</li>
            <li>Utilized HTML5, CSS, and JavaScript to create visually appealing and interactive web interfaces, adhering to best practices and accessibility standards.</li>
            <li>Integrated Firebase or Auth0 for authentication into applications, enhancing security and user authentication processes.</li>
            <li>Implemented server-side logic using Node.js and NestJS to handle backend operations and ensure seamless data flow.</li>
            <li>Leveraged key AWS services, including AWS Lambda, S3, SES, and Route 53, as well as Amplify and EC2, for building robust backend solutions.</li>
            <li>Configured Amazon SNS (Simple Notification Service) to manage specific events such as bounce emails, click tracking, and opens, ensuring timely notification and response.</li>
            <li>Integrated AWS ECS (Elastic Container Service) with Fargate infrastructure, optimizing deployment and management of containerized applications.</li>
            <li>Automated build, testing, and deployment processes for ECS/Fargate-based applications using CI/CD pipelines with AWS CodeBuild and CodeDeploy.</li>
            <li>Collaborated cross-functionally to conceptualize and design robust user interfaces using React JS and Next JS, ensuring seamless user interaction and experience.</li>
            <li>Demonstrated proficiency in full-stack web development by leading the development of five comprehensive projects from scratch.</li>
            <li>Collaborated cross-functionally to design robust user interfaces, ensuring seamless user interaction and experience with React JS and Next JS.</li>
          </ul>
        </div>

        <div className="job">
          <h3 className="job-title">Associate Software Engineer</h3>
          <span className="job-dates">(Jun 2021 - Dec 2023)</span>
          <p className="job-company">Ibrow Technology Pvt Ltd, Chennai</p>
          <ul className="job-description">
            <li>Assisted in the development of web applications using React JS, Node Js, Express JS and participated in code reviews to maintain code quality standards.</li>
            <li>Contributed to the implementation of responsive web interfaces using HTML5, CSS, and JavaScript.</li>
            <li>Supported integration tasks with Auth0 for user authentication and real-time database updates.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
