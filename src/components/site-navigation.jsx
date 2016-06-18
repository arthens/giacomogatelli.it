import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div className="section section__menu">
                <ul className="menu-links">
                    <li className="menu-link">
                        <i className="fa fa-angle-double-right"></i>
                        {' '}
                        <Link to="/">About</Link>
                    </li>
                    <li className="menu-link">
                        <i className="fa fa-angle-double-right"></i>
                        {' '}
                        <Link to="/curriculum.html">Curriculum</Link>
                    </li>
                    <li className="menu-link">
                        <i className="fa fa-angle-double-right"></i>
                        {' '}
                        <Link to="/contact.html">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
})
