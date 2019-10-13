import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from './common';

const Form = styled('form')`
  text-align: center;
`;

export default function Search({ onSubmit }) {
  const [value, setValue] = useState('');

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(value);
      }}
      data-testid="form"
    >
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        data-testid="input"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}
