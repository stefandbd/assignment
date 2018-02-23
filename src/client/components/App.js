import React, { Component } from 'react'

import Header from './lib/Header.js'
import LogoComponent from './lib/LogoComponent.js'
import LiveDataLogComponent from './lib/LiveDataLogComponent.js'
import SpeedComponent from './lib/SpeedComponent.js'
import EnergyComponent from './lib/EnergyComponent.js'
import MapComponent from './lib/MapComponent.js'



class App extends Component {
	state = {
		logs: []
	}

	componentDidMount() {
		// Save data in state on data event
		this.props.socket.on('state', (state) => {
			this.setState({ logs: this.state.logs.concat([state]) })
		})
	}

	render() {
		return (
			<div>
				<section>
					<article id='app-container'>
						<Header />
						<LogoComponent />
					</article>
					<div id="log-container-widgets">
						<article id='log-container'>
						<div className="container-title"><h3>Speedometer</h3></div>						
							<LiveDataLogComponent logs={this.state.logs} />
						</article>
						<article id='log-container-2'>
						<div>
							<SpeedComponent logs={this.state.logs} />
						</div>
						</article>
					</div>
				</section>

				<section>
					<article id='energy-container'>
						<div className="container-title"><h3>Energy</h3></div>
							<div>
								<EnergyComponent logs={this.state.logs} />
							</div>
					</article>
					<article id='map-container'>
					<div className="container-title"><h3>Map Route</h3></div>
						<div>
							<MapComponent logs={this.state.logs} />
						</div>
					</article>
				</section>
			</div>
		)
	}
}

export default App
