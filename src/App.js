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
        Hello, I am a 3rd year computer science student learning web development. Thank you!
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
         <p><strong>CALCULATOR </strong>Let's you add and substract numbers using a calculator.</p>
        </li>
        <li>
         <p> <strong>ATM PROGRAM </strong>Let's you cash in, cash deposit and withdraw money</p>
        </li>
      </ul>
    </section>
  );
}

function ContactMe() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Email:cean_darius_katigbak@dlsl.edu.ph</p>
      <p>Facebook:<a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a></p>
      <p>Instagram <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a></p>
    </section>
  );
}

export default App;
