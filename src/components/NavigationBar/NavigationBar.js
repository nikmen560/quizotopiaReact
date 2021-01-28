import React from "react";
import classes from './NavigationBar.module.css';
// import NavItem from "../NavItem/NavItem";
import {NavLink} from "react-router-dom";

const navLinks = [
    {
        value: 'quizzes',
        href: '/',
        exact: true,
    },
    {
        value: 'create quiz',
        href: '/quiz-create',
        exact: false,
    },
    {
        value: 'auth',
        href: '/auth',
        exact: false,
    },

]

class NavigationBar extends React.Component {



    renderNavLinks() {
        return navLinks.map((link, index) => {
            return (

                <li className={classes.NavItem} key={index}>
                    <NavLink

                        exact={link.exact}
                        to={link.href}
                        activeClassName={classes.active}
                    >
                        {link.value}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        return (
                <nav className={classes.NavigationBar}>
                    <ul>
                        {this.renderNavLinks()}
                    </ul>
                </nav>

        )
    }

}

export default NavigationBar;



