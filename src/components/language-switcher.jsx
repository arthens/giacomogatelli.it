import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div className="section section--desktop-only">
                <div className="language-switcher">
                    <Link to="/" className="language-switcher__language">English</Link>
                    <Link to="/it/" className="language-switcher__language">Italiano</Link>
                </div>
            </div>
        )
    }
})
