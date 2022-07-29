import React from 'react'
import logo from '../Assets/logo-bookmark.svg'
import '../Components/Navbar.css'
const Navbar = () => {
    const Features = 'FEATURES';
    const Pricing = 'PRICING';
    const Contact = 'CONTACT';
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={logo} id='logo' alt="Blogo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" href={Features}>Features</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href={Pricing}>Pricing</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href={Contact}>Contact</a>
                        </li>
                        <button className='btn'>LOGIN</button>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar