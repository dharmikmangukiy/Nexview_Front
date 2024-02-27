import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css"
const Sidebar = () => {
    return (
        <>
            <aside>
                <p>  </p>
                <NavLink to="/total">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    Dashboard
                </NavLink>
                <NavLink to="/user_req">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                   User Request
                </NavLink>
                <NavLink to="/">
                    <i class="fa fa-laptop" aria-hidden="true"></i>
                    Movies / Tv Show
                </NavLink>
                <NavLink to="/use_table">
                    <i class="fa fa-clone" aria-hidden="true"></i>
                    User
                </NavLink>
            
            </aside>

            </>
    );
};

export default Sidebar; 