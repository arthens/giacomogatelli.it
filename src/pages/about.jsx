import React from 'react'
import Markdown from 'react-remarkable'
import { injectIntl } from 'react-intl'

import enAboutMe from '../data/en.about.md'
import itAboutMe from '../data/it.about.md'

export default injectIntl(React.createClass({
    propTypes: {
        intl: React.PropTypes.object.isRequired
    },

    render() {
        let source = this.props.intl.locale === 'it' ? itAboutMe : enAboutMe
        return <Markdown source={source} />
    }
}))
