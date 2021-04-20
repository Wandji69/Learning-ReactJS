import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import { Link } from 'react-router-dom'
import FeaturedTrainings from '../components/FeaturedTrainings'
import Contact from '../components/contact'
import JsonData from '../data/data.json';


class Home extends Component {
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
          <Banner title="Welcome to IT-Center" subtitle="We offer trianing and Certification exams ">
            <Link to='/trainings' className="btn-primary">
              Our Trainings
						</Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedTrainings />
        <Contact data={this.state.landingPageData.Contact} />
      </>
    )
  }
}
export default Home;