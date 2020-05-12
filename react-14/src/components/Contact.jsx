import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article data-testid="contact" className="contact">
        <img className="contact__avatar" src={this.props.data.avatar} alt={this.props.data.name} />
        <span className="contact__data">{this.props.data.name}</span>
        <span className="contact__data">{this.props.data.phone}</span>
        <span className="contact__data">{this.props.data.country}</span>
        <span className="contact__data">{new Date(this.props.data.admissionDate).toLocaleDateString()}</span>
        <span className="contact__data">{this.props.data.company}</span>
        <span className="contact__data">{this.props.data.department}</span>
      </article>
    );
  }
}

export default Contact;
