import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { isMobileOrTabletDevice } from '../utils/detectDevice';
import { rhythm, scale } from '../utils/typography';

const Layout = ({ location, title, children }) => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    setIsMobileOrTablet(isMobileOrTabletDevice());
  });

  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  console.log({ isMobileOrTablet });

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          borderBottom: 'none',
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h3>
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
        <Header>
          {header}
          <div>
            <NavigationLink to={'/'}>Home</NavigationLink>
            <NavigationLink to={'/about'}>About</NavigationLink>
          </div>
        </Header>
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
