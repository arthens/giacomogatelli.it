import React from 'react'

import Timeline from '../components/timeline'
import Skills from '../components/skills'

import cv from '../data/curriculum.en'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Curriculum</h1>

                <p>{this.props.intro}</p>
                
                <div>
                    <h2>Work experience</h2>
                    <Timeline events={cv.work} />
                </div>

                <div>
                    <h2>Education</h2>
                    <Timeline events={cv.education} />
                </div>

                <div>
                    <h2>Skills</h2>
                    <Skills skills={cv.skills} />
                </div>
            </div>
        )
    }
})
