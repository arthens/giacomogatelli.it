import React from 'react'

import Intro from 'components/intro'
import SiteNavigation from 'components/site-navigation'
import SocialLinks from 'components/social-links'

export default React.createClass({
    render() {
        return (
            <div className="page-container full-height">
                <div className="page-section page-section__navigation page-section__navigation--main">
                    <Intro/>
                    <SiteNavigation/>
                    <SocialLinks/>
                </div>
                <div className="page-section page-section__content">
                    {this.props.children}
                </div>

                <div className="page-section page-section__navigation page-section__navigation--secondary">
                    <SiteNavigation/>
                    <SocialLinks/>
                </div>
            </div>
        )
    }
})
