import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { IntlProvider, addLocaleData } from 'react-intl'
import { render } from 'react-dom'
import { Router, RouterContext, match, browserHistory } from 'react-router'
import { createMemoryHistory } from 'history'

import routes from 'routes'
import template from './template'

import en from 'data/en.translations'
// addLocaleData(en);

if (typeof document !== 'undefined') {
    render((
        <IntlProvider locale="en" messages={en.messages}><Router history={browserHistory} routes={routes}/></IntlProvider>
    ), document.getElementById('root'))
}

export default (locals, callback) => {
    const history = createMemoryHistory();
    const location = history.createLocation(locals.path)

    match({ routes, location}, (error, redirectLocation, renderProps) => {
        const rendered = ReactDOMServer.renderToString(<IntlProvider locale="en" messages={en.messages}><RouterContext {...renderProps} /></IntlProvider>)
        callback(null, template(rendered, {
            pageTitle: 'Giacomo Gatelli',
            pageDescription: 'Giacomo Gatelli - Software engineer, technology enthusiast, gamer, avid reader',
            lang: 'en'
        }));
    })
}
