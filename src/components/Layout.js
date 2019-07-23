import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/styles.scss';


const Layout = (props) => {
    return (
        <div>
            <div className="main-body">
                <Header />
                    {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;