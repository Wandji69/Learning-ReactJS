import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
// import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { RoomContext } from '../context'
import { Link } from 'react-router-dom';
import StyledHero from '../components/StyledHero';

class SingleTrain extends Component {

  // Accessing the URL parameter (slug) pass in Rooms.js 
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug, defaultBcg
    };
  }

  static contextType = RoomContext;
  // componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/trainings" className="btn-primary">
            Back to Trainings
				</Link>
        </div>
      );
    }
    const {
      name,
      description,
      duration,
      price,
      struct,
      images
    } = room;
    const [...defaultImg] = images;
    console.log(defaultImg);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to='/trainings' className="btn-primary">
              back to Trainings
					</Link>
          </Banner>
        </StyledHero>
        <section className="single-room">

          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>duration : {duration} </h6>
              {/* <h6>
                max capacity : {
                  capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6> {pets ? "pets allowed" : "no pets allowee"} </h6>
              <h6> {breakfast && "free breakfast included"} </h6> */}
              <h6>Modules
              <ol>
                  {struct.map((item, index) => (
                    <li key={index}>-{item}</li>
                  ))}
                </ol>
              </h6>
            </article>
          </div>
          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
        </section>
        {/* <section className="room-extras">
          <h6>Benefits</h6>
          <ol className="extras">
            {benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </section> */}
      </>
    )
  }
}

export default SingleTrain;
