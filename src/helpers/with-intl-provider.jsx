import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'

import itLocaleData from 'react-intl/locale-data/it';
addLocaleData(itLocaleData);

import it from '../data/it.translations'
import en from '../data/en.translations'

export default (Component, locale) => {
    return React.createClass({
        render() {
            let translations = locale == 'it' ? it : en;
            return (
                <IntlProvider
                    locale={translations.locale}
                    messages={translations.messages}>
                    <Component {...this.props}/>
                </IntlProvider>
            )
        }
    });
}

