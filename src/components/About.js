import React from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

const About = (props) => {
	return <div>
		<Col  md={12} xsHidden smHidden>
			<Image src="res/mountain.jpg" className="header-image"/>
		</Col>
		<Grid>
			<Col 
			xs={12} 
			sm={8} 
			smOffset={2} 
			className="margin-down">
				<Image src="res/victor.jpg" className="about-profile-pic" rounded/>
				<h3>Victor</h3>
				<p>Brown is such a nice color. How do you make a round circle with a square knife? 
				That's your challenge for the day. I spend a lot of time walking around in the woods 
				and talking to trees, and squirrels, and little rabbits and stuff. A beautiful little 
				sunset. Don't hurry. Take your time and enjoy. Everyone wants to enjoy the good parts 
				- but you have to build the framework first.</p>
			</Col>
			<Col xs={12}
			 sm={8}
			 smOffset={2}>
				<Image src="res/nishant.jpg" className="about-profile-pic" rounded/>
				<h3>Nishant</h3>
				<p>Brown is such a nice color. How do you make a round circle with a square knife? 
				That's your challenge for the day. I spend a lot of time walking around in the woods 
				and talking to trees, and squirrels, and little rabbits and stuff. A beautiful little 
				sunset. Don't hurry. Take your time and enjoy. Everyone wants to enjoy the good parts 
				- but you have to build the framework first.</p>
			</Col>
		</Grid>
	</div>
}

export default About;