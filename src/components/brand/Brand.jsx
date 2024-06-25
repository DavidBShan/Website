import React from "react";
import styled from "styled-components";
import brandLight from './logo.png';
import brandDark from './logo-dark.png';

const MainBrand = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   img {
    width: ${props => props.width};
    max-width: 100%;
    height: ${props => props.height};
   }

   @media (max-width: 768px) {
       img {
           width: ${props => props.mobileWidth || '50vw'};
           height: auto;
       }
   }

   .v-light &, & {
        .logo-dark {
           display: block;     
        }
        .logo-light {
            display: none;    
        }
   }
    
   .v-dark & {
       .logo-dark {
           display: none;     
        }
        .logo-light {
            display: block;    
        }
   }
`;

const Brand = ({width, height, alt, mobileWidth}) => {
    return (
        <MainBrand className="main-brand" width={width} height={height} mobileWidth={mobileWidth}>
            <img className="logo-light" src={brandLight} alt={`${alt} - logo light`} />
            <img className="logo-dark" src={brandDark} alt={`${alt} - logo dark`} />
        </MainBrand>
    );
}

MainBrand.defaultProps = {width: '80px', height: 'auto', mobileWidth: '40vw'}
Brand.defaultProps = {alt: "David Shan"}

export default React.memo(Brand);