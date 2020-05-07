import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';

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
        <div className="container">
          <section className="filters">
            <div className="filters__search">
              <input type="text" className="filters__search__input" placeholder="Pesquisar" />

              <button className="filters__search__icon">
                <i className="fa fa-search"/>
              </button>
            </div>

            <button className="filters__item is-selected">
              Nome <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
              País <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
              Empresa <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
              Departamento <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
              Data de admissão <i className="fas fa-sort-down" />
            </button>
          </section>
        </div>

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
