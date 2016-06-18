import React from 'react'

export default React.createClass({
    render() {
        return (
            <div className="section section--desktop-only section__social">
                <ul className="social-links">
                    <li className="social-link" title="Github">
                        <a href="https://github.com/arthens">
                            <i className="fa fa-github"></i>
                        </a>
                    </li>

                    <li className="social-link" title="Twitter">
                        <a href="https://twitter.com/arthens">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>

                    <li className="social-link" title="Facebook">
                        <a href="https://facebook.com/giacomo.gatelli">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
})
