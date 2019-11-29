import gql from 'graphql-tag';

const Add = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
    }
  }
`;

export default Add;
