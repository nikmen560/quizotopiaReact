import React from "react";
import classes from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";
import Button from "../UI/Button/Button";
import Auth from "../Auth/Auth";

const navLinks = [
    {
        value: 'quizzes',
        href: '/quiz-list',
        exact: false,
    },
    {
        value: 'create quiz',
        href: '/quiz-create',
        exact: false,
    },

    {
        value: 'home-page',
        href: '/',
        exact: true,
    },

]

class NavigationBar extends React.Component {

    state = {
        showModal: false,
    }

    showAuth()  {
        this.setState({
            showModal: !this.state.showModal
        })
        debugger;
        return (
            <Auth show={this.state.showModal}/>
        )
    }

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
                            <Button
                            onClick={this.showAuth.bind(this)}
                            name={'auth'}
                            />

                        {/*<Auth show={this.state.showModal}/>*/}
                    </ul>
                </nav>

        )
    }

}

export default NavigationBar;



