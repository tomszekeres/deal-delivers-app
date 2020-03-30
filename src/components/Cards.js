import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { MapPin, Clock, AlertCircle } from 'react-feather';
import { getDeliveryRange, isURL, isEmail, formatPhone } from './Helpers';
import { useData } from '../context/DataProvider';
import { ButtonPrimary } from './Buttons';

export const CookieNotice = () => {
  const [hasCookie, setHasCookie] = useState();
  const cookies = new Cookies();

  useEffect(() => {
    const cookie = cookies.get('gaAccept');    
    setHasCookie(cookie);
  }, []);

  const setCookieAccept = () => {
    cookies.set('gaAccept', true);
    setHasCookie(true);
  }

  return(
    <StyledCookieBarWrap visible={!hasCookie}>
      <StyledCard base="var(--base)" align="center">
        <StyledCookieBarInner>
          <span>🍪</span>
          <p>This website uses cookies to give you a better experience.</p>
        </StyledCookieBarInner>
      <ButtonPrimary onClick={setCookieAccept}>Accept</ButtonPrimary>
      </StyledCard>
    </StyledCookieBarWrap>
  )
}

export const CalloutCard = ({ children, ...rest }) => {
  return (
    <StyledCard base="var(--base)" align="center" {...rest}>
      <StyledCalloutCardInner>
        {children}
      </StyledCalloutCardInner>
    </StyledCard>
  )
}

const LocationCardAccordion = ({ title, children }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <StyledAccordionWrap>
      <StyledAccordionTitle onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
        <Clock /><p>{title}</p>
      </StyledAccordionTitle>
      <StyledAccordionBody isOpen={isAccordionOpen}>
        {children}
      </StyledAccordionBody>
    </StyledAccordionWrap>
  )
}

const LocationCardPropList = ({ children }) => {
  return (
    <StyledCardList>
      {children}
    </StyledCardList>
  )
}

export const LocationCard = ({ details, children, ...rest }) => {
  const { cover, name, website, phone, file, address, deliveryHours, safetyTips, email } = details;
  const { postModalContent } = useData();
  return (
    <StyledCard base="#fff" {...rest}>
      <StyledCardImageWrap>
        <img src={cover} alt={name} />
      </StyledCardImageWrap>
      <StyledCardBody>
        {children}
      </StyledCardBody>
      <LocationCardPropList>
        {address && <li><MapPin /><p>{address}</p></li>}
        {deliveryHours && deliveryHours.length > 0 && <li>
          <LocationCardAccordion title={getDeliveryRange(deliveryHours)}>
            {deliveryHours.map(time => <small key={time}>{time}</small>)}
          </LocationCardAccordion>
        </li>}
        {safetyTips && <li onClick={() => postModalContent(safetyTips)}><AlertCircle /><p>Safety tips</p></li>}
      </LocationCardPropList>
      <StyledCardLinks>
        {website && isURL(website) && <li><StyledCardLinkItem href={`${website}`}>🔗 Go to website</StyledCardLinkItem></li>}
        {email && isEmail(email) && <li><StyledCardLinkItem href={`mailto:${email}`}>✉️ Email us</StyledCardLinkItem></li>}
        {phone && <li><StyledCardLinkItem href={`tel://${phone.replace(/\s/g, '')}`}>{`🤙 Call ${formatPhone(phone)}`}</StyledCardLinkItem></li>}
        {file && <li><StyledCardLinkItem href={`/uploads/${file}`}>📃 Download PDF</StyledCardLinkItem></li>}
      </StyledCardLinks>
    </StyledCard>
  )
}

const StyledCard = styled.article`
  display:flex;
  justify-content:${props => props.align || "flex-start"};
  align-items:${props => props.align || "flex-start"};
  flex-flow:column nowrap;
  background-color:${props => props.base || "#FFF"};
  border-radius:0.5rem;
  box-shadow:0 1rem 2rem rgba(0,0,0,0.08);  
  height:100%;

  > * {
    width:100%;
    margin-bottom:var(--spacing-sm);
  }
`;
const StyledCardImageWrap = styled.picture`
  display:block;  
  width:100%;
  height:200px;
  overflow:hidden;
  border-top-left-radius:0.5rem;
  border-top-right-radius:0.5rem;

  img {
    object-fit:cover;
    width:100%;
    height:100%;
  }
`;
const StyledCardBody = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  flex-flow:column nowrap;
  padding:0 var(--spacing-sm);

  > * {
    width:100%;
    margin:0 0 .85rem 0;
  }

  small {
    text-transform:uppercase;
    font-weight:700;
    color:var(--text-low);
  }

  p {
    max-width:30ch;
    margin-bottom:0;
  }
`
const StyledCardLinks = styled.ul`
  display:block;  
  padding:0 var(--spacing-sm);
`
const StyledCardLinkItem = styled.a`
  display:block;
  border-top:1px solid var(--base-light);
  padding:var(--spacing-xs) 0;  
  text-decoration:none;  
  transition:all .2s ease;

  &:hover {
    text-decoration:underline;
    transition:all .2s ease;    
  }
`
const StyledCardList = styled.ul`
  display:block;
  padding:0 var(--spacing-xs);

  li {
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding-bottom:var(--spacing-sm);
    color:var(--text-med);   
     

    &:last-of-type {
      padding-bottom:0;
      cursor:pointer;

      &:hover {
        text-decoration:underline;
      }
    }
    p {
      flex:1;
      padding-left:var(--spacing-xs);
    }
  }
`
const StyledAccordionWrap = styled.div`
  display:block;
`
const StyledAccordionTitle = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;  
  color:var(--text-med);
  cursor:pointer;
  text-decoration:none;

  &:hover {
    text-decoration:underline;
  }
`
const StyledAccordionBody = styled.div`  
  will-change:max-height, overflow;
  max-height:${props => props.isOpen ? '200px' : '0'};
  overflow: ${ props => props.isOpen ? 'auto' : 'hidden'};
  transition: all .2s ease;

  small {
    padding-top:1rem;
    padding-left:2.5rem;
    color:var(--text-low);
  }
`
const StyledCalloutCardInner = styled.div`
  padding:var(--spacing-md) 0;
  text-align:center;

  h2 {
    color:var(--text-high-white);
  }
  p {
    color:var(--text-med-white);
    max-width:45ch;
    margin-left:auto;
    margin-right:auto;
  }  
`

const StyledCookieBarWrap = styled.div`
  position:fixed;
  bottom:var(--spacing-sm);
  left:0;
  right:0;
  padding:0 var(--spacing-sm);
  margin:0 auto;
  z-index:998;
  opacity:${props => props.visible ? 1 : 0};
  pointer-events:${props => props.visible ? 'auto' : 'none'};

  article{    
    max-width:780px;
    margin:0 auto;
    padding:var(--spacing-sm);

    @media(min-width:48rem) {
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-flow:row nowrap;
      padding:0 var(--spacing-sm);
    }
  }
  button {
    flex:0;
    margin:0;
  }
`;
const StyledCookieBarInner = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding:var(--spacing-sm) 0;
  margin:0;  

  p {
    color:var(--text-high-white);
    padding-left:var(--spacing-xs);
    margin:0;
  }
  a {
    color:var(--text-high-white);
  }
`;