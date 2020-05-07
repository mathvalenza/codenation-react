import React from "react";

import Contact from './Contact';

class Contacts extends React.Component {
	render() {
		return (
			<div className="container">
				<section className="contacts">
					<Contact />
				</section>
			</div>
		);
	}
}

export default Contacts;
