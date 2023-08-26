import './App.css';
import React from 'react';
// import logo from'logo.svg';

class FilmItemRow extends React.Component{
  render(){
    return (
      
      <li>
        <a href={this.props.url} target="_blank" rel="noreferrer">{this.props.url}</a>
      </li>
    )
  }
}

class StarWars extends React.Component{
  
  constructor(){
    super();
    this.state ={
      name : null,
      height:null,
      homeworld:null,
      films:[],
      loaded:false
    }
  }
  
  GetNewCharacter(){
    console.log("Get new Character button");
    let randomNum=Math.ceil(Math.random()*83);
    fetch(`https://swapi.dev/api/people/${randomNum}`)
    .then(response => response.json() )
    .then(data => this.setState({
      loaded:true,
      name:data.name,
      height:data.height,
      homeworld:data.homeworld,
      films:data.films,
      
      
    }));
    

    
  }
  render(){
    const movies= this.state.films.map((url , i) => {
      return <FilmItemRow key={i} url={url} />
    })

    return(<div>
      {this.state.loaded &&
      <div className='ddd'>
      <h1 id="name1">Name: {this.state.name} </h1>
      <p id="height1">Height(in cm): {this.state.height} </p>
      <p><a href={this.state.homeworld}>HomeWorld</a></p>
      <ul>
        {movies}
      </ul>
      </div>
  }
      <button id="btn" onClick={() => this.GetNewCharacter()}>Player 1</button>
      <div className='abcd' >Stats P1- {Math.ceil(Math.random()*100)}</div>
      <button id="btn2" onClick={() => this.GetNewCharacter()}>Player 2</button>
      <div className='abcde' >Stats - {Math.ceil(Math.random()*100)} </div>

      </div>
      
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <StarWars />
      </header>
    </div>
  );
}

export default App;



