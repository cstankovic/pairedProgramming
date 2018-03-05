import React, {Component} from 'react';


class Player extends Component{
    constructor () {
        super()
        this.state ={
            currSelection: 'a'
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }


    handleChange(event){
        this.setState({currSelection: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.currSelection === this.props.answer)
    }

    render(){
        
        return(
            <div className="player">
                <p>{this.props.question}</p>
                <form onSubmit={this.handleSubmit}>
                   <select value={this.state.value} onChange={this.handleChange}>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    </select>
                    <button type="submit" value="submit">Submit</button>
                </form>

            </div>
        )
    }
}


export default Player;