import React, {Component} from 'react';
import '../App.css';

class TrafficLight extends Component {
    constructor(props) {
        super(props);
        let a = this.state.time;
        setInterval(() => {
            this.setState({
                time: a--,
                show: false,
            })
            // if(a < 0) {
            //     a = 15
            // }
        }, 500)
    }
    state = {
        time: 15,
        show: true,
    }
    render() {
        return (
            <div className={"block"}>
                <div className={"item red"}/>
                <div className={"item yellow"}><span className={this.state.time < 0 ? 'active' : 'span'}>{this.state.time}</span></div>
                <div className={"item green"}/>
            </div>
        );
    }
}

export default TrafficLight;