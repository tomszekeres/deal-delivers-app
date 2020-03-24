import React, { useEffect } from 'react';
import { useData } from './context/DataProvider';
import { LocationCard, CalloutCard } from './components/Cards';
import { Grid, Container } from './components/Layout';
import { HeroHeader, Nav } from './components/Headers';
import { LoadingSpinner } from './components/Helpers';

// Code Splitting
const LocationList = React.lazy(() => import('./components/Locations').then(module => ({ default: module.LocationList })));
const Modal = React.lazy(() => import('./components/Modal').then(module => ({ default: module.Modal })));

const App = () => {
  return (
    <>
      <Nav />
      <HeroHeader />
      <React.Suspense fallback={<LoadingSpinner fixed={true} />}>
        <LocationList />
        <Modal />
      </React.Suspense>
      <Container style={{ paddingBottom: '6rem' }}>
        <CalloutCard id="stay-informed">
          <h2>Stay informed</h2>
          <p>Sign up to the Deal Delivers mailing list to keep up to date with whats going on in your area</p>
          <input />
        </CalloutCard>

      </Container>
    </>
  )
}

export default App;
