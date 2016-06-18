import Layout from 'layout';
import About from 'pages/about';
import Contact from 'pages/contact';
import Curriculum from 'pages/curriculum';
import NotFound from 'pages/not-found';
import withIntlProvider from 'helpers/with-intl-provider';

export default {
    path: '/',
    component: Layout,
    indexRoute: { component: About },
    childRoutes: [
        {
            path: 'curriculum.html',
            component: Curriculum
        },
        {
            path: 'contact.html',
            component: Contact
        },
        {
            path: '404.html',
            component: NotFound
        },
        {
            path: '*',
            component: NotFound
        }
    ]
}
