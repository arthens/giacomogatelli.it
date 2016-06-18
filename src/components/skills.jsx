import React from 'react'

export default React.createClass({
    render() {
        return (
            <div className="skills">
                {this.props.skills.map(function (skill) {
                    return <div key={skill} className="skills__skill">{skill}</div>;
                })}
            </div>
        );
    }
})
