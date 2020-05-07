import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Filters />

        <Contacts />
      </React.Fragment>
    )
  }
}

export default App;
