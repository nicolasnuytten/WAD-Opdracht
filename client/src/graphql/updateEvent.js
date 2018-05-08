import gql from "graphql-tag";

export default gql`
  mutation updateUser(
    $name: String!
    $date: String!
    $money: String!
    $text: String!
  ) {
    updateEvent(name: $name, date: $date, money: $money, text: $text) {
      name
      date
      money
      text
    }
  }
`;
