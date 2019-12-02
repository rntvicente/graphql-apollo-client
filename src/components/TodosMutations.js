import gql from 'graphql-tag';

export const CreateTodo = gql`
  mutation CreateTodo($type: String!) {
    createTodo(text: $type) {
      id
      text
    }
  }
`;

export const UpdateTodo = gql`
  mutation UpdateTodo($type: ID!) {
    updateTodo(id: $type) {
      text
    }
  }
`;
