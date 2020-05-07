import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then((response) => response.json())
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />

        <div className="container">
          <section className="contacts">
            <article className="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>
          </section>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
