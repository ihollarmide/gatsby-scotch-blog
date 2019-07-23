
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/Layout';
import '../styles/styles.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            author
                        }
                        fields {
                            slug
                        }
                        excerpt
                        timeToRead
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <div>
                <Head title="Blog" />
                <section className="section">
                    <div className="container">
                    <h2 className="title is-size-3 has-text-link">Blog</h2>
                        <div className="columns is-3">
                                {data.allMarkdownRemark.edges.map((edge) => {
                                return (
                                    <div class="column is-one-third">
                                        <article className="box box-content">
                                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                                <div className="has-background-white-bis box content box-content  tile-content">
                                                    <h2 className="subtitle has-text-link">{edge.node.frontmatter.title}</h2>
                                                    <div>
                                                        <p>{edge.node.frontmatter.date}</p>
                                                        <span>{edge.node.timeToRead}min read</span>
                                                    </div>
                                                    <p>{edge.node.frontmatter.author}</p>
                                                    <p className="has-text-link has-text-weight-semibold is-italic is-font-dosis">{edge.node.excerpt}</p>
                                                </div>
                                            </Link>
                                        </article>
                                    </div>
                                ) })}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default BlogPage;