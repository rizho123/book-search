import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css";

const Navbar = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li>
                <h1>Books Search</h1>
            </li>
            <li>
                <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
            </li>
            <li>
                <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
            </li>
        </ul>
    </div>
)

export default Navbar;