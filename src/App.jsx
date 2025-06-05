import './App.css'

/// corre nom run dev


function App() {
  return (
    <div className="split-container">
      <div className="menu-section">
        <p className="menu-text">MANUAL</p>
        <p className="menu-text">PROJECTS</p>
        <p className="menu-text">CONTACT</p>
      </div>
      <div className="html-text">
        
        
       
      </div>

      <header>
        <h1>BUMTEKA(7)</h1><p className="html-text"></p>
        <h2>Digital Solutions Manual</h2>

        <h2>NAME</h2>
        <p>bumteka — digital solutions portfolio</p>

        <h2>SYNOPSIS</h2>
        <table>
          <tbody>
            <tr>
              <td>web</td>
              <td><a href="https://bumteka.com">bumteka.com</a></td>
            </tr>
            <tr>
              <td>mail</td>
              <td><a href="mailto:contact@bumteka.com">contact@bumteka.com</a></td>
            </tr>
          </tbody>
        </table>

        <h2>DESCRIPTION</h2>
        <p>Building modern web applications and digital solutions. Focused on clean design and user experience.</p>
      </header>

      <main>
        <p>These are some things we've done:</p>
        
        <div className="project-grid">
          <div>
            <a href="https://notesai-app-v2-75d0f2db06df.herokuapp.com/" className="project-link">
              talking_apps
            </a>
            <p className="description">
              a note-taking application with AI capabilities
            </p>
          </div>

          <div>
            <a href="#" className="project-link">
              project_02
            </a>
            <p className="description">
              another solution in development
            </p>
          </div>

          <div>
            <a href="#" className="project-link">
              project_03
            </a>
            <p className="description">
              future development
            </p>
          </div>
        </div>

        <h2>SEE ALSO</h2>
        <ul>
          <li><a href="/about">about</a></li>
          <li><a href="/contact">contact</a></li>
          <li><a href="/blog">blog</a></li>
        </ul>
      </main>

      <footer>
        <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://cyber.dabamos.de/88x31/julesneohome.gif" alt="88x31 button" style={{ marginRight: '10px' }} />
            <img src="http://textfiles.com/underconstruction/88x31/GEOCIT/dwnnaylor_SkullRoses_skull.gif" alt="88x31 skull roses" />
          </div>
          <p>June 16, 2024 Bumteka</p>
          
        </div>
      </footer>
    </div>
  )
}

export default App
