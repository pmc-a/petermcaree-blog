import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness :(</p>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
