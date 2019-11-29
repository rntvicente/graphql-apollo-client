import React from 'react'
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

import Queries from './TodosQueries';

const handlerAddToDo = () => {
  console.log('PASSOU AQUI');
};

function TodoList() {
  const { loading, error, data } = useQuery(Queries);



  if (loading) return 'Loading...';
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

      <button onClick={this.handlerAddToDo().bind(this)}>ADD</button>
    </div>
  );
}

export default graphql(Queries, { name: 'todos' })(TodoList);
