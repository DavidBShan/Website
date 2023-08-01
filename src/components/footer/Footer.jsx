import React from 'react';
import './style.scss';

import { Container } from 'react-bootstrap';

import SocialMedia from '../social-media/SocialMedia';
import DsnGrid from '../DsnGrid';
import Brand from '../brand/Brand';
import NavLink from '../button/NavLink';
import MenuFooter from './MenuFooter';
import Copyright from './Copyright';
import { dsnCN } from '../../hooks/helper';

function Footer({ className, ...restProps }) {
  return (
    <footer className={dsnCN('footer background-section', className)} {...restProps}>
      <Container>
        <div className="footer-links pt-80 pb-40">
          <DsnGrid col={4} colTablet={2}>
            <div className="dsn-col-footer">
              <h4 className="footer-title">Navigation</h4>
              <MenuFooter />
            </div>
            <div style={{ marginTop: '65px', marginLeft: '195px'}}>
              <NavLink to="/">
                <img src="/assets/img/logo/logo.png"/>
              </NavLink>
            </div>
            <div className="mt-40" style={{ marginTop: '110px', marginLeft: '150px'}}>
              <SocialMedia />
            </div>
          </DsnGrid>
        </div>
        <Copyright className="pt-40 pb-40" />
      </Container>
    </footer>
  );
}

export default Footer;
