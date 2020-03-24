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
    import('../data.json').then(data => {
      setLocations(data.default);
    })
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