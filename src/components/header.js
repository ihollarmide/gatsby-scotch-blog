import React from 'react';
import { Link } from 'gatsby';

import '../styles/styles.scss'

const Header = () => {
    return(
        <header>
            <section className="section">
                <div className="container">
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <Link to="/" className="is-size-1 has-text-link">
                                    Tenscribe
                                </Link>
                            </div>
                        </div>
                        <div className="level-item">
                            <div className="is-size-4 has-text-grey padding-right-small">
                                <Link to="/" activeClassName="has-text-link">
                                    Home
                                </Link>
                            </div>
                            <div className="is-size-4 has-text-grey-light">
                                <Link to="/blog" activeClassName="has-text-link">
                                    Blog
                                </Link>
                            </div>
                            </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="buttons">
                                    <a href="https://www.gatsbyjs.org" className="button is-link">
                                        Gatsby
                                    </a>
                                    <a href="https://www.reactjs.org" className="button is-light has-text-link">
                                        React
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </header>
    )
}

export default Header;