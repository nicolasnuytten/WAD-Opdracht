import gql from "graphql-tag";

export default gql`
  query getAllEvents{
    allEvents{
      _id
      name
      date
      money
      text
    }
  }
`