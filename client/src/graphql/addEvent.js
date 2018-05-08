import gql from "graphql-tag";

export default gql`
  mutation addEvent(
    $name: String!
    $date: String!
    $money: String!
    $text: String!
  ) {
    addEvent(name: $name, date: $date, money: $money, text: $text) {
      _id
      name
      date
      money
      text
    }
  }
`;
