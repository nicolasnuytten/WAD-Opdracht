import gql from "graphql-tag";

export default gql`
  mutation removeEvent(
    $name: String!
  ) {
    removeEvent(name: $name) {
      name
    }
  }
`;
