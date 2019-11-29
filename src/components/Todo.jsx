import React, { Fragment } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Mutations from './TodosMutations';

function AddTodo() {
  let input;
  const [addTodo] = useMutation(Mutations);

  return (
    <Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </Fragment>
  );
}

export default AddTodo;
