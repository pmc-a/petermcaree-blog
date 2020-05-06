import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        isIndexPage
        title="PeteScript &mdash; A blog by Peter McAree"
        keywords={['petescript', 'blog', 'javascript', 'react', 'node.js', 'web development', 'software engineering']}
      />
      <h1>About Me</h1>
      
      <p>Belfast-based software engineer with a passion for JavaScript.</p>

      <p>Currently working with React, Redux and Node.js - building something great.</p>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
