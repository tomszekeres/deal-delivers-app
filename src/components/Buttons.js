import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

export const Button = ({ path, children }) => {
  return <StyledButton href={path}>{children}</StyledButton>
}

export const ButtonSecondary = ({ children, ...rest }) => {
  return <StyledButtonSecondary {...rest}>{children}</StyledButtonSecondary>
}

export const ButtonPrimary = ({ children, ...rest }) => {
  return <StyledButtonPrimary {...rest}>{children}</StyledButtonPrimary>
}

export const ButtonText = ({ children, ...rest }) => {
  return <StyledTextButton {...rest}>{children}</StyledTextButton>
}

const StyledButton = styled.a`
  display:inline-block;
  padding:0.85rem var(--spacing-xs);
  font-size:0.85rem;
  text-decoration:none;
  background-color:rgba(255,255,255,0.1);
  color:#fff;
  border-radius:0.25rem;  
  border:none;
  text-align:center;  
  cursor:pointer;
  transition:all .2s ease;

  &:hover {
    background-color:#fff;
    color:var(--text-high);
    transition:all .2s ease;
  }
`

const StyledButtonPrimary = styled.button`
  display:block;
  padding:var(--spacing-xs) var(--spacing-sm);
  font-size:0.85rem;
  text-decoration:none;
  background-color:var(--primary);
  color:#fff;
  font-weight:700;
  border-radius:0.25rem;
  border:2px solid var(--primary);
  box-shadow:0 1px 3px rgba(0,0,0,0.08);
  margin:var(--spacing-sm) auto;
  border:none;
  text-align:center;
  cursor:pointer;
  transition:all .2s ease;

  &.disabled {
    pointer-events:none;    
    opacity:0.5;
  }

  &:hover {
    background-color:${darken(0.2, '#FF5630')};
    transition:all .2s ease;
  }
`

const StyledButtonSecondary = styled.button`
  display:block;
  padding:var(--spacing-xs) var(--spacing-sm);
  font-size:0.85rem;
  text-decoration:none;
  background-color:transparent;
  color:var(--base);
  font-weight:700;
  border-radius:0.25rem;
  border:2px solid var(--base);
  box-shadow:0 1px 3px rgba(0,0,0,0.08);
  margin:var(--spacing-sm) auto;
  border:none;
  text-align:center;
  cursor:pointer;
  transition:all .2s ease;

  &:hover {
    background-color:rgba(11,19,43,0.1);    
    transition:all .2s ease;
  }
`

const StyledTextButton = styled.button`
  display:inline-block;
  border:none;
  background-color:transparent;
  color:var(--base);
  text-decoration:underline;
  font-weight:700;
  font-size:1rem;
  font-family:var(--font-stack);
  margin:var(--spacing-xs) 0;
  cursor:pointer;

  @media(min-width:48rem) {
    font-size:1.125rem;
  }
  
`