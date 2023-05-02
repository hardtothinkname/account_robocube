import { faBars, faBuilding, faHome, faQuestionCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
// import { connect } from 'react-redux'
import { Link } from "react-router-dom";

export const NavBar = ({ handleSideBar }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ padding: "2px 1rem" }}>
            <a className="navbar-brand mr-4" href="javascript:void(0)" onClick={(event) => handleSideBar(event)} ><FontAwesomeIcon icon={faBars} /></a>

            {/* <img src="https://cdn.synorex.link/assets/images/robocube/tuition.png" style="height: 38px;" className="mr-1"> */}

            <Link className="navbar-brand font-weight-boldA" to="/">Robocube</Link>
            <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">Hi, hanyikoh</a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item text-danger" href="https://account.robocube.cloud/page/logout"><i class="fa fa-fw mr-2 fa-sign-out-alt" aria-hidden="true"></i> Logout</a>
                        </div>
                    </li>

                </ul>
            </div>
        </nav >
    )
}

export default NavBar;