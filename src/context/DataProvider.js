import React, { useState, useContext } from 'react';
const dayjs = require('dayjs');

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [locations, setLocations] = useState([]);

  // Imports from static JSON file
  const getLocations = () => {
    import('../data.json').then(data => {
      setLocations(data.default);
    })
  }

  return (
    <DataContext.Provider value={{
      locations,
      getLocations
    }} {...props} />
  )
}

const useData = () => React.useContext(DataContext)

export { DataProvider, useData }