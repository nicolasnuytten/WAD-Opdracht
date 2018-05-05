import gql from "graphql-tag";

export default gql`
  query getEvent($id: String!) {
    event(_id: $id){
      _id 
      name
      date
      money
      text
    }
  }
`;
