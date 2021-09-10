import React from 'react'
import './Pokecard.css'

const Pokecard = ({ id, name, type, exp }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const altText = `image of ${name}`
  
  return (
    <div className="Pokecard">
      <p>{name}</p>
      <img src={imgUrl} alt={altText}></img>
      <sub className="Pokecard-sub">Type: {type}</sub>
      <sub className="Pokecard-sub">EXP: {exp}</sub>
    </div>
  )
}

export default Pokecard