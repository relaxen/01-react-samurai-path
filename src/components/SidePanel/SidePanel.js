import c from './SidePanel.module.scss';
import React from 'react';
import {NavLink} from "react-router-dom";


const SidePanel = () => {
    return (
        <nav className={c.sidePanel}>
            <div className={c.main}>
                <div className={c.text}><NavLink to="/profile" activeClassName={c.active}>Profile</NavLink></div>
                <div className={c.text}><NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink></div>
                <div className={c.text}><NavLink to="/music" activeClassName={c.active}>Music</NavLink></div>
                <div className={c.text}><NavLink to="/news" activeClassName={c.active}>News</NavLink></div>
            </div>
            <div>
                <div className={c.text}><NavLink to="/users" activeClassName={c.active}>Users</NavLink></div>
            </div>
            <div className={c.text}><NavLink to="/settings" activeClassName={c.active}>Settings</NavLink></div>
        </nav>
    );
}

export default SidePanel;