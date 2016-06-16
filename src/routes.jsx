import React from 'react'
import { Link } from 'react-router'


const Layout = React.createClass({
    render() {
        return <div>
            <Link to="/">About</Link>
            <Link to="/curriculum.html">Curriculum</Link>
            <Link to="/contact.html">Contact</Link>
            {this.props.children}
        </div>
    }
})

const About = React.createClass({
    render() {
        return <div>About</div>
    }
})

const Contact = React.createClass({
    render() {
        return <div>Contact</div>
    }
})
const Curriculum = React.createClass({
    render() {
        return <div>Curriculum</div>
    }
})


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
