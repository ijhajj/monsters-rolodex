import React from 'react'
//import Monsters from '../Monsters'
import './card.css';

const Card = (props) => {
  return (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster"/>
      <h2 key={props.monster.id}>{props.monster.name}</h2>
    <p>{props.monster.email}</p>  
    </div>
  )
}

export default Card
