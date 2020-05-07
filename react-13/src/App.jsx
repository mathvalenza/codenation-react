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
      searchString: '',
      orderBy: 'name',
    };
    
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
	}
	
	componentDidMount() {
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
			.then((response) => response.json())
			.then((contacts) => this.setState({ contacts, filteredContacts: contacts }));	
  }
  
  handleSearch(searchString) {
    this.setState({ searchString })

    const filteredContacts = this.filterByText(searchString);
    
    this.setState({ filteredContacts });
  }

  handleOrder(field) {
    console.log('parent', field);
    this.setState({ orderBy: field })
  }

  filterByText(search) {
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

        <Filters
          searchString={this.state.searchString}
          onChangeSearch={this.handleSearch}
          onChangeOrder={this.handleOrder}
        />

        <Contacts contacts={this.state.filteredContacts}/>
      </React.Fragment>
    )
  }
}

export default App;
