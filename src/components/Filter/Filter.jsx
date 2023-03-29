import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from '../ContactForm/ContactForm.styled';
import { filtredByName } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);

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
