import React from 'react';
import styled from 'styled-components';

export const LoadingSpinner = (props) => {
  const { fixed, size, color } = props;
  return (
    <StyledLoadingSpinnerWrap fixed={fixed}>
      <StyledLoadingSpinner size={size} color={color} />
    </StyledLoadingSpinnerWrap>
  );
};

export const getDeliveryRange = (hours) => {
  const firstDateTime = hours[0];
  const lastDateTime = hours[hours.length - 1]
  const getDay = dateTime => dateTime.replace(/ .*/, '');

  return `${getDay(firstDateTime)} – ${getDay(lastDateTime)}`
}

export const isURL = (url) => {  
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  
  return pattern.test(url);
}

export const formatPhone = (str) => {
  return str.replace(/(\d{3})(\d{3})(\d{4})/,'$1 $2 $3'); 
}

export const isEmail = (str) => {
  return str.indexOf('@') != -1 ? str : false
}

const StyledLoadingSpinnerWrap = styled.div`
  position:${props => props.fixed ? 'fixed' : 'static'};
  top:0;
  left:0;
  width:${props => props.fixed ? '100%' : 'auto'};;
  height:${props => props.fixed ? '100%' : 'auto'};
  z-index:998;
  background-color:${props => props.fixed ? 'rgba(255,255,255,0.2)' : 'transparent'};
  display:flex;
  justify-content:center;
  align-items:center;  

`;
const StyledLoadingSpinner = styled.div`
  --faded-color:var(--base-light);
  --color:var(--base);  
  border-radius: 50%;
  width: ${props => props.size === 'large' ? '10rem' : '3rem'};
  height: ${props => props.size === 'large' ? '10rem' : '3rem'};
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: ${props => props.size === 'large' ? '1.1rem' : '0.25rem'} solid var(--faded-color);
  border-right: ${props => props.size === 'large' ? '1.1rem' : '0.25rem'} solid var(--faded-color);
  border-bottom: ${props => props.size === 'large' ? '1.1rem' : '0.25rem'} solid var(--faded-color);
  border-left: ${props => props.size === 'large' ? '1.1rem' : '0.25rem'} solid var(--color);
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  &::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;