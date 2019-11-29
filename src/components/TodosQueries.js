import gql from 'graphql-tag';

const TodosQuery = gql`
  query {
    allTodoes {
      id
      text
    }
  }
`;

export default TodosQuery;
