import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import './sidebar.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import style from "../shared/style";

const sideBarStyle = {
    marginTop: {
        marginTop: "52px"
    }
}
const SideBar = props => {
    // const [open, setOpen] = useState({ licenses: false, billing: false, auto_payment: false, profile: false});
    const [active, setActive] =  useState({ licenses: false, billing: false, auto_payment: false, profile: false});

    function handleActiveNavItem(navItemName) {
        setActive(prevState => ({
            ...Object.keys(prevState).reduce((acc, key) => {
                acc[key] = key === navItemName;
                return acc;
            }, {})
        }));
    }

    return (
        <div id="wrapper" style={sideBarStyle.marginTop} className="toggled">
            <div id="sidebar-wrapper" data-title="Sidebar" data-intro="All the functions of the system are gathered in the left menu">
                <ul className="sidebar-nav" id="accordion">
                    <li className={active.home ? "active" : ""}>
                        <Link onClick={() => handleActiveNavItem("licenses")} to="/page/licenses"><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faList} /> Licenses</Link>
                    </li>
                    <li className={active.payment ? "active" : ""}>
                        <Link onClick={() => handleActiveNavItem("billing")} to="/page/billing"><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faList} /> Billing</Link>
                    </li>
                    <li >
                        <Link onClick={() => handleActiveNavItem("auto_payment")} to="/page/auto_payment"><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faList} /> Auto Payment</Link>

                    </li>
                    <li  >
                        <Link onClick={() => handleActiveNavItem("profile")} to="/page/profile"><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faUserCircle} /> Profile</Link>

                    </li>
                </ul>
            </div>
        </div>

    );
};

export default SideBar