import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <div>
            <Link to="/">About</Link>
            <Link to="/curriculum.html">Curriculum</Link>
            <Link to="/contact.html">Contact</Link>
            {this.props.children}
        </div>
    }
})
