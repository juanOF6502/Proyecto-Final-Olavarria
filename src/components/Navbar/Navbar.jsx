import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import CardWidget from '../CardWidget/CardWidget';
import './Navbar.css';


const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const closeMenu = () => {
    setIsNavCollapsed(true);
  };

  return (
    <header>
      <Link to={'/'} className='link' onClick={()=> document.title = 'Game Zone || Home'}> 
        <h1>Game<span>Zone</span></h1>
      </Link>

      <nav className="navbar navbar-expand-lg">
        <button className={`navbar-toggler ${isNavCollapsed ? 'collapsed' : ''}`} type="button" onClick={handleNavCollapse}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink 
                  to={'/'} 
                  className={'link'} 
                  onClick={()=> {
                    document.title = 'Game Zone || Home'
                    closeMenu();
                  }}>
                    Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to={'/productos/juegos'} 
                  className={'link'} 
                  onClick={()=> {
                    document.title = 'Game Zone || Juegos'
                    closeMenu();
                  }}>
                    Juegos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to={'/productos/consolas'} 
                  className={'link'} 
                  onClick={()=> {
                    document.title = 'Game Zone || Consolas'
                    closeMenu();
                  }}>
                    Consolas
                </NavLink>
              </li>
            </ul>
            <CardWidget closeMenu={closeMenu}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar