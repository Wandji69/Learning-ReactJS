import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Room from './Training'
import Title from './Title'

export default class FeaturedRooms extends Component {

	/*this is the very very first step of using the context API,
	 * after seting the context file and objectss
	 */
	static contextType = RoomContext;

	render() {
		/* Using object Distructing, 
		* It important you pass the name of the Whole context, 
		* and no the consumer.
		*/
		let { loading, featuredRooms: rooms } = this.context;

		rooms = rooms.map(room => {
			return <Room key={room.id} room={room} />
		})

		return (
			<section className="featured-rooms">
				<Title title="Trainings" />
				<div className="featured-rooms-center">
					{loading ? <Loading /> : rooms}
				</div>

			</section>
		)
	}
}
