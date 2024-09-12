import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

function AboutMe() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        Hello! I am a passionate web developer with experience in React, JavaScript, and other modern web technologies.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Project 1: </strong>
          <p>Description of your first project here.</p>
        </li>
        <li>
          <strong>Project 2: </strong>
          <p>Description of your second project here.</p>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </section>
  );
}

function ContactMe() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Email: your-email@example.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
    </section>
  );
}

export default App;
