import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import { useMutation } from '@apollo/react-hooks';

import { CreateTodo } from './TodosMutations';

function AddTodo() {
  let input;
  const [createTodo] = useMutation(CreateTodo);

  return (
    <Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          createTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Adicionar</button>
      </form>
    </Fragment>
  );
}

export default graphql(CreateTodo, { name: 'create' })(AddTodo);