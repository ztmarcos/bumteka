import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="split-container">
      {/* Left Side - Personal Info */}
      <div className="left-side">
        <header>
          <pre className="ascii-art">
{` ______ _______ _______ _______ _______ __  __ _______ 
|   __ \\   |   |   |   |_     _|    ___|  |/  |   _   |
|   __ <   |   |       | |   | |    ___|     <|       |
|______/_______|__|_|__| |___| |_______|__|\__ |___|___|`}
          </pre>
          <h2>WE BUILD APPS</h2>
          <p className="tagline">{">"} exploring the digital frontier_</p>
        </header>

        <section className="stats">
          <div className="stat-box">
            <span className="label">$ current_status</span>
            <span className="value">building cool stuff</span>
          </div>
        </section>

        <footer>
          <p className="terminal-prompt">$ contact --info</p>
          <div className="links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github</a>
            <span className="separator">|</span>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">twitter</a>
            <span className="separator">|</span>
            <a href="mailto:your@email.com">email</a>
          </div>
        </footer>
      </div>

      {/* Right Side - Projects */}
      <div className="right-side">
        <section className="projects">
          <h3>{">"} featured_projects</h3>
          <div className="project-grid">
            <div className="project-card">
              <h4>Talking Apps</h4>
              <p className="description">$ cat description.txt</p>
              <p>Take notes and talk to them with AI</p>
              <a 
                href="https://notesai-app-v2-75d0f2db06df.herokuapp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                {">"} view_project
              </a>
            </div>
            <div className="project-card">
              <h4>Project_02</h4>
              <p className="description">$ cat description.txt</p>
              <p>Another awesome project in the works</p>
            </div>
            <div className="project-card">
              <h4>Project_03</h4>
              <p className="description">$ cat description.txt</p>
              <p>Yet another amazing project</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
