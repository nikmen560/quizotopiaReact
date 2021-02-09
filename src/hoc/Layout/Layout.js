import React from 'react';
import styles from './Layout.module.css';
import Header from "../../components/Header/Header";

class Layout extends React.Component {

    render() {
        return (
            <div className={styles.Layout} >
                <Header />
                <main >
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout;