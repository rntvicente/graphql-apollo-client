import React from 'react'
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

import Queries from './TodosQueries';

function TodoList() {
  const { loading, error, data } = useQuery(Queries);

  if (loading) return 'Carregando...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul>
        {data.allTodoes.map((item) => {
          return (
            <li key={item.id}>{item.text}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default graphql(Queries, { name: 'todos' })(TodoList);
