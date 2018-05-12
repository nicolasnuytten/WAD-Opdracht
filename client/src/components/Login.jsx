import React, { Component } from "react";
import LOGIN from "../graphql/login";
import { Mutation } from "react-apollo";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { errorMessage: "" };
  }

  handleSubmit = async (e, login) => {
    e.preventDefault();
    const form = e.target;
    const variables = {
      email: form.email.value,
      password: form.password.value
    };
    form.reset();

    try {
      this.setState({ errorMessage: "" });
      const { data } = await login({ variables });
      localStorage.setItem("jwt", data.user.jwt);
      this.props.client.writeData({data: {currentUser: data.user}})
      // this.setState({ user: data.user.email, token: data.user.jwt });
    } catch (error) {
      this.setState({errorMessage: error.message});
    }
  };

  render() {
    return (
      <article>
        <h3>Sign in</h3>
        <Mutation mutation={LOGIN}>
          {login => (
            <form className="userform" onSubmit={e => this.handleSubmit(e, login)}>
          <label htmlFor="sig-email">E-mail</label>
          <input
            type="email"
            id="sig-email"
            name="email"
            required
            defaultValue="simon@simon.be"
          />
          <label htmlFor="sig-pwd">Password</label>
          <input
            type="password"
            id="sig-pwd"
            name="password"
            required
            defaultValue="test"
          />
          <input type="submit" value="Sign in" />
          <p>{this.state.errorMessage}</p>
        </form>
          )}
        </Mutation>
      </article>
    );
  }
}

export default Login;
