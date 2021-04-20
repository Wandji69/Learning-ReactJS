import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import RoomContainer from '../components/RoomContainer'

const Trainings = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="All Trainings">
          <Link to="/" className="btn-primary">
            return home
            </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}

export default Trainings;