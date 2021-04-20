import React, { Component } from 'react'
import About from '../components/about'
import Team from '../components/Team'
import JsonData from '../data/data.json';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export default class AboutPage extends Component {
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
                    <Banner title="About IT-Center" subtitle=" Get to know us ">
                        <Link to='/trainings' className="btn-primary">
                            Find Our Trainings here
						</Link>
                    </Banner>
                </Hero>
                <About data={this.state.landingPageData.About} />
                <Team data={this.state.landingPageData.Team} />
            </>
        )
    }
}
