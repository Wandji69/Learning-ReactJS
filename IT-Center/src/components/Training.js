import React from 'react'
import { Link } from 'react-router-dom';
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Training({ room }) {

	//Distructuring using ES6
	const { name, slug, images, price } = room;
	return (
		<article className="room">
			<div className="img-container">
				<img src={images[0] || defaultImg} alt="single room" />
				<div className="price-top">
					<h6>${price}</h6>
					<p>Anually</p>
				</div>
				<Link to={`/trainings/${slug}`} className="btn-primary room-link">
					Details
				</Link>
			</div>
			<p className="room-info">{name}</p>
		</article>
	);
}
Training.propTypes = {
	room: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
		price: PropTypes.number.isRequired
	})
}


