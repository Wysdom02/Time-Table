import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <div className = "box">
        <ul type="null">
           <li >Time Table Registration</li>

            <li className = "links"><Link to="/register">Register</Link>
            </li>
            <li className = "links" ><Link to="/login">Login</Link>
            </li>
        </ul>
            </div>
        )
    }
}

export default Header

