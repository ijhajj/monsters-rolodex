import React, { Component } from 'react'
import CardList from './card-list/card-list'
import SearchBox from './search-box/search-box';
import './Monsters.css';

export default class Monsters extends Component {
    constructor(){
    super();
    this.state={
        monsters:[],
        searchField:''
    }
}

handleChange=(e)=>{
    this.setState({searchField:e.target.value});
}

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
}
  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (

      <div>
          <h1> Monsters Rolodex </h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
         <CardList monsters={filteredMonsters}></CardList>
      </div>

    )
  }
}
