import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <div >
        <div >
          <h2 >Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="inputbox"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div >
              <label>Email:</label>
              <input
                type="email"
                className="inputbox"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div >
              <label>Password:</label>
              <input
                type="password"
                className="inputbox"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="inputbox"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div>
              <button type="submit" className="inputbox">
                Register
              </button>
            </div>
            <p className="heading2">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);