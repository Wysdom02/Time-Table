import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { logout } from '../../actions/auth'

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
      };
    render() {
        const { isAuthenticated } = this.props.auth;
const guestLinks = (
    <ul type="null">
    <li >Time Table Registration</li>

     <li className = "links"><Link to="/register">Register</Link>
     </li>
     <li className = "links" ><Link to="/login">Login</Link>
     </li>
 </ul>
);

const authLinks = (
    <ul type="null">
    <li >Time Table Registration</li>

    <li className="links" ><button className="authbut2" onClick={this.props.logout}><Link to="/login"></Link>Logout</button>
     </li>
 </ul>
);

        return (
            <div className = "box">
            {isAuthenticated ? authLinks : guestLinks}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
export default connect(mapStateToProps, { logout })(Header);

