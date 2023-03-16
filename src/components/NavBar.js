import React from 'react'
import { Nav } from 'react-bootstrap'
import '../components/NavBar.css'
import 'bootstrap'
import logo from '../assets/EPIC/logo.png'

const NavBar = () => {
  return (
    <Nav id='navCont' style={{width: '1070', height: '130'}} className='container-fluid navbar navbar-expand-sm'>
        <div id='innerCont' className='container-fluid'>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <a className='navbar-brand' href='#'>
                    <img id='logo' className='img-responsive' src={logo} alt='logo'/>
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link active' href='#'>Home</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#'>Artist</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#'>Videos</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#'>Shop</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#'>Newsletter</a>
            </li>
        </ul>
        </div>
     
    </Nav>
  )
}

export default NavBar