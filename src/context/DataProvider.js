import React, { useState, useContext } from 'react';
const dayjs = require('dayjs');

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [modalContent, setModalContent] = useState({});

  const postModalContent = (data) => {
    if (!data) {
      return
    }
    setModalContent({ isOpen: true, data });
  }
  const getModalContent = () => {
    if (modalContent.length < 1) {
      return
    }
    return modalContent
  }

  // Imports from static JSON file
  const getLocations = () => {
    import('../data.json')    
    .then(data => {      
      const array = data.default.slice(0);
      const sorted = array.sort((a,b) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      setLocations(sorted);
    })
    .catch(err => console.log(err));
  }

  return (
    <DataContext.Provider value={{
      locations, modalContent,
      getLocations, postModalContent, getModalContent
    }} {...props} />
  )
}

const useData = () => React.useContext(DataContext)

export { DataProvider, useData }