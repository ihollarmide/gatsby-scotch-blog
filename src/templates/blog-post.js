import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/Layout';

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            frontmatter {
                title
                date
                author
            }
            html
            timeToRead
        }
    }`
const BlogTemplate = (props) => {
    return(
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <section className="section">
                <div className="container">
                    <div className="htmlIntro">
                        <h1 className="has-text-link is-size-2 has-text-weight-bold title">{props.data.markdownRemark.frontmatter.title}</h1>
                        <span className="has-text-grey is-size-5">{props.data.markdownRemark.timeToRead}min read</span>
                    </div>
                    <div className="htmlDetails">
                        <p className="is-size-5 is-italic">{props.data.markdownRemark.frontmatter.author}</p>
                        <p className="is-size-6">{props.data.markdownRemark.frontmatter.date}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}} className="htmlBlog is-size-5 has-text-weight-normal is-font-dosis"></div>
                </div>
            </section>
        </Layout>
    )
}
export default BlogTemplate;