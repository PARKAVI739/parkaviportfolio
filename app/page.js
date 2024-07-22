"use client"

// app/page.js
export default function Home() {
  return (
    <div className="home">
      <div style={{ width: '50%' }}>
        <h1 style={{ color: 'white' }}><span className="shine">Parkavi Muthukrishnan</span></h1>
        <p>Dindigul, Tamil Nadu, 624701 | 9585748384 | parkavimuthukrishnan@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/parkavi-muthukrishnan-856025182/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> | 
          <a href="mailto:parkavimuthukrishnan@gmail.com"> parkavimuthukrishnan@gmail.com</a> | 
          <a href="https://github.com/PARKAVI739" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
        <p>
        Experienced Full Stack Web Developer with 2 years of expertise in developing and deploying web applications. Proficient in both frontend and backend technologies, specializing in React.js, Node.js, HTML5, CSS, and JavaScript. Skilled in AWS cloud services including Lambda, SES, SNS, S3, Amplify, and EC2. Strong background in database management with MongoDB, and adept in authentication methods such as JWT, Auth0, and Firebase. Experienced in version control using Git and GitHub, with proficiency in writing clear, reusable, and maintainable code following industry best practices. Basic familiarity with design tools like Figma and Adobe XD. Demonstrated ability to collaborate effectively with teams to deliver high-quality software solutions.
        </p>
      </div>
      <div className="logo">
        <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-nodejs-logo-27.png" alt="JavaScript" />
        <div style={{ display: 'flex', gap: '60px' }}>
          <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" alt="HTML5" />
          <img
            src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
            alt="CSS3"
          />
        </div>
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React.js" />
      </div>
    </div>
  );
}
