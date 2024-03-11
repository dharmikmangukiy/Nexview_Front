import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css"
const Sidebar = () => {
    return (
        <>
            <aside>
                <p>  </p>
                <NavLink to="/">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                    Dashboard
                </NavLink>
                <NavLink to="/user_req">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                   User Request
                </NavLink>
                <NavLink to="/total">
                    <i className="fa fa-laptop" aria-hidden="true"></i>
                    Movies / Tv Show
                </NavLink>
                <NavLink to="/use_table">
                    <i className="fa fa-clone" aria-hidden="true"></i>
                    User
                </NavLink>
                <NavLink to="/notificaion">
                    <i className="fa fa-clone" aria-hidden="true"></i>
                    Notification
                </NavLink>
            
            </aside>

            </>
    );
};

export default Sidebar; 