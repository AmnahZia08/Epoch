import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LOGO from '../assets/img/logoIcon.png';

const menuList = [
  {
    id: '1',
    path: '/',
    name: 'Home',
    dropDownList: false,
  },
  {
    id: '3',
    path: '#dropdown',
    name: 'Our Services',
    dropDownList: [
      {
        id: '1',
        path: '/custom-model-development',
        name: 'Custom Model Development',
      },
      {
        id: '2',
        path: '/ai-powered-software',
        name: 'Highly Specialized AI-Powered Software',
      },
      {
        id: '3',
        path: '/erp-development',
        name: 'ERP Development',
      },
      {
        id: '4',
        path: '/support-and-optimization',
        name: 'Ongoing Support & Optimization',
      },
    ],
  },
  {
    id: '4',
    path: '/about',
    name: 'About Us',
    dropDownList: false,
  },
  {
    id: '5',
    path: '/contact',
    name: 'Contact Us',
    dropDownList: false,
  },
  {
    id: '6',
    path: '/contact',
    name: 'Get Started',
    dropDownList: false,
  },
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [mobileNavActive, setMobileNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);
    return () => window.removeEventListener('scroll', stickyHeader);
  }, []);

  // ------- body scroll hidden when mobile menu active
  useEffect(() => {
    if (mobileNavActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileNavActive]);

  // ------- scroll sticky header
  const stickyHeader = () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.scrollY;

    scrollTop >= 100
      ? navbar.classList.add('sticky')
      : navbar.classList.remove('sticky');
  };

  // -------- dropdown show and hidden
  const handleDropdown = (dropDownList, id) => {
    if (dropDownList) {
      setDropdownOpen((prevId) => (prevId === id ? '' : id));
    } else {
      setDropdownOpen('');
      setMobileNavActive(false);
    }
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg mb-nav' id='navbar'>
        <div className='container-fluid'>
          <div
            onClick={() => setMobileNavActive((prev) => !prev)}
            className='navbar-toggler text-decoration-none'
          >
            <span className='burger-menu'>
              <span className='top-bar'></span>
              <span className='middle-bar'></span>
              <span className='bottom-bar'></span>
            </span>
          </div>
          <div className='collapse navbar-collapse navbar-container'>
            <img src={LOGO} alt='Logo' />
            <ul className='navbar-nav'>
              {menuList.map(({ id, dropDownList, name, path }) => (
                <li key={id} className='nav-item'>
                  <Link
                    to={path}
                    className={`d-flex align-items-center justify-content-center ${dropDownList ? 'gap-2 dropdown-toggle' : ''} nav-link`}
                    onMouseEnter={() => setDropdownOpen(id)}
                  >
                    {name}
                  </Link>
                  {dropdownOpen && dropDownList && (
                    <ul className='dropdown-menu'>
                      {dropDownList.map(({ id, path, name }) => (
                        <li key={id}>
                          <NavLink
                            to={path}
                            className={({ isActive }) =>
                              `nav-link ${isActive ? 'active' : ''}`
                            }
                            onClick={() => setDropdownOpen('')}
                          >
                            {name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* --------- Mobile navbar start */}
      <div className={`responsive-navbar ${mobileNavActive ? 'show' : ''}`}>
        <div className='offcanvas-header'>
          <Link to='/' className='logo d-inline-block'>
            <h2>EPOCH</h2>
          </Link>
          <button
            onClick={() => setMobileNavActive(false)}
            type='button'
            className='close-btn bg-transparent position-relative lh-1 p-0 border-0'
          >
            <i className='ri-close-line'></i>
          </button>
        </div>
        <div className='offcanvas-body'>
          <ul className='responsive-menu'>
            {menuList.slice(0, 4).map(({ id, dropDownList, name, path }) => {
              return (
                <li
                  key={id}
                  onClick={(e) => handleDropdown(dropDownList, id)}
                  className={`responsive-menu-list ${dropdownOpen === id ? 'activeDropdown' : ''} ${dropDownList ? '' : 'without-icon'}`}
                >
                  <NavLink to={path}>{name}</NavLink>
                  {dropDownList && (
                    <ul className='responsive-menu-items'>
                      {dropDownList.map(({ id, name, path }) => (
                        <li key={id} onClick={() => setMobileNavActive(false)}>
                          <NavLink to={path}>{name}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className='others-option d-md-flex align-items-center'>
            <div className='option-item'>
              <Link
                to='/contact'
                className='default-btn'
                onClick={() => setMobileNavActive(false)}
              >
                <i className='ri-arrow-right-line'></i>
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* --------- Mobile navbar end */}
    </>
  );
};

export default Header;
