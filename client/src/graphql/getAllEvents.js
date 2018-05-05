import gql from "graphql-tag";

export default gql`
  query getAllEvents{
    allEvents{
      id
      name
      date
      money
      text
    }
  }
`