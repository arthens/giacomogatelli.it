import React from 'react'
import Markdown from 'react-remarkable';

import aboutme from '../data/about.en.md'

export default React.createClass({
    render() {
        return <Markdown source={aboutme} />
    }
})
