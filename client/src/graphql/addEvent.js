import gql from "graphql-tag";

export default gql`
  mutation addEvent(
    $name: String!
    $date: String!
    $money: String!
    $text: String!
  ) {
    addPost(name: $name, date: $date, money: $money, text: $text) {
      _id
      name
      date
      money
      text
    }
  }
`;
