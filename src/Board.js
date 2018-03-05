import React from 'react';
import Tile from './Tile';
import ArrowKeysReact from 'arrow-keys-react';


class Board extends React.Component{
    constructor(){
        super()
        this.state = {
            player: {
                x:1,
                y:1,
            },
            answer: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    
    }

    onSubmit(answer){
        let playerAns = Object.assign({}, this.state.player);
        if (answer){
            playerAns.answer = true;
            this.setState ({
                player: playerAns
            }, ()=>{alert('you got it right!')})

        }
        console.log(answer)
    }


    
    componentDidMount(){
        document.addEventListener('keydown', (event)=>{
            console.log(event)
            
            let newPos = Object.assign({}, this.state.player);
            if(this.state.player.answer){
            if (event.key === 'ArrowRight' && newPos.y < 6){
                newPos.y = newPos.y+1
                this.setState ({
                    player: newPos
                })
            }
            else if(event.key === 'ArrowDown' && newPos.x < 6){
                newPos.x = newPos.x+1
                this.setState ({
                    player: newPos
                })
            }
            else if(event.key === 'ArrowUp' && newPos.x >1){
                newPos.x = newPos.x-1
                this.setState ({
                    player: newPos
                })
            }
            else if(event.key === 'ArrowLeft' && newPos.y >1){
                newPos.y = newPos.y-1
                this.setState({
                    player: newPos
                })
            }
            }})
        })
    }

    
    render(){
        


        let allTiles = this.props.boardArr.map((curr)=>{
            return <Tile position={curr} 
                            currState= {this.state}
                            onSubmit={this.onSubmit} />
        })
        return(
            <div className="container" {...ArrowKeysReact.events} ref={(elem)=>{this.focused=elem}}>
                {allTiles}
            </div>
        )
    }
}

Board.defaultProps = {boardArr: [{x: 1, y: 1,question:'' , answer: 'a'},
    {x: 1, y: 2, question: '', answer:'' },
    {x: 1, y: 3,question: '', answer:''},
    // {x: 1, y: 4,question: , answer:},
    // {x: 1, y: 4,question: , answer:},
    // {x: 1, y: 5},
    // {x: 1, y: 6},
    {x: 2, y: 1,question: '', answer:''},
    {x: 2, y: 2,question: '', answer:''},
    {x: 2, y: 3,question:'' , answer:''},
    // {x: 2, y: 4},
    // {x: 2, y: 5},
    // {x: 2, y: 6},
    {x: 3, y: 1,question: '', answer:''},
    {x: 3, y: 2,question:'' , answer:''},
    {x: 3, y: 3,question: '', answer:''},
    // {x: 3, y: 4},
    // {x: 3, y: 5},
    // {x: 3, y: 6},
    // {x: 4, y: 1},
    // {x: 4, y: 2},
    // {x: 4, y: 3},
    // {x: 4, y: 4},
    // {x: 4, y: 5},
    // {x: 4, y: 6},
    // {x: 5, y: 1},
    // {x: 5, y: 2},
    // {x: 5, y: 3},
    // {x: 5, y: 4},
    // {x: 5, y: 5},
    // {x: 5, y: 6},
    // {x: 6, y: 1},
    // {x: 6, y: 2},
    // {x: 6, y: 3},
    // {x: 6, y: 4},
    // {x: 6, y: 5},
    // {x: 6, y: 6}
]}

export default Board;