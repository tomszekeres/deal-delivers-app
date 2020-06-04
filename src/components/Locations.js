import React, { useEffect, useState } from 'react';
import { useData } from '../context/DataProvider';
import { LocationCard } from './Cards';
import { Grid, Container } from './Layout';
import fuzzyFilterFactory, { onChangeInputValue } from "react-fuzzy-filter";
import styled from 'styled-components';
import { Search } from 'react-feather';
import { ButtonSecondary } from './Buttons';
import { LoadingSpinner } from './Helpers';

// Fuse
const { InputFilter, FilterResults } = fuzzyFilterFactory();
const fuseConfig = {
  keys: ["name", "tags"],
  threshold: 0.3
};

export const LocationSearch = () => {
  return (
    <StyledInputWrap>
      <Search />
      <InputFilter debounceTime={200} placeholder="What are you looking for" />
    </StyledInputWrap>
  )

}

export const LocationList = () => {
  const { locations, getLocations } = useData();
  const [locationLimit, setLocationLimit] = useState(9);

  // Grabs JSON data from provider
  useEffect(() => {
    getLocations();
  }, []);

  // Check if data exists
  if (locations.length < 1) {
    return <LoadingSpinner />
  }

  return (
    <Container style={{ marginTop: '-6rem', paddingBottom: '5rem' }}>
      <FilterResults items={locations} fuseConfig={fuseConfig}>
        {filteredItems => {
          return (
            <Grid cols="3">
              {filteredItems.slice(0, locationLimit).map(location => {
                const { cover, name, description, tags, address, website, phone, file, deliveryHours } = location
                return (
                  <LocationCard key={name} details={location}>
                    <h4>{name}</h4>
                    <small>{tags.map((tag, i) => { return (i + 1) == tags.length ? <span key={tag}>{tag}</span> : <span key={tag}>{tag} • </span> })}</small>
                    <p>{description}</p>
                  </LocationCard>
                )
              })}
            </Grid>
          )
        }
        }
      </FilterResults>
      {locations.length > locationLimit ? <ButtonSecondary onClick={() => setLocationLimit(locationLimit + 9)}>Load More</ButtonSecondary> : null}
    </Container>
  )
}

const StyledInputWrap = styled.div`
  position:relative;
  display:block;
  max-width:420px;  
  margin:var(--spacing-sm) 0;
  color:#d8d8d8;

  svg {
    position:absolute;
    top:1rem;
    left:1rem;
  }
  input {
    display:block;
    width:100%;
    padding:var(--spacing-xs);
    padding-left:3rem;
    border-radius:0.25rem;
    background-color:#fff;
    border:1px solid var(--base-light);
    box-shadow:0 0.5rem 1rem rgba(0,0,0,0.08);
    font-size:1rem;
    font-family:var(--font-stack);
    color:var(--text-med);
  }
`