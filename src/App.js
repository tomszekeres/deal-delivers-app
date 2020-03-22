import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "sjys264f08ox",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "SJOs0QONWmnXYrcmu9URRICS8K3T5o_fzvQ4AkPoOVU"
});

// Create React Context Provider for all this shit ^^^^

const App = () => {
  useEffect(() => {
    client.getEntries()
      .then(function (entries) {
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
          if (entry.fields.name) {
            console.log(entry.fields.name)
          }
        })
      })
  }, [])

  // Create React Context Provider for all this shit ^^^^
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
