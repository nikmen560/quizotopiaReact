import React from 'react';
import styles from './Layout.module.css';
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

class Layout extends React.Component {

    render() {
        return (
            <div className={styles.Layout}>
                <header>
                   <NavigationBar />
                </header>

                <main>
                    {this.props.children}
                    <h1>layout</h1>
                </main>
            </div>
        )
    }
}
export default Layout;