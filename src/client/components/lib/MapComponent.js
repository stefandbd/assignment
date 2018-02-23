import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
	<div style={{
		position: 'relative', color: 'white', background: 'white',
		height: 10, width: 10, top: -20, left: -30, border: '5px solid red',
		borderRadius: 10
	}}>
		{text}
	</div>
);

class MapComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { coords: ["0", "0"] }
	}
	static defaultProps = {
		center: { lat: 44.4268, lng: 26.1025 },
		zoom: 16,
	};

	componentDidMount() {
		this.intervalIDCoords = setInterval(() => this.tickCoords(), 3000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalIDCoords);
	}
	tickCoords() {
		this.props.logs.reverse().map((log) => this.setState({ coords: log.gps })
		);
	}


	render() {
		return (
			<div style={{ height: '330px', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyC-SNtWvXsNJq0Gw8xBnfFiNeVvSovu-uk',
						language: 'en',
					}}
					center={[Number(this.state.coords[0]), Number(this.state.coords[1])]}
					defaultZoom={this.props.zoom}
				>
					<AnyReactComponent
						lat={Number(this.state.coords[0])}
						lng={Number(this.state.coords[1])}
						text={''}
					/>
				</GoogleMapReact>
			</div>
		);
	}
}

export default MapComponent