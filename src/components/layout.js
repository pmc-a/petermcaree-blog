import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography';

const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <Link
        style={{
          display: 'flex',
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={'/'}
      >
        <Image src="/assets/ps-logo.png" alt="PeteScript Logo" />
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            borderBottom: 'none',
          }}
        >
          {title}
        </h1>
      </Link>
    );
  } else {
    header = (
      <Link
        style={{
          display: 'flex',
          alignItems: 'center',
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={'/'}
      >
        <Image src="/assets/ps-logo.png" alt="PeteScript Logo" />
        <h3
          style={{
            marginTop: 0,
          }}
        >
          {title}
        </h3>
      </Link>
    );
  }
  return (
    <Wrapper>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(40),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header>{header}</Header>
        <main>{children}</main>
      </div>
      <Footer>
        <a href="https://creativecommons.org/licenses/by/4.0/">Copyright</a> ©{' '}
        {new Date().getFullYear()}, Peter McAree
      </Footer>
    </Wrapper>
  );
};

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 15px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const NavigationLink = styled(Link)`
  box-shadow: none;
  color: black;
  margin-left: 5px;
  margin-right: 5px;
`;

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`;

export default Layout;
