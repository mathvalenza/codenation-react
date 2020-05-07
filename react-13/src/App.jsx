import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

class App extends React.Component {
  constructor() {
		super();

		this.state = {
      contacts: [],
      filteredContacts: [],
    };
    
    this.handleTyping = this.handleTyping.bind(this);
	}
	
	componentDidMount() {
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
			.then((response) => response.json())
			.then((contacts) => this.setState({ contacts, filteredContacts: contacts }));	
  }
  
  handleTyping(value) {
    const filteredContacts = this.filterBySearchString(value);

    console.log('filteredContacts', filteredContacts);
    console.log('value: ', value);
    
    this.setState({ filteredContacts });
  }

  filterBySearchString(search) {
    if (!search)
      return this.state.contacts;

    return this.state.contacts.filter(({ name, phone, country, admissionDate, company, department }) =>
      [name, phone, country, admissionDate, company, department]
      .some(value => value.toUpperCase().includes(search.toUpperCase()))
    );
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Filters onChange={this.handleTyping}/>

        <Contacts contacts={this.state.filteredContacts}/>
      </React.Fragment>
    )
  }
}

export default App;
