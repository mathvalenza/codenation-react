import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      localDate: '',
    }
  }

  componentDidMount() {
    const transformedDate = new Date(this.props.data.admissionDate).toLocaleDateString();
    const [year, month, day] = transformedDate.split('-');
    if (year && month && day) {
      const localDate = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
      
      this.setState({ localDate  });
    }
  }

  render() {
    return (
      <article data-testid="contact" className="contact">
        <img className="contact__avatar" src={this.props.data.avatar} alt={this.props.data.name} />
        <span data-testid="contact-name" className="contact__data">{this.props.data.name}</span>
        <span data-testid="contact-phone" className="contact__data">{this.props.data.phone}</span>
        <span data-testid="contact-country" className="contact__data">{this.props.data.country}</span>
        <span data-testid="contact-date" className="contact__data">{this.state.localDate}</span>
        <span data-testid="contact-company" className="contact__data">{this.props.data.company}</span>
        <span data-testid="contact-department" className="contact__data">{this.props.data.department}</span>
      </article>
    );
  }
}

export default Contact;
