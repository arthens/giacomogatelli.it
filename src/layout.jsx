import React from 'react'

import Intro from 'components/intro'
import Navigation from 'components/navigation'
import SocialLinks from 'components/social-links'
import LanguageSwitcher from 'components/language-switcher'

export default React.createClass({
    render() {
        return (
            <div className="page-container full-height">
                <div className="page-section page-section__navigation page-section__navigation--main">
                    <Intro/>
                    <Navigation/>
                    <SocialLinks/>
                    <LanguageSwitcher/>
                </div>
                <div className="page-section page-section__content">
                    {this.props.children}
                </div>

                <div className="page-section page-section__navigation page-section__navigation--secondary">
                    <Navigation/>
                    <SocialLinks/>
                    <LanguageSwitcher/>
                </div>
            </div>
        )
    }
})
