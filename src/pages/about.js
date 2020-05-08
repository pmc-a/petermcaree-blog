import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        isIndexPage
        title="PeteScript &mdash; A blog by Peter McAree"
        keywords={[
          'petescript',
          'blog',
          'javascript',
          'react',
          'node.js',
          'web development',
          'software engineering',
        ]}
      />
      <h1>About</h1>

      <p>
        PeteScript is a technical blog about everything related to web
        development and JavaScript.
      </p>

      <h3>Who?</h3>
      <p>
        I am a Belfast-based software engineer with a passion for JavaScript.
        Currently working with React, Redux and Node.js - building something
        great.
      </p>

      <h3>How?</h3>
      <p>
        You may think this looks and feels like every other technical blog,
        because it is. Or it&#39;s built with the same technologies, at least.
        Scaffolded by the Gatsby Starter Blog, I&#39;ve plugged in Netlify CMS
        to write and deploy the content.
      </p>

      <p>
        All of the content and code is open source, and you can find it{' '}
        <a href="https://github.com/pmc-a/petermcaree-blog">here</a>
      </p>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
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
`;
