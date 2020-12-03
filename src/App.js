import React, { Component } from 'react';
import shortid from 'shortid';
import Section from './components/Section';
import Form from './components/Form';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const contact = {
      id: shortid.generate(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}

export default App;
