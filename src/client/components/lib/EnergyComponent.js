import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesCurve, SparklinesNormalBand, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

class EnergyComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date().toLocaleString(),
			energy: [],
			width: 0, height: 0,
			data: []
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.tickEnergy = this.tickEnergy.bind(this);
	}

	componentDidMount() {
		this.intervalIDEnergy = setInterval(() => this.tickEnergy(), 1000);
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		clearInterval(this.intervalIDEnergy);
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	tickEnergy() {
		this.props.logs.reverse().map((log) =>
			this.setState({ energy: this.state.energy.concat([log.energy]) })
		);
	}

	render() {
		return (
			<Sparklines data={this.state.energy} limit={55} width={300} height={150}>
				<SparklinesBars style={{ fill: "#5f90b8", fillOpacity: ".25" }} />
				<SparklinesLine style={{ stroke: "#5f90b8", fill: "none" }} />
				<SparklinesSpots />
			</Sparklines>

		);
	}
}

export default EnergyComponent