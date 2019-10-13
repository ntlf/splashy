import React, { useState } from 'react';
import styled from 'styled-components';

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
    >
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">Search</button>
    </Form>
  );
}
