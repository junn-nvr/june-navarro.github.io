import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <a href="/">June Navarro</a>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
