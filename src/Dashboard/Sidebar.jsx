import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css"
const Sidebar = () => {
    return (
        <>
            <aside>
                <p>  </p>
                <NavLink to="/">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    My drive
                </NavLink>
                <NavLink to="/">
                    <i class="fa fa-laptop" aria-hidden="true"></i>
                    Movies / Tv Show
                </NavLink>
                <NavLink to="/use_table">
                    <i class="fa fa-clone" aria-hidden="true"></i>
                    User
                </NavLink>
                <NavLink to="/">
                    <i class="fa fa-clone" aria-hidden="true"></i>
                    Prime
                </NavLink>
            
            </aside>

            </>
    );
};

export default Sidebar; 