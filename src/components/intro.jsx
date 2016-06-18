import React from 'react'

import { injectIntl, FormattedMessage } from 'react-intl'

export default injectIntl(React.createClass({
    propTypes: {
        intl: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div className="section section__me">
                <img
                    className="me-avatar"
                    src="/images/giacomo-330x330.jpg"
                    title={this.props.intl.formatMessage({id: 'intro_avatar_title'})}
                    alt="Giacomo Gatelli"
                    width="120"
                    height="120"
                />
                    <a href="http://giacomogatelli.it">
                        <h2 className="me-name">Giacomo Gatelli</h2>
                    </a>
                    <p className="me-intro">
                        <FormattedMessage id="intro_description"/>
                    </p>
            </div>
        )
    }
}))
