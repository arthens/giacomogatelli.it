import React from 'react'
import { FormattedMessage } from 'react-intl'
import { injectIntl } from 'react-intl'

import Timeline from '../components/timeline'
import Skills from '../components/skills'

import enCv from '../data/en.curriculum'
import itCv from '../data/it.curriculum'

export default injectIntl(React.createClass({
    propTypes: {
        intl: React.PropTypes.object.isRequired
    },

    render() {
        let cv = this.props.intl.locale === 'it' ? itCv : enCv
        return (
            <div>
                <h1><FormattedMessage id="curriculum_title"/></h1>

                <div>
                    <h2><FormattedMessage id="curriculum_work_subtitle"/></h2>
                    <Timeline events={cv.work} />
                </div>

                <div>
                    <h2><FormattedMessage id="curriculum_educations_subtitle"/></h2>
                    <Timeline events={cv.education} />
                </div>

                <div>
                    <h2><FormattedMessage id="curriculum_skills_title"/></h2>
                    <Skills skills={cv.skills} />
                </div>
            </div>
        )
    }
}))
