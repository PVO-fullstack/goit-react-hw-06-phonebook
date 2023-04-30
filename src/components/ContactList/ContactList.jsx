import React from 'react';
import { useSelector } from 'react-redux';
import { Ul, Li } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContactsList, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contactList = useSelector(getContactsList);
  const filter = useSelector(getFilter);

  const normalaizeFilter = filter.toLowerCase();

  const visibleContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(normalaizeFilter)
  );

  console.log(visibleContacts);

  return (
    <Ul>
      {visibleContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Li key={id}>
            <ContactItem id={id} name={name} number={number} />
          </Li>
        );
      })}
    </Ul>
  );
};
