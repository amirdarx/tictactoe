import React from 'react';
import ReactDOM from 'react-dom';
import './index_game.css';

class PlayersWin extends React.Component{
    render(){
        return(
            <div className="PlayersWin">
                <div className="player__grid">
                    <div  className="vasat Win_border">
                        <p>player 1 </p>
                    </div>   
                    <div className="vasat Win_border bala_vasat">
                        <p>X {this.props.player_1} </p>
                    </div>   
                    <div className="vasat Win_border bala_vasat">
                        <p>{this.props.player_2} O</p>
                    </div>   
                    <div className="vasat Win_border">
                        <p>player 2 </p>
                    </div> 
                </div>  
            </div>
        )
    }
}

class History extends React.Component{
    render(){
        return(
            <div className="History">
                <div>
                    <div className="vasat __history">
                        <p>H i s t o r y</p>
                    </div>  
                    <div className="dota_history">
                        <div className="vasat player__turn">
                            <p>player</p>
                        </div>  
                        <div className="vasat __clicked">
                            <p>player clicked</p>
                        </div> 
                        <div className="left vasate_lr">
                            <p>{this.props.player ? "player 1" : "player 2"}</p>
                        </div>  
                        <div className="right vasate_lr">
                            <p>{this.props.clicked}</p>
                        </div> 
                    </div> 
                </div>  
            </div>
        )
    }
}

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            last_position_clicked : 0,
            turn : true,
            // ==> players__win <==
            player_1_wins: 0,
            player_2_wins: 0,
            // ==> player 1 <==
            $_1_position_0_0: false,
            $_1_position_0_1: false,
            $_1_position_0_2: false,
            $_1_position_1_0: false,
            $_1_position_1_1: false,
            $_1_position_1_2: false,
            $_1_position_2_0: false,
            $_1_position_2_1: false,
            $_1_position_2_2: false,
            // ==> player 2 <==
            $_2_position_0_0: false,
            $_2_position_0_1: false,
            $_2_position_0_2: false,
            $_2_position_1_0: false,
            $_2_position_1_1: false,
            $_2_position_1_2: false,
            $_2_position_2_0: false,
            $_2_position_2_1: false,
            $_2_position_2_2: false,
            // ==> position <==
            position_0_0: '-',
            position_0_1: '-',
            position_0_2: '-',
            position_1_0: '-',
            position_1_1: '-',
            position_1_2: '-',
            position_2_0: '-',
            position_2_1: '-',
            position_2_2: '-'
        }
    }
    loging =(...event)=>{
        if(this.state.turn){
            this.setState({
                [`$_1_${event[1]}`]: true,
                [event[1]]: "X"
            });
        }else{
            this.setState({
                [`$_2_${event[1]}`]: true,
                [event[1]]: "O"
            });
        }
        this.setState({last_position_clicked: event[0] , turn: !this.state.turn});
    }

    // ------------------------------ R E S E T _ _ G A M E _ _ E Q U A L L ------------------------------------------- 
    reset_game_no_one_win = () => {
        if(this.state.position_0_0 !== '-' && this.state.position_0_1 !== '-' && this.state.position_0_2 !== '-' &&
            this.state.position_1_0 !== '-' && this.state.position_1_1 !== '-' && this.state.position_1_2 !== '-' &&
            this.state.position_2_0 !== '-' && this.state.position_2_1 !== '-' && this.state.position_2_2 !== '-' 
        ){
            console.log('equal so reseting game');
            this.reset_game();
            setTimeout(() => {
                console.clear();
            }, 2000);
        }
    }
    // ------------------------------------- R E S E T _ _ G A M E ------------------------------------------- 
    reset_game = (...event) => {
        if(event[1] === "player_1_w"){
            this.setState({player_1_wins: `${event[0]}`});
        }else if(event[1] === "player_2_w"){
            this.setState({player_2_wins: `${event[0]}`});
        }
        this.setState({
            last_position_clicked : 0,
            turn : true,
            // ==> player 1 <==
            $_1_position_0_0: false,
            $_1_position_0_1: false,
            $_1_position_0_2: false,
            $_1_position_1_0: false,
            $_1_position_1_1: false,
            $_1_position_1_2: false,
            $_1_position_2_0: false,
            $_1_position_2_1: false,
            $_1_position_2_2: false,
            // ==> player 2 <==
            $_2_position_0_0: false,
            $_2_position_0_1: false,
            $_2_position_0_2: false,
            $_2_position_1_0: false,
            $_2_position_1_1: false,
            $_2_position_1_2: false,
            $_2_position_2_0: false,
            $_2_position_2_1: false,
            $_2_position_2_2: false,
            // ==> position <==
            position_0_0: '-',
            position_0_1: '-',
            position_0_2: '-',
            position_1_0: '-',
            position_1_1: '-',
            position_1_2: '-',
            position_2_0: '-',
            position_2_1: '-',
            position_2_2: '-'
        });
    }
    // ------------------------------------- B A R E S _ _ I S H A R T ------------------------------------------- 
    baeresi_win = ()=>{
        var player_1_w = this.state.player_1_wins;
        var player_2_w = this.state.player_2_wins;
        if((this.state.$_1_position_0_0 && this.state.$_1_position_0_1 && this.state.$_1_position_0_2) ||
            (this.state.$_1_position_1_0 && this.state.$_1_position_1_1 && this.state.$_1_position_1_2) || 
            (this.state.$_1_position_2_0 && this.state.$_1_position_2_1 && this.state.$_1_position_2_2) ||
            (this.state.$_1_position_0_0 && this.state.$_1_position_1_0 && this.state.$_1_position_2_0) ||
            (this.state.$_1_position_0_1 && this.state.$_1_position_1_1 && this.state.$_1_position_2_1) || 
            (this.state.$_1_position_0_2 && this.state.$_1_position_1_2 && this.state.$_1_position_2_2) ||
            (this.state.$_1_position_0_0 && this.state.$_1_position_1_1 && this.state.$_1_position_2_2) ||
            (this.state.$_1_position_0_2 && this.state.$_1_position_1_1 && this.state.$_1_position_2_0) ){
                console.log('player 1 win');
                player_1_w++;
                this.reset_game(player_1_w, "player_1_w");
                setTimeout(() => {
                    console.clear();
                }, 1000);
        }else if((this.state.$_2_position_0_0 && this.state.$_2_position_0_1 && this.state.$_2_position_0_2) ||
            (this.state.$_2_position_1_0 && this.state.$_2_position_1_1 && this.state.$_2_position_1_2) || 
            (this.state.$_2_position_2_0 && this.state.$_2_position_2_1 && this.state.$_2_position_2_2) ||
            (this.state.$_2_position_0_0 && this.state.$_2_position_1_0 && this.state.$_2_position_2_0) ||
            (this.state.$_2_position_0_1 && this.state.$_2_position_1_1 && this.state.$_2_position_2_1) || 
            (this.state.$_2_position_0_2 && this.state.$_2_position_1_2 && this.state.$_2_position_2_2) ||
            (this.state.$_2_position_0_0 && this.state.$_2_position_1_1 && this.state.$_2_position_2_2) ||
            (this.state.$_2_position_0_2 && this.state.$_2_position_1_1 && this.state.$_2_position_2_0)){
                console.log('player 2 win');
                player_2_w++;
                this.reset_game(player_2_w, "player_2_w");
                setTimeout(() => {
                    console.clear();
                }, 1000);
        }else{
            this.reset_game_no_one_win();
        }
        console.log(this.state.player_1_wins);
        console.log(this.state.player_2_wins);
    }
    // ------------------------------------- R E N D E R I N G -------------------------------------------
    render(){
        this.baeresi_win();
        return(
            <div className="container">
                <PlayersWin player_1={this.state.player_1_wins} player_2={this.state.player_2_wins}/>
                <History clicked={this.state.last_position_clicked} player={this.state.turn} />
                <div className="Game">
                    <div className="game__grid">
                        <div className="position" onClick={(e)=> {return this.state.position_0_0 ==='-' ? this.loging([0,0], "position_0_0") : ''} } >
                            <p>{this.state.position_0_0}</p>
                        </div>
                        <div className="position" onClick={(e)=> {return this.state.position_0_1 ==='-' ? this.loging([0,1], "position_0_1") : ''} }>
                            <p>{this.state.position_0_1}</p>
                        </div>
                        <div className="position" onClick={(e)=> {return this.state.position_0_2 ==='-' ? this.loging([0,2], "position_0_2") : ''} }  >
                            <p>{this.state.position_0_2}</p> 
                        </div>
                        <div className="position" onClick={(e)=> {return this.state.position_1_0 ==='-' ? this.loging([1,0], "position_1_0") : ''} }  >
                            <p>{this.state.position_1_0}</p>
                        </div>
                        <div className="position" onClick={(e)=> {return this.state.position_1_1 ==='-' ? this.loging([1,1], "position_1_1") : ''} }  >
                            <p>{this.state.position_1_1}</p>
                        </div>
                        <div className="position" onClick={(e)=> {return this.state.position_1_2 ==='-' ? this.loging([1,2], "position_1_2") : ''} }  >
                            <p>{this.state.position_1_2}</p>
                        </div>
                        <div className="position" onClick={(e)=> {return this.state.position_2_0 ==='-' ? this.loging([2,0], "position_2_0") : ''} }  >
                            <p>{this.state.position_2_0}</p>
                        </div>
                        <div className="position" onClick={(e)=> {return this.state.position_2_1 ==='-' ? this.loging([2,1], "position_2_1") : ''} }  >
                            <p>{this.state.position_2_1}</p>
                        </div>
                        <div className="position" onClick={(e)=> {return this.state.position_2_2 ==='-' ? this.loging([2,2], "position_2_2") : ''} }  >
                            <p>{this.state.position_2_2}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div className="dore_all">
        <div className="all">
            <Game />
        </div>
    </div>,
    document.getElementById('root')
);
