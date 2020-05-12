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
      sortBy: '',
    };
    
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
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

  handleSort(field) {
    if (field === this.state.sortBy) {
      this.setState({ sortBy: '' });
      this.sortByField();
    } else {
      this.setState({ sortBy: field });
      this.sortByField(field);
    }
  }

  filterByText(search) {
    if (!search)
      return this.state.contacts;

    return this.state.contacts.filter(({ name, phone, country, admissionDate, company, department }) =>
      [name, phone, country, admissionDate, company, department]
      .some(value => value.toUpperCase().includes(search.toUpperCase()))
    );
  }

  sortByField(sortBy = 'id') {
    return this.state.filteredContacts.sort((current, next) => {
      if (current[sortBy].toUpperCase() < next[sortBy].toUpperCase())
        return -1;

      return 1;
    });    
  }

  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />

        <Filters
          searchString={this.state.searchString}
          sortBy={this.state.sortBy}
          onChangeSearch={this.handleSearch}
          onChangeSort={this.handleSort}
        />

        <Contacts contacts={this.state.filteredContacts}/>
      </div>
    )
  }
}

export default App;
