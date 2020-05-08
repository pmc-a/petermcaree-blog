import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, description, social } = data.site.siteMetadata;
      return (
        <Container>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <p>
            {description}{' '}
            <a href={`https://twitter.com/${social.twitter}`}>
              Follow me on Twitter!
            </a>
          </p>
        </Container>
      );
    }}
  />
);

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/avatar-circular.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        social {
          twitter
        }
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 3.5rem;
  align-items: center;
`;

export default Bio;
