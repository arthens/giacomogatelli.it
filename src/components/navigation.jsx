import React from 'react'
import { Link } from 'react-router'
import { FormattedMessage, injectIntl } from 'react-intl'

export default injectIntl(React.createClass({
    propTypes: {
        intl: React.PropTypes.object.isRequired
    },

    localizeUrl(route) {
        if (this.props.intl.locale !== 'en') {
            return '/' + this.props.intl.locale + route
        } else {
            return route
        }
    },

    render() {
        return (
            <div className="section section__menu">
                <ul className="menu-links">
                    <li className="menu-link">
                        <i className="fa fa-angle-double-right"></i>
                        {' '}
                        <Link to={this.localizeUrl('/')} activeClassName="selected" onlyActiveOnIndex={true}>
                            <FormattedMessage id="nav_about"/>
                        </Link>
                    </li>
                    <li className="menu-link">
                        <i className="fa fa-angle-double-right"></i>
                        {' '}
                        <Link to={this.localizeUrl('/curriculum.html')} activeClassName="selected">
                            <FormattedMessage id="nav_curriculum"/>
                        </Link>
                    </li>
                    <li className="menu-link">
                        <i className="fa fa-angle-double-right"></i>
                        {' '}
                        <Link to={this.localizeUrl('/contact.html')} activeClassName="selected">
                            <FormattedMessage id="nav_contact"/>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}))
