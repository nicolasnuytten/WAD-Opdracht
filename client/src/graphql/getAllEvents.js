import gql from "graphql-tag";

export default gql`
  query getAllEvents{
    allEvents{
      name
      date
      money
      text
    }
  }
`