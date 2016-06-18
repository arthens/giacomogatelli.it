import Layout from 'pages/layout';
import About from 'pages/about';
import Contact from 'pages/contact';
import Curriculum from 'pages/curriculum';

export default {
    path: '/',
    component: Layout,
    indexRoute: { component: About },
    childRoutes: [
        {
            path: 'index.html',
            component: About
        },
        {
            path: 'curriculum.html',
            component: Curriculum
        },
        {
            path: 'contact.html',
            component: Contact
        }
    ]
}
