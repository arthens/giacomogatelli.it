import React from 'react'
import { IntlProvider } from 'react-intl'

import it from '../data/it.translations'
import en from '../data/en.translations'

export default (Component, locale) => {
    return React.createClass({
        render() {
            let messages = locale == 'it' ? it : en;
            return (
                <IntlProvider locale={locale} >
                    <Component locale={locale} {...this.props}/>
                </IntlProvider>
            )
        }
    });
}

//messages={messages.messages}
