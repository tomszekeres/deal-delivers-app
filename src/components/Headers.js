import React from 'react';
import styled from 'styled-components';
import { Container } from './Layout';
import { LocationSearch } from './Locations';
import { Button } from './Buttons';

export const Nav = () => {
  return (
    <StyledNav role="navigation">
      <Button path="mailto:hello@dulwichdelivers.com?subject=List Me">
        📍 List your location
      </Button>
      // <Button path="https://www.facebook.com/groups/2607836459447926/">
      //   🙌 Follow on Facebook
      // </Button>
    </StyledNav>
  )
}

export const HeroHeader = ({ search }) => {
  return (
    <StyledHeroHeader role="banner" style={{ backgroundImage: `url(/images/Header@2x.png)` }}>
      <Container>
        <h1>Dulwich Delivers</h1>
        <p>Helping the high-street with local restaurants, shops & essential services that deliver direct to your door</p>
        <LocationSearch />
      </Container>
    </StyledHeroHeader >
  )
}

const StyledHeroHeader = styled.header`
  display:block;
  padding:var(--spacing-xxl) 0;
  padding-bottom:calc(var(--spacing-lg) * 2.5);
  background-color:var(--base);
  background-size:cover;
  background-position:top;

  h1 {
    color:var(--text-high-white);
    margin:0 0 1rem 0;
  }
  p {
    color:var(--text-med-white);
    max-width:35ch;
  }

  @media(min-width:48rem) {
    padding-bottom:calc(var(--spacing-xl) * 1.5);
  }
`

const StyledNav = styled.nav`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  display:block;
  justify-content:space-between;
  align-items:center;
  flex-flow:row nowrap;
  width:100%;
  padding:var(--spacing-sm);

  a {
    width:100%;
    margin:0 0 var(--spacing-xs) 0;
  }

  @media(min-width:48rem) {
    display:flex;
    justify-content:flex-end;

    a {
      width:auto;
      margin:0 0 0 var(--spacing-xs);
    }
  }


`
