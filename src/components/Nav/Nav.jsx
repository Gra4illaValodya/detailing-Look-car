import React from "react";
import style from './Nav.module.css'
import {Link, NavLink} from "react-router-dom";


const Nav = () => {
    return <nav className={style.nav}>

        <div className={style.item}>
            <NavLink to="/profile" activeClassName={style.activeLink}>
                Profile
            </NavLink>
        </div>

        <div className={style.item}>
            <NavLink to="/dialog" activeClassName={style.activeLink}>
            Dialog
            </NavLink>
        </div>

        <div className={style.item}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={style.item}><NavLink to="/setting">Setting</NavLink></div>
        <div className={style.item}><NavLink to="/music">Music</NavLink></div>
        <div className={style.item}><NavLink to="/footer">Footer</NavLink></div>
    </nav>
}

export default Nav

// <div className={style.item}><Link to="/profile">Profile</Link></div>
// <div className={style.item}><Link to="/dialog">Dialog</Link></div>
// <div className={style.item}><Link to="/news">News</Link></div>
// <div className={style.item}><Link to="/setting">Setting</Link></div>
// <div className={style.item}><Link to="/music">Music</Link></div>