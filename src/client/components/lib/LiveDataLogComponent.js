import React, {
	Component
} from 'react';

class LiveDataLogComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date().toLocaleString(),
			date: new Date().toLocaleString(),
		};
	}
	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
		this.intervalIDDate = setInterval(() => this.tickDate(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
		clearInterval(this.intervalIDDate);
	}
	timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp);
		var hour = a.getHours();
		var min = a.getMinutes();
		var sec = a.getSeconds();
		var time = hour + ':' + min + ':' + sec;
		return time;
	}

	timeConverterDate(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp);
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var time = date + ' ' + month + ' ' + year;
		return time;
	}
	tick() {
		this.props.logs.reverse().map((log) => this.setState({
			time: this.timeConverter(log.time)
		}));
	}
	tickDate() {
		this.props.logs.reverse().map((log) => this.setState({
			date: this.timeConverterDate(log.time)
		}));
	}

	render() {
		return ( 
		<div>
			<div className = "App-clockDate" >
				<p className = "App-clock"> {this.state.time} </p>
				<p className = "App-date" > {this.state.date} </p> 
			</div> 
		</div>
		);
	}
}

export default LiveDataLogComponent