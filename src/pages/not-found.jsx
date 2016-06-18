import React from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'

export default React.createClass({
    render() {
        return (
            <div>
                <h1><FormattedMessage id="notfound_title"/></h1>
                <p><FormattedMessage id="notfound_message"/></p>
                <p><Link to="/"><FormattedMessage id="notfound_cta"/></Link></p>
            </div>
        )
    }
})
