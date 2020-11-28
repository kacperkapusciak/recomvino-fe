import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { IconButton, TextField } from '@material-ui/core';
import { AddCircleOutlineTwoTone } from '@material-ui/icons';
import { addPerson } from '../../api';

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

interface AddPersonProps {
  refetchPeople: () => Promise<void>;
}

export const AddPerson = ({ refetchPeople }: AddPersonProps) => {
  const [person, setPerson] = useState<string>('');

  const handlePersonAdd = async (event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!person) return;

    try {
      await addPerson({ name: person });
      refetchPeople();
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPerson(event.target.value);
  };

  return (
    <Form onSubmit={handlePersonAdd}>
      <TextField
        id="add-person"
        label="Dodaj osobę"
        value={person}
        onChange={handleTextChange}
        variant="outlined"
        required
      />
      <IconButton onClick={handlePersonAdd} disabled={!person}>
        <AddCircleOutlineTwoTone />
      </IconButton>
    </Form>
  );
};
