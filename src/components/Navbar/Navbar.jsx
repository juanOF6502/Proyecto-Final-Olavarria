import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import CardWidget from '../CardWidget/CardWidget';
import './Navbar.css';


const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <header>
      <Link to={'/'} className='link' onClick={()=> document.title = 'Game Zone || Home'}> 
        <h1>Game<span>Zone</span></h1>
      </Link>

      <nav class="navbar navbar-expand-lg">
        <button class="navbar-toggler" type="button" onClick={handleNavCollapse}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink 
                  to={'/'} 
                  className={'link'} 
                  onClick={()=> document.title = 'Game Zone || Home'}>
                    Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to={'/productos/juegos'} 
                  className={'link'} 
                  onClick={()=> document.title = 'Game Zone || Juegos'}>
                    Juegos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to={'/productos/consolas'} 
                  className={'link'} 
                  onClick={()=> document.title = 'Game Zone || Consolas'}>
                    Consolas
                </NavLink>
              </li>
            </ul>
        </div>
        <CardWidget />
      </nav>
    </header>
  )
}

export default Navbar