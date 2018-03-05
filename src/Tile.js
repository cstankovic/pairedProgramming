import React from 'react';
import Player from './Player';

class Tile extends React.Component{
    render(){
        
        let playerTile;
         if (this.props.currState.player.x === this.props.position.x && this.props.currState.player.y === this.props.position.y){
            playerTile = 
            <Player question={this.props.position.question} onSubmit = {this.props.onSubmit} answer={this.props.position.answer}/>
            
            
        }
        return(
            <div className="square">
            {playerTile}
            </div>
        )
    }
}

export default Tile;