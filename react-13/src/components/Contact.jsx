import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article data-testid="contact" className="contact">
        <img className="contact__avatar" src={this.props.avatar} alt={this.props.name} />
        <span className="contact__data">{this.props.name}</span>
        <span className="contact__data">{this.props.phone}</span>
        <span className="contact__data">{this.props.country}</span>
        <span className="contact__data">{new Date(this.props.admissionDate).toLocaleDateString()}</span>
        <span className="contact__data">{this.props.company}</span>
        <span className="contact__data">{this.props.department}</span>
      </article>
    );
  }
}

export default Contact;
