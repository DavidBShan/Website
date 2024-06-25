import React from 'react';
import './style.scss';

import { Container } from 'react-bootstrap';

import SocialMedia from '../social-media/SocialMedia';
import DsnGrid from '../DsnGrid';
import NavLink from '../button/NavLink';
import MenuFooter from './MenuFooter';
import Copyright from './Copyright';
import { dsnCN } from '../../hooks/helper';

function Footer({ className, ...restProps }) {
  return (
    <footer className={dsnCN('footer background-section', className)} {...restProps}>
      <Container>
        <div className="footer-links pt-80 pb-40">
          <DsnGrid col={4} colTablet={2} colMobile={1}>
            <div className="dsn-col-footer">
              <h4 className="footer-title">Navigation</h4>
              <MenuFooter />
            </div>
            <div className="footer-logo" style={{ marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '500px' }}>
              <NavLink to="/">
                <img src="/assets/img/logo/logo.png" style={{ width: '100%', height: 'auto' }}/>
              </NavLink>
            </div>
            <div className="footer-social-media" style={{ marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto' }}>
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