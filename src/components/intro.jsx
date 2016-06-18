import React from 'react'

export default React.createClass({
    render() {
        return (
            <div className="section section__me">
                <img
                    className="me-avatar"
                    src="/images/giacomo-330x330.jpg"
                    title="Yep, that's me"
                    alt="Giacomo Gatelli"
                    width="120"
                    height="120"
                />
                    <a href="http://giacomogatelli.it">
                        <h2 className="me-name">Giacomo Gatelli</h2>
                    </a>
                    <p className="me-intro">
                        Software engineer, technology enthusiast, gamer, avid reader.
                    </p>
            </div>
        )
    }
})
