
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import Head from '../components/head';
import '../styles/styles.scss';


const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <section className="section">
                <div className="container">
                    <div className="columns is-3">
                        <div className="column is-three-fifths content">
                            <div>
                                <h2 className="title is-size-2 has-text-weight-semibold intro-text">
                                <span className="has-text-link">Gatsby JS, </span>
                                A fast modern app and website generator that you will actually use
                                </h2>
                                <div>
                                    <p className="has-text-weight-light is-size-5 has-text-justified">
                                    Hello Everyone, Gatsby JS is an app and website generator built on React JS. This is just a demo blog built using Gatsby JS version 2.0.0. It makes use of the new Layout component, Use of Reach router, StaticQuery and other new features. I hope you enjoy the awesomeness of Gatsby!!!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column"></div>
                    </div>
                    <p className="has-text-weight-light is-italic is-size-3 has-text-link">Let's get started, Shall we?</p>
                    <div>
                        <span class="tag is-link is-size-5 cta">
                            <Link to="/blog" className="is-font-dosis has-text-white has-text-weight-light">
                                Explore the blog
                            </Link>
                        </span>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default IndexPage;
