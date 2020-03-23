import React from 'react';
import styled from 'styled-components';

export const Button = ({ path, children }) => {
  return <StyledButton href={path}>{children}</StyledButton>
}

export const ButtonPrimary = ({ children, ...rest }) => {
  return <StyledButtonPrimary {...rest}>{children}</StyledButtonPrimary>
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
  background-color:var(--base);
  color:#fff;
  font-weight:700;
  border-radius:0.25rem;
  box-shadow:0 1px 3px rgba(0,0,0,0.08);
  margin:var(--spacing-sm) auto;
  border:none;
  text-align:center;
  transition:all .2s ease;

  &:hover {
    background-color:#202020;    
    transition:all .2s ease;
  }
`