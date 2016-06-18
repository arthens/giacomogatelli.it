import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Not found</h1>

                <p>Ooops! It looks like you landed on a page that doesn't exist!</p>

                <p><Link to="/">Back to the frontpage?</Link></p>
            </div>
        )
    }
})
