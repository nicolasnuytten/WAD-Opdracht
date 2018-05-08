import gql from "graphql-tag";

export default gql`
  mutation deleteEvent(
    $id: String!
  )
    {
    deleteEvent(_id: $id) {
      _id
    }
  }
`;
