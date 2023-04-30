import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from '../ContactForm/ContactForm.styled';
import { filtredByName } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <Label>
      Finds contacts by name
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(filtredByName(e.target.value))}
      />
    </Label>
  );
};
