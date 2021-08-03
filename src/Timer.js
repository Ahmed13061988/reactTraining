import React from 'react'; 

export default class Timer extends React.Component {
    constructor(props){
        super(props); 
        this.state ={
            secondsElapsed: 0
        }
    }

    start =() => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed +1
        })
    }

    handleClick = (e) => {
        this.interval = setInterval(this.start, 1000)
    }

    render(){
        return(
            <div>
                <button onClick ={this.handleClick}>Start Timer</button>
                <Resultant new = {this.state.secondsElapsed}/>
            </div>
        )
    }
}

function Resultant(data){
    return(
        <h2> Second Elapsed: {data.new}</h2>
    )
}