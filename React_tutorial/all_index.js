
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index_game.css';



// class PlayersWin extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={

//         }
//     }
//     render(){
//         return(
//             <div className="PlayersWin">
//                 <div className="player__grid">
//                     <div  className="vasat Win_border">
//                         <p>player 1</p>
//                     </div>   
//                     <div className="vasat Win_border">
//                         <p>0</p>
//                     </div>   
//                     <div className="vasat Win_border">
//                         <p>0</p>
//                     </div>   
//                     <div className="vasat Win_border">
//                         <p>player 2</p>
//                     </div> 
//                 </div>  
//             </div>
//         )
//     }
// }
// class History extends React.Component{
//     render(){
//         return(
//             <div className="History">
//                 <div>
//                     <div className="vasat __history">
//                         <p>H i s t o r y</p>
//                     </div>  
//                     <div className="dota_history">
//                         <div className="vasat player__turn">
//                             <p>player</p>
//                         </div>  
//                         <div className="vasat __clicked">
//                             <p>player clicked</p>
//                         </div> 
//                         <div className="left vasate_lr">
//                             <p>1</p>
//                         </div>  
//                         <div className="right vasate_lr">
//                             <p>[0 , 0]</p>
//                         </div> 
//                     </div> 
//                 </div>  
//             </div>
//         )
//     }
// }

// class Game extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             last_position_clicked : 0,
//             turn : true,
//             // ==> players__win <==
//             player_1_wins: 0,
//             player_2_wins: 0,
//             // ==> player 1 <==
//             $_1_position_0_0: false,
//             $_1_position_0_1: false,
//             $_1_position_0_2: false,
//             $_1_position_1_0: false,
//             $_1_position_1_1: false,
//             $_1_position_1_2: false,
//             $_1_position_2_0: false,
//             $_1_position_2_1: false,
//             $_1_position_2_2: false,
//             // ==> player 2 <==
//             $_2_position_0_0: false,
//             $_2_position_0_1: false,
//             $_2_position_0_2: false,
//             $_2_position_1_0: false,
//             $_2_position_1_1: false,
//             $_2_position_1_2: false,
//             $_2_position_2_0: false,
//             $_2_position_2_1: false,
//             $_2_position_2_2: false,
//             // ==> position <==
//             position_0_0: '-',
//             position_0_1: '-',
//             position_0_2: '-',
//             position_1_0: '-',
//             position_1_1: '-',
//             position_1_2: '-',
//             position_2_0: '-',
//             position_2_1: '-',
//             position_2_2: '-'
//         }
//     }
//     loging =(...event)=>{
//         if(this.state.turn){
//             this.setState({
//                 [`$_1_${event[1]}`]: true,
//                 [event[1]]: "X"
//             });
//         }else{
//             this.setState({
//                 [`$_2_${event[1]}`]: true,
//                 [event[1]]: "O"
//             });
//         }
//         this.setState({last_position_clicked: event[0], turn: !this.state.turn});
//     }

//     // ------------------------------ R E S E T _ _ G A M E _ _ E Q U A L L ------------------------------------------- 
//     reset_game_no_one_win = () => {
//         if(this.state.position_0_0 !== '-' && this.state.position_0_1 !== '-' && this.state.position_0_2 !== '-' &&
//             this.state.position_1_0 !== '-' && this.state.position_1_1 !== '-' && this.state.position_1_2 !== '-' &&
//             this.state.position_2_0 !== '-' && this.state.position_2_1 !== '-' && this.state.position_2_2 !== '-' 
//         ){
//             console.log('equal so reseting game');
//             setTimeout(() => {
//                 this.reset_game();
//                 console.clear();
//             }, 2000);
//         }
//     }
//     // ------------------------------------- R E S E T _ _ G A M E ------------------------------------------- 
//     reset_game = (props) => {
//         this.setState({
//             last_position_clicked : 0,
//             turn : true,
//             player_1_wins: `${props}`,
//             player_2_wins: `${props}`,
//             // ==> player 1 <==
//             $_1_position_0_0: false,
//             $_1_position_0_1: false,
//             $_1_position_0_2: false,
//             $_1_position_1_0: false,
//             $_1_position_1_1: false,
//             $_1_position_1_2: false,
//             $_1_position_2_0: false,
//             $_1_position_2_1: false,
//             $_1_position_2_2: false,
//             // ==> player 2 <==
//             $_2_position_0_0: false,
//             $_2_position_0_1: false,
//             $_2_position_0_2: false,
//             $_2_position_1_0: false,
//             $_2_position_1_1: false,
//             $_2_position_1_2: false,
//             $_2_position_2_0: false,
//             $_2_position_2_1: false,
//             $_2_position_2_2: false,
//             // ==> position <==
//             position_0_0: '-',
//             position_0_1: '-',
//             position_0_2: '-',
//             position_1_0: '-',
//             position_1_1: '-',
//             position_1_2: '-',
//             position_2_0: '-',
//             position_2_1: '-',
//             position_2_2: '-'
//         });
//     }
//     // ------------------------------------- B A R E S _ _ I S H A R T ------------------------------------------- 
//     baeresi_win = ()=>{
//         var player_1_w = this.state.player_1_wins;
//         var player_2_w = this.state.player_2_wins;
//         // console.log(this.state.turn ? "player 1": "player 2");
//         if((this.state.$_1_position_0_0 && this.state.$_1_position_0_1 && this.state.$_1_position_0_2) ||
//             (this.state.$_1_position_1_0 && this.state.$_1_position_1_1 && this.state.$_1_position_1_2) || 
//             (this.state.$_1_position_2_0 && this.state.$_1_position_2_1 && this.state.$_1_position_2_2) ||
//             (this.state.$_1_position_0_0 && this.state.$_1_position_1_0 && this.state.$_1_position_2_0) ||
//             (this.state.$_1_position_0_1 && this.state.$_1_position_1_1 && this.state.$_1_position_2_1) || 
//             (this.state.$_1_position_0_2 && this.state.$_1_position_1_2 && this.state.$_1_position_2_2) ||
//             (this.state.$_1_position_0_0 && this.state.$_1_position_1_1 && this.state.$_1_position_2_2) ||
//             (this.state.$_1_position_0_2 && this.state.$_1_position_1_1 && this.state.$_1_position_2_0) ){
//                 console.log('player 1 win');
//                 player_1_w++;
//                 setTimeout(() => {
//                     this.reset_game(player_1_w);
//                     console.clear();
//                 }, 2000);
//         }else if((this.state.$_2_position_0_0 && this.state.$_2_position_0_1 && this.state.$_2_position_0_2) ||
//             (this.state.$_2_position_1_0 && this.state.$_2_position_1_1 && this.state.$_2_position_1_2) || 
//             (this.state.$_2_position_2_0 && this.state.$_2_position_2_1 && this.state.$_2_position_2_2) ||
//             (this.state.$_2_position_0_0 && this.state.$_2_position_1_0 && this.state.$_2_position_2_0) ||
//             (this.state.$_2_position_0_1 && this.state.$_2_position_1_1 && this.state.$_2_position_2_1) || 
//             (this.state.$_2_position_0_2 && this.state.$_2_position_1_2 && this.state.$_2_position_2_2) ||
//             (this.state.$_2_position_0_0 && this.state.$_2_position_1_1 && this.state.$_2_position_2_2) ||
//             (this.state.$_2_position_0_2 && this.state.$_2_position_1_1 && this.state.$_2_position_2_0)){
//                 console.log('player 2 win');
//                 player_2_w++;
//                 setTimeout(() => {
//                     this.reset_game(player_2_w);
//                     console.clear();
//                 }, 2000);
//         }else{
//             this.reset_game_no_one_win();
//         }
//     }
//     // ------------------------------------- R E N D E R I N G -------------------------------------------
//     render(){
//         this.baeresi_win();
//         return(
//             <div className="container">
//                 <PlayersWin />
//                 <History />
//                 <div className="Game">
//                     <div className="game__grid">
//                         <div className="position" onClick={(e)=> {return this.state.position_0_0 ==='-' ? this.loging([0,0], "position_0_0") : ''} }>
//                             <p>{this.state.position_0_0}</p>
//                         </div>
//                         <div className="position" onClick={(e)=> {return this.state.position_0_1 ==='-' ? this.loging([0,1], "position_0_1") : ''} }>
//                             <p>{this.state.position_0_1}</p>
//                         </div>
//                         <div className="position" onClick={(e)=> {return this.state.position_0_2 ==='-' ? this.loging([0,2], "position_0_2") : ''} }>
//                             <p>{this.state.position_0_2}</p>
//                         </div>
//                         <div className="position" onClick={(e)=> {return this.state.position_1_0 ==='-' ? this.loging([1,0], "position_1_0") : ''} }>
//                             <p>{this.state.position_1_0}</p>
//                         </div>
//                         <div className="position" onClick={(e)=> {return this.state.position_1_1 ==='-' ? this.loging([1,1], "position_1_1") : ''} }>
//                             <p>{this.state.position_1_1}</p>
//                         </div>
//                         <div className="position" onClick={(e)=> {return this.state.position_1_2 ==='-' ? this.loging([1,2], "position_1_2") : ''} }>
//                             <p>{this.state.position_1_2}</p>
//                         </div>
//                         <div className="position" onClick={(e)=> {return this.state.position_2_0 ==='-' ? this.loging([2,0], "position_2_0") : ''} }>
//                             <p>{this.state.position_2_0}</p>
//                         </div>
//                         <div className="position" onClick={(e)=> {return this.state.position_2_1 ==='-' ? this.loging([2,1], "position_2_1") : ''} }>
//                             <p>{this.state.position_2_1}</p>
//                         </div>
//                         <div className="position" onClick={(e)=> {return this.state.position_2_2 ==='-' ? this.loging([2,2], "position_2_2") : ''} }>
//                             <p>{this.state.position_2_2}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// class App extends React.Component{
//     render(){
//         return(
//             <Game />
//         )
//     }
// }

// ReactDOM.render(
//     <div className="all">
//         <App />
//     </div>,
//     document.getElementById('root')
// );


// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 12 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';

// class BoilingVerdict extends React.Component{
//     render(){
//         return this.props.celsius >=100?
//             <p>the water would boil</p>
//             :
//             <p>the water would not boil</p>
//     }
// }

// class TempInput extends React.Component{
//     render(){
//         return(
//             <fieldset>
//                 <legend> temperature in {this.props.scale === "f" ? "Farenhait": "Celsius"}</legend>
//                 <input placeholder="enter temp" type="text" value={this.props.temperature}  onChange={this.props.handleChange} />
//             </fieldset>
//         );
//     }
// }

// class Calculater extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             temperatureInC: 0,
//             temperatureInF: (0*9)/5+32
//         };
//     }
//     handleChangeInF = (event) => {
//         this.setState({temperatureInF: event.target.value, temperatureInC: (event.target.value-32)*5/9})
//     } 
//     handleChangeInC = (event) => {
//         this.setState({temperatureInC: event.target.value, temperatureInF: (event.target.value*9)/5+32})

//     } 
//     render(){
//         return(
//             <div>
//                 <TempInput scale="f" temperature={this.state.temperatureInF} handleChange={this.handleChangeInF}/>
//                 <TempInput scale="c" temperature={this.state.temperatureInC} handleChange={this.handleChangeInC}/>
//                 <BoilingVerdict celsius={this.state.temperatureInC} />
//             </div>
//         );
//     }
// }

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = { 
//             name: ''
//         };
//     }
//     render(){
//         return(
//             <div>
//                 <Calculater />
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 11 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';

// class BoilingVerdict extends React.Component{
//     render(){
//         return this.props.celsius >=100?
//         <div>
//             <p>{this.props.celsius * 10}</p>
//             <p>the water would boil</p>
//         </div>
//         :
//         <div>
//             <p>{this.props.celsius * 10}</p>
//             <p>the water would not boil</p>
//         </div>
//     }
// }

// class Calculater extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             temperature: 0
//         };
//         // this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange = (event) => {
//         this.setState({temperature: event.target.value})
//     } 
//     render(){
//         return(
//             <fieldset>
//                 <legend> temperature in celsius</legend>
//                 <input placeholder="enter temp" type="text"  onChange={this.handleChange} />
//                 <BoilingVerdict celsius={this.state.temperature} />
//             </fieldset>
//         );
//     }
// }

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = { 
//             name: ''
//         };
//     }
//     render(){
//         return(
//             <div>
//                 <Calculater />
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 10 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = { 
//             name: ''
//         };
//     }
//     handleChange = (event) => {
//         this.setState({[event.target.name]: event.target.value});
//         console.log(this.state);    
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         alert(this.state.name + ' ' + this.state.address);
//     }
//     render(){
//         return(
//             <div>
//                 <form action="" onSubmit={this.handleSubmit}>
//                     <label> Name : 
//                         <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
//                     </label>
//                     <br/>
//                     <label> Address : 
//                         <textarea name="address" type="text" value={this.state.address} onChange={this.handleChange}/>
//                     </label>
//                     <br/>
//                     <input value="Submit" type="submit"/>
//                 </form>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 9 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// class Sidebar extends React.Component{
//     render(){
//         const posts = this.props.posts; 
//         return(
//             <ul>
//                 {posts.map(post => (
//                     <li className="every" key={post.id}>
//                         {post.title}
//                     </li>
//                 ))}
//             </ul>
//         )
//     }
// }

// class Content extends React.Component{
//     render(){
//         const posts = this.props.posts;
//         return(
//             <div>
//                 {posts.map(post => (
//                     <div className="every" key={post.id}>
//                         <h2>{post.title}</h2>
//                         <p> {post.body} </p>
//                     </div>
//                 ))}
//             </div>
//         )
//     }
// }

// class App extends React.Component{
//     render(){
//         const all_post = [
//             {id: 1, title:"Post 1", body: "Body 1"},
//             {id: 2, title:"Post 2", body: "Body 2"},
//             {id: 3, title:"Post 3", body: "Body 3"}
//         ];
//         return(
//             <div className="main">
//                 <div className="sidebar">
//                     <Sidebar posts={all_post}/>
//                 </div>
//                 <div className="content">
//                     <Content posts={all_post}/>
//                 </div>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 9 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// class Sidebar extends React.Component{
//     render(){
//         const posts = this.props.posts; 
//         return(
//             <ul>
//                 {posts.map(post => (
//                     <li className="every" key={post.id}>
//                         {post.title}
//                     </li>
//                 ))}
//             </ul>
//         )
//     }
// }

// class Content extends React.Component{
//     render(){
//         const posts = this.props.posts;
//         return(
//             <div>
//                 {posts.map(post => (
//                     <div className="every" key={post.id}>
//                         <h2>{post.title}</h2>
//                         <p> {post.body} </p>
//                     </div>
//                 ))}
//             </div>
//         )
//     }
// }

// class App extends React.Component{
//     render(){
//         const all_post = [
//             {id: 1, title:"Post 1", body: "Body 1"},
//             {id: 2, title:"Post 2", body: "Body 2"},
//             {id: 3, title:"Post 3", body: "Body 3"}
//         ];
//         return(
//             <div className="main">
//                 <div className="sidebar">
//                     <Sidebar posts={all_post}/>
//                 </div>
//                 <div className="content">
//                     <Content posts={all_post}/>
//                 </div>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------

// // ==> ===> 9 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';

// class NumberedList extends React.Component{
//     render(){
//         let new_list = this.props.list.map(items => (
//             <li key={items}>{items}</li>
//         ));
//         return(
//             <div>
//                 <ul>
//                     {new_list}
//                 </ul>
//             </div>
//         )
//     }
// }

// class App extends React.Component{
//     render(){
//         const listMapped = [1,2,3,4,5,6,7,8,9];
//         const reshteh = ['D', 'A', 'R', 'K'];
//         return(
//             <div>
//                 <NumberedList list={listMapped }/>
//                 <NumberedList list={reshteh}/>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> exercise 3 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// import x from './index.css';

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isLoggedIn: 'Helllllooo',
//             bull: true
//         }
//     }
//     change(){
//         this.state.bull ? 
//             this.setState({isLoggedIn: 'Byeeee', bull: false}) : 
//             this.setState({isLoggedIn: 'Helllllooo', bull: true});
//     }
//     render(){
//         return (
//             <div>
//                 <button onClick={()=> {this.change()}}>{this.state.isLoggedIn}</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> exercise 2 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// import index from './index.css';

// const LoginButton = (props) => {
//     return <button onClick={props.onClick}>Login</button>
// }
// const LogoutButton = (props) => {
//     return <button onClick={props.onClick}>Logout</button>
// }
// const User = (props) => {
//     console.log('logged in')
//     return <div> Hello User 
//         {
//             props.messagesUnread > 0 && 
//             <div>
//                 <h1>so many messages {props.messagesUnread}</h1>
//             </div>
//         }
//     </div>;
// }
// const Guest = (props) => {
//     console.log('logged out')    
//     return <h1>you are {props.Fucking} Guest</h1>;
// }
// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isLoggedIn: false
//         }
//     }
//     handleLogout(){
//         this.setState({isLoggedIn: false})
//     }
//     handleLogin(){
//         this.setState({isLoggedIn: true})
//     }
//     render(){
//         let button = null;
//         if(this.state.isLoggedIn){
//             button = <LogoutButton onClick={(e)=> {this.handleLogout()}}/>
//         }else{
//             button = <LoginButton onClick={(e)=> {this.handleLogin()}}/>
//         }
//         return (
//             <div className=""> 
//                 {this.state.isLoggedIn ? <User messagesUnread={15}/> : <Guest Fucking={'bitch'}/>}
//                 <br/>
//                 {button}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 8 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';


// const LoginButton = (props) => {
//     return <button onClick={props.onClick}>Login</button>
// }
// const LogoutButton = (props) => {
//     return <button onClick={props.onClick}>Logout</button>
// }
// const User = (props) => {
//     return <div> Hello User
//         {
//             props.unReadMessage > 0 && 
//             <div>
//                 yout have Unread messages.
//             </div>
//         }
//     </div>;
// }
// const Guest = (props) => {
//     return <h1>you are Guest</h1>;
// }
// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isLoggedIn: false
//         }
//     }
//     handleLogout(){
//         this.setState({isLoggedIn: false})
//     }
//     handleLogin(){
//         this.setState({isLoggedIn: true})
//     }
//     render(){
//         let button = null;
//         if(this.state.isLoggedIn){
//             button = <LogoutButton onClick={(e)=> {this.handleLogout()}}/>
//         }else{
//             button = <LoginButton onClick={(e)=> {this.handleLogin()}}/>
//         }
//         return (
//             <div>
//                 {this.state.isLoggedIn ? <User unReadMessage={1}/> : <Guest />}
//                 <br/>
//                 {button}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 7 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// import index from './index.css';

// class App extends React.Component {
//     constructor(props){
//         super(props);
//         // vase shenakhteh shodan this to kole class
//         // age inkaro nakonim alert to toggleValue() 
//         // etefagh nmiofteh va barname crash mishe
//         // this.toggleValue = this.toggleValue.bind(this);
//         // vali mitonim b jash az arrow fun to func toggleValue
//         // estefade konim ta in ye khato nanevisim
//         this.state = {
//             value: "OFF"
//         }
//     }
//     toggleValue = () =>{
//         console.log(this.state.value);
//         this.setState((prev)=>({
//             value: prev.value === "OFF"? "ON": "OFF"
//         }));
//     }
//     render(){
//         return(
//             <div>
//                 {/* <button onClick={(e)=> this.toggleValue(this, e)} > */}
//                 <button onClick={()=> this.toggleValue()} >
//                     {this.state.value}
//                 </button>
//             </div>
//         )
//     }
// };

// const Apps = () => {
//     return(
//         <div className="all">
//             <App />
//             <App />
//             <App />
//             <App />
//             <App />
//         </div>
//     )
// }

// ReactDOM.render(
//     <Apps />,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> exercise 1 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// import index from './index.css';

// class Clock extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             text: ''
//         }
//     }
//     tick(){
//         var txt = document.getElementById('txt');
//         txt.addEventListener('keyup', ()=> {
//             this.setState({text: txt.value});
//         });
//     }
//     componentDidMount(){
//         this.tick();
//     }
//     render(){
//         return(
//             <div>
//                 <input id="txt" type="text"/>
//                 <h2>{this.state.text}</h2>
//             </div>
//         )
//     }
// };

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 6 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// import index from './index.css';

// class Clock extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             date: new Date().toLocaleTimeString()
//         }
//     }
//     // changing the state with setState({})
//     tick(){
//         this.setState({date: new Date().toLocaleTimeString()})
//     }
//     // after first rendering
//     componentDidMount(){
//         this.tickHappening = setInterval(() => this.tick(), 1000);
//     }
//     // free timer after escape(exit) of componenet
//     componentWillUnmount(){
//         clearInterval(this.tickHappening);
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Time is {' '}</h1>
//                 <h2>{this.state.date}</h2>
//             </div>
//         )
//     }
// };

// const App = () => {
//     return(
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 5 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';
// import index from './index.css';

// // text of comment
// const CommentText = (props) => {
//   return(
//     <div className="comment-text">
//       {props.comment.text}
//     </div>
//   );
// }

// // Author of comment
// const Author = (props) => {
//   return(
//     <div className="author">
//       <img width='30' height='30' src={props.comment.author.pic} alt="pic"/>
//       {props.comment.author.name}
//     </div>
//   );
// }

// // date of comment
// const CommentDate = (props) => {
//   return(
//     <div className="comment-date">
//       {props.comment.date}
//     </div>
//   );
// }

// // all of our app
// const App = (props) => {
//   return (
//     <div className="all">
//       <Author comment={props.comment} />
//       <CommentText comment={props.comment} />
//       <CommentDate comment={props.comment} />
//     </div>
//   );
// }

// // our data
// const comments = {
//   author: {name: "Amir", pic: './a.png'},
//   text: "i'm amir dark",
//   date: new Date().toDateString()
// }

// // rendering
// ReactDOM.render(
//   <App comment={comments}/>,
//   document.getElementById("root")
// );

// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------

// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

// const Greeting = (props) => {
//   return <h1> Hello {props.name} </h1>
// }

// changing function to the class
// class Greeting extends React.Component{
//   render(){
//     return (
//       <h1> Hello {this.props.name} </h1>
//     )
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <Greeting name="Amir" />
//       <Greeting name="sara" />
//       <Greeting name="ali" />
//       <Greeting name="khodam" />
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 4 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';

// const elm = <h1> my element</h1>;

// const tik = () =>{
//   const timeElement = (
//     <div>
//       Time is {' '}
//       {new Date().toLocaleTimeString()}
//     </div>
//   );

//   ReactDOM.render(
//     timeElement,
//     document.getElementById('root')
//   )
// }

// setInterval(tik, 1000);

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// // ==> ===> 3 <=== <==

// import React from 'react';
// import ReactDOM from 'react-dom';

// const sayHello = (user) => {
//   let ti = 1;
//   return (
//     <span tabIndex={ti}>
//       Hello {' '}
//       {user.firstName} {' '}
//       {user.lastName}
//     </span>
//   )
//   // return ` Hello ${user.firstName} ${user.lastName}`;
// }

// const user = {
//   firstName : 'Amir',
//   lastName: "Dark"
// }

// ReactDOM.render(
//   <div>
//     <h1 className="heading"> JSX Sample 
//       <br/>
//       {sayHello(user)}
//     </h1>
//     <p>
//       sample test
//     </p>
//   </div>
//   ,
//   document.getElementById("root")
// );


