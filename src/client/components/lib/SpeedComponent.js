import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";

class SpeedComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			speed: 0,
			distance: 0,
		};
	}
	componentDidMount() {
		this.intervalIDSpeed = setInterval(() => this.tickSpeed(), 1000);
		this.intervalIDDistance = setInterval(() => this.tickDistance(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalIDSpeed);
		clearInterval(this.intervalIDDistance);
	}
	tickSpeed() {
		this.props.logs.reverse().map((log) => this.setState({ speed: log.speed })
		);
	}

	tickDistance() {
		this.props.logs.reverse().map((log) => this.setState({ distance: log.odo })
		);
	}

	render() {
		return (
			<div id="parent-speed">
				<ReactSpeedometer
					fluidWidth={true}
					maxValue={120}
					value={this.state.speed}
					needleColor="steelblue"
					startColor="green"
					segments={10}
					endColor="blue"
					currentValueText="${value} km/h"
				/>
				<div className="App-distance">You traveled </div>
				<div className="App-distance-km">{this.state.distance} km</div>
			</div>
		);
	}
}

export default SpeedComponent