import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoBlue from '../LogoTransparent.png';
import '../styles/logo.css';

class HeaderNav extends Component {
	render() {
		return (
			<div>
				<div className="d-flex justify-content-between  align-items-center px-3">
				<img src={LogoBlue} alt="site logo" className = "Logo"></img>
					<nav className="navbar navbar-expand-lg" role="navigation">	
 							
		 					<Link className="nav-item nav-link" to="/">Home</Link>
							<Link className="nav-item nav-link" to="/OnlineWorkshop">Online workshop</Link>
							<Link className="nav-item nav-link" to="/BookASession">Book a session</Link>
							<Link className="nav-item nav-link" to="/Offering">Offering</Link>
              				<Link className="nav-item nav-link" to="/Blog">Blog</Link>
						    <Link className="nav-item nav-link" to="/FAQ">FAQ</Link>

					</nav>
					<form className="form-inline my-2 my-lg-0">
						<input className="form-control" type="search" placeholder="Search" aria-label="Search">
						</input>	
					</form>
			 	</div>
				 
				 <div className="d-flex justify-content-center">
				 <p>LET'S CODE WITH ALEX</p>
				 </div>
			</div>
				);
			}
		}

export default HeaderNav;