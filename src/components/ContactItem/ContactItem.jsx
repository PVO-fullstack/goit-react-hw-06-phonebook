import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { Button, Li, Span } from './ContactItem.styled';

export const ContactItem = () => {
  const contactList = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const normalaizeFilter = filter.toLowerCase();

  const visibleContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(normalaizeFilter)
  );

  return visibleContacts.map(contact => (
    <Li key={contact.id}>
      <Span>{contact.name}: </Span>
      <Span>{contact.number}</Span>
      <Button onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </Button>
    </Li>
  ));
};
