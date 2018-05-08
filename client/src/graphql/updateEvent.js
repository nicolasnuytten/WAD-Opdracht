import gql from "graphql-tag";

export default gql`
  mutation updateEvent(
    $name: String
    $date: String
    $money: String
    $text: String
  ) {
    updateEvent(name: $name, date: $date, money: $money, text: $text) {
      _id
      name
      date
      money
      text
    }
  }
`;
