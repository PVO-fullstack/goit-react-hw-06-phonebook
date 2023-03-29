import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactItem } from '../ContactItem/ContactItem';
import { Header, Title } from './App.styled';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Header>Phonebook</Header>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList>
        <ContactItem />
      </ContactList>
    </div>
  );
};
