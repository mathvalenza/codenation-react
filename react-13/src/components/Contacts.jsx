import React from "react";

import Contact from './Contact';

class Contacts extends React.Component {
	constructor() {
		super();

		this.state = {
			contacts: [],
		};
	}
	
	componentDidMount() {
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
			.then((response) => response.json())
			.then((contacts) => this.setState({ contacts }));
	}

	render() {
		return (
			<div data-testid="contacts" className="container">
				<section className="contacts">
					{this.state.contacts.map(contact => <Contact />)}
				</section>
			</div>
		);
	}
}

export default Contacts;
