import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let square_arrays = [];
let all_real_square;
class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arr: new Array(1).fill([this.props.y, this.props.x]),
        }
    }
    anjam=(e)=>{
        console.log(e.target.id);
    }
    square_arrays_push=()=>{
        square_arrays.push([this.props.y, this.props.x]);
    }
    render(){
        this.square_arrays_push();
        return (
            <div id={this.state.arr[0]} className='square' onClick={(e)=> this.anjam(e)}>
                {/* {`[${this.props.y} , ${this.props.x}]`} */}
            </div>
        )
    }
}
class Radif extends React.Component {
    render(){
        return (
            <div className='radif'>
                <Square y={this.props.y} x={1}/>
                <Square y={this.props.y} x={2}/>
                <Square y={this.props.y} x={3}/>
                <Square y={this.props.y} x={4}/>
                <Square y={this.props.y} x={5}/>
                <Square y={this.props.y} x={6}/>
                <Square y={this.props.y} x={7}/>
                <Square y={this.props.y} x={8}/>
                <Square y={this.props.y} x={9}/>
                <Square y={this.props.y} x={10}/>
            </div>
        )
    }
}

let random_apple, starting_point_of_snake ;
var __num__counter = 0;
let x = 5 , y= 5;
let last_keycode ;
let speed = 1000;
let score = 0;
class Game extends React.Component {
    new_square = () =>{
        __num__counter++;
        var num = Math.floor(Math.random() * 100);
        var id = square_arrays[num];
        random_apple = all_real_square.find(squ => {
            return squ.id === String(id);
        });
        random_apple.classList.add('now_apple');
    }
    snake = () =>{
        starting_point_of_snake.classList.add('now_snake');
    }
    componentDidMount=()=>{
        all_real_square = Array.from(document.querySelectorAll('.square'));
        this.new_square();

        setInterval(() => {
            if(__num__counter > 0){
                random_apple.classList.remove('now_apple');
            }
            this.new_square();
            setInterval(() => {
                // console.log(random_apple.id , String([y,x]), speed);
                if(random_apple.id === String([y,x])){
                    score++;
                    // console.log(score);
                    if(speed !== 100 ){
                        speed-=10;
                    }
                }
                if(y !== 1 && last_keycode === 38){
                    starting_point_of_snake.classList.remove('now_snake');
                    y--;
                }else if(y !== 10 && last_keycode === 40){
                    starting_point_of_snake.classList.remove('now_snake');
                    y++;
                }else if(x !== 1 && last_keycode === 37){
                    starting_point_of_snake.classList.remove('now_snake');
                    x--;
                }else if(x !== 10 && last_keycode === 39){
                    starting_point_of_snake.classList.remove('now_snake');
                    x++;
                }
                starting_point_of_snake = all_real_square.find(squ => {
                    return squ.id === String([y,x]);
                });
                if(__num__counter > 0){
                    this.snake();
                }
            }, speed);
        }, 5000);
        // setInterval(() => {
        //     console.log(random_apple.id , String([y,x]), speed);
        //     if(random_apple.id === String([y,x])){
        //         score++;
        //         console.log(score);
        //         speed-=50;
        //     }
        //     if(y !== 1 && last_keycode === 38){
        //         starting_point_of_snake.classList.remove('now_snake');
        //         y--;
        //     }else if(y !== 10 && last_keycode === 40){
        //         starting_point_of_snake.classList.remove('now_snake');
        //         y++;
        //     }else if(x !== 1 && last_keycode === 37){
        //         starting_point_of_snake.classList.remove('now_snake');
        //         x--;
        //     }else if(x !== 10 && last_keycode === 39){
        //         starting_point_of_snake.classList.remove('now_snake');
        //         x++;
        //     }
        //     starting_point_of_snake = all_real_square.find(squ => {
        //         return squ.id === String([y,x]);
        //     });
        //     if(__num__counter > 0){
        //         this.snake();
        //     }
        //     // console.log([y,x]);
        // }, speed);
    }
    render() {
        return (
            <div className='all'>
                <Radif y={1} />
                <Radif y={2} />
                <Radif y={3} />
                <Radif y={4} />
                <Radif y={5} />
                <Radif y={6} />
                <Radif y={7} />
                <Radif y={8} />
                <Radif y={9} />
                <Radif y={10} />
            </div>
        )
    }
}

document.body.addEventListener('keyup',(e)=>{
    // |>|>|>|>|>|> Y POSITION <|<|<|<|<|<|<|<|<|
    if( y !== 1 && e.keyCode === 38){
        last_keycode = e.keyCode;
        starting_point_of_snake.classList.remove('now_snake');
        // y--;
    }else if( y !== 10 && e.keyCode === 40){
        last_keycode = e.keyCode;
        starting_point_of_snake.classList.remove('now_snake');
        // y++;
    }else if( x !== 1 && e.keyCode === 37){
        last_keycode = e.keyCode;
        starting_point_of_snake.classList.remove('now_snake');
        // x--;
    }else if( x !== 10 && e.keyCode === 39){
        last_keycode = e.keyCode;
        starting_point_of_snake.classList.remove('now_snake');
        // x++;
    }
    // |>|>|>|>|>|> X POSITION <|<|<|<|<|<|<|<|<|

});

ReactDOM.render(
        <Game />,
    document.getElementById('root')
)