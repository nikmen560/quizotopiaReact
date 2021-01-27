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
        exact: true,
    },
    {
        value: 'auth',
        href: '/auth',
        exact: true,
    },

]

class NavigationBar extends React.Component {



    renderNavLinks() {
        return navLinks.map((link, index) => {
            return (
                // <NavItem key={index}
                //     value={link.value}
                //     href={link.href}
                //     exact={link.exact}
                // />
                <li className={classes.NavItem}>
                    <NavLink
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
            // <Router>
                <nav className={classes.NavigationBar}>
                    <ul>
                        {this.renderNavLinks()}
                    </ul>
                </nav>

            // </Router>
        )
    }

}

export default NavigationBar;



