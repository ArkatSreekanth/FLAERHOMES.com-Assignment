import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <Link to="/" className="navbar-link">
          Home
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/library" className="navbar-link">
          Library
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
