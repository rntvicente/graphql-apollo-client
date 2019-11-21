import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class TodoList extends React.Component {
  renderTodoList = () => (
    <ul>
      {this.props.todos.allTodoes.map((item) => {
        return (
          <li id={item.id}>{item.text}</li>
        );
      })}
    </ul>
  );

  render() {
    const { todos } = this.props;

    return (
      <React.Fragment>
        {
          todos.loading
            ? <span>Caregando...</span>
            : this.renderTodoList()

        }
      </React.Fragment>
    );
  }
};

const TodosQuery = gql`
  query {
    allTodoes {
      id
      text
    }
  }
`;

export default graphql(TodosQuery, { name: 'todos' })(TodoList);
