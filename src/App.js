import React, { useEffect } from 'react';
import { useData } from './context/DataProvider';
import { LocationCard } from './components/Cards';
import { Grid, Container } from './components/Layout';
import { HeroHeader, Nav } from './components/Headers';
import { LoadingSpinner } from './components/Helpers';

// Code Splitting
const LocationList = React.lazy(() => import('./components/Locations').then(module => ({ default: module.LocationList })));

const App = () => {
  return (
    <>
      <Nav />
      <HeroHeader />
      <React.Suspense fallback={<LoadingSpinner fixed={true} />}>
        <LocationList />
      </React.Suspense>
    </>
  )
}

export default App;
