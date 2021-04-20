import React, { Component } from 'react'
import Title from './Title'
import { FaDesktop, FaNetworkWired, FaBook, FaLaptopCode } from 'react-icons/fa'

export default class Services extends Component {
	state = {
		services: [

			{
				icon: <FaDesktop />,
				title: "Computer Repair & Support",
				info: "With our team of computer hardware experts we got you all covered. Form hardware maintainace to Software Maintainace"
			},
			{
				icon: <FaNetworkWired />,
				title: "NetWorking (LAN/WAN)",
				info: "Our networking team of experts can help you setup your network services be it for small offices or for your entire company."
			},
			{
				icon: <FaBook />,
				title: "Documentary",
				info: "We offer documentation in all forms from editing, design, and print. We have train personels with expertise skills in documentary."
			},
			{
				icon: <FaLaptopCode />,
				title: "Web Design and Building",
				info: "We offer proffesional website design and build. We also have courses to train students who want to learn to build website."
			}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return <article key={index} className="service">
							<span> {item.icon} </span>
							<h6> {item.title} </h6>
							<p>{item.info}</p>
						</article>
					})}
				</div>
			</section>
		);
	}
}
