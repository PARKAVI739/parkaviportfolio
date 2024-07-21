import { useState } from 'react';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="nav">
        <div className="container">
          <h1 id="title">Portfolio</h1>
        </div>
        <div className={`nav-links ${activeSection === 'nav-links' ? 'active' : ''}`}>
          <p onClick={() => handleSectionChange('home')} className="shine">Home</p>
          <p onClick={() => handleSectionChange('about')} className="shine">About</p>
          <p onClick={() => handleSectionChange('projects')} className="shine">Skills</p>
          <p onClick={() => handleSectionChange('contact')} className="shine">Contact</p>
        </div>
        <div className="burger" onClick={() => handleSectionChange('nav-links')}>
          &#9776;
        </div>
      </div>

      <div className={`home ${activeSection === 'home' ? 'active' : ''}`}>
        <div style={{ width: '50%' }}>
          <h1 style={{ color: 'white' }}>👋 Hi, <span className="shine">Parkavi Muthukrishnan</span></h1>
          <p>Dindigul, Tamil Nadu, 624701 | 9585748384 | parkavimuthukrishnan@gmail.com</p>
          <p>
            <a href="https://www.linkedin.com/in/parkavi-muthukrishnan-856025182/">LinkedIn</a> | 
            <a href="https://github.com/PARKAVI739">GitHub</a>
          </p>
          <p>Experienced ReactJS Developer with 3 years of expertise in designing, developing, and deploying dynamic web applications. Proficient in JavaScript ES6+, React.js, and Next.js, with a demonstrated ability to build scalable and responsive user interfaces. Skilled in writing clear, reusable, and maintainable code following industry best practices. Strong advocate for modular development, ensuring code readability, security, and stability. Experienced in collaborating with teams to deliver high-quality software solutions.</p>
        </div>
        <div className="logo">
          <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-nodejs-logo-27.png" alt="JavaScript" />
          <div style={{ display: 'flex', gap: '60px' }}>
            <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" alt="HTML5" />
            <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" alt="CSS" />
          </div>
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" />
        </div>
      </div>

      {/* Additional Sections */}
      <div className={`about ${activeSection === 'about' ? 'active' : ''}`}>
        <h2>About Me</h2>
        <p>Experienced ReactJS Developer with 3 years of expertise in designing, developing, and deploying dynamic web applications.</p>
        <p>Location: Dindigul, Tamil Nadu, 624701</p>
        <p>Contact: 9585748384 | parkavimuthukrishnan@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/parkavi-muthukrishnan-856025182/">Parkavi Muthukrishnan</a></p>
        <p>GitHub: <a href="https://github.com/PARKAVI739">PARKAVI739</a></p>
      </div>

      <div className={`skills ${activeSection === 'projects' ? 'active' : ''}`}>
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Figma</li>
          <li>Adobe XD</li>
        </ul>
      </div>

      <div className={`contact ${activeSection === 'contact' ? 'active' : ''}`}>
        <h2>Contact Me</h2>
        <p>Dindigul, Tamil Nadu, 624701</p>
        <p>Phone: 9585748384</p>
        <p>Email: parkavimuthukrishnan@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/parkavi-muthukrishnan-856025182/">Parkavi Muthukrishnan</a></p>
        <p>GitHub: <a href="https://github.com/PARKAVI739">PARKAVI739</a></p>
      </div>

      <div className="line"></div>
    </>
  );
};

export default HomePage;
