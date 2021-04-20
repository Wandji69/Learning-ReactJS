import React, { Component } from 'react'
import Contact from '../components/contact'
import Testimonials from '../components/testimonials'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import JsonData from '../data/data.json'
import Hero from '../components/Hero'

export default class Contactpage extends Component {
    state = {
        landingPageData: {},
    }
    getlandingPageData() {
        this.setState({ landingPageData: JsonData })
    }

    componentDidMount() {
        this.getlandingPageData();
    }
    render() {
        return (
            <>
                <Hero>
                    <Banner title="Contact the IT-Center" subtitle=" Get in touch now ">
                        <Link to='/trainings' className="btn-primary">
                            Find Our Trainings here
						</Link>
                    </Banner>
                </Hero>
                <Testimonials data={this.state.landingPageData.Testimonials} />
                <Contact data={this.state.landingPageData.Contact} />

            </>
        )
    }
}
