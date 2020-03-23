import React from 'react';
import { DataProvider } from './DataProvider';

const AppProviders = ({ children }) => {
  return (
    <DataProvider>
      {children}
    </DataProvider>
  );
};

export default AppProviders;