import React from 'react'
import { FormattedMessage } from 'react-intl'

export default React.createClass({
    render() {
        return (
            <div>
                <h1><FormattedMessage id="contact_title"/></h1>
                <p><FormattedMessage id="contact_email"/></p>
                <p><FormattedMessage id="contact_other"/></p>
            </div>
        )
    }
})
