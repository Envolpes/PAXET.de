import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from "react-router-dom";

import './Home.css';

export default class Footer extends React.Component {
	render(){
		return (
			<div className="Footer">
				<Container className= "grid">
					<Row className="Footer">
							<Col> <a href="mailto:hey@paxet.de" className="NavLink"> Mailen</a></Col>
							<Col> <NavLink to="/contact" className="NavLink"> Datenschutzhinweis</NavLink></Col>
					</Row>
				</Container>
			</div>
	  );
	}
}
