import React from "react";

import Contact from './Contact';

class Contacts extends React.Component {
	render() {
		return (
			<div data-testid="contacts" className="container">
				<section className="contacts">
				<Contact
					name="Nome"
					phone="Telefone"
					country="País"
					admissionDate="Data de admissão"
					company="Empresa"
					department="Departamento"
				/>
				{this.props.contacts.map(contact =>
					<Contact
						key={contact.id}
						avatar={contact.avatar}
						name={contact.name}
						phone={contact.phone}
						country={contact.country}
						admissionDate={contact.admissionDate}
						company={contact.company}
						department={contact.department}
					/>
				)}
				</section>
			</div>
		);
	}
}

export default Contacts;
