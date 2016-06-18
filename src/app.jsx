import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { render } from 'react-dom'
import { Router, RouterContext, match, browserHistory } from 'react-router'
import { createMemoryHistory } from 'history'

import routes from 'routes'
import template from 'template'

if (typeof document !== 'undefined') {
    render((
        <Router history={browserHistory} routes={routes}/>
    ), document.getElementById('root'))
}

export default (locals, callback) => {
    const history = createMemoryHistory();
    const location = history.createLocation(locals.path)

    match({ routes, location}, (error, redirectLocation, renderProps) => {
        const rendered = ReactDOMServer.renderToString(<RouterContext {...renderProps} />)
        callback(null, template(rendered, {
            pageTitle: 'Giacomo Gatelli',
            pageDescription: 'Giacomo Gatelli - Software engineer, technology enthusiast, gamer, avid reader',
            lang: 'en'
        }));
    })
}
