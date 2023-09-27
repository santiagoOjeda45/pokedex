import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/PokeIdPage.css'

const PokedexIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getPokemon ] = useFetch(url)

  const navigate = useNavigate()

  useEffect(() => {
      getPokemon()
  }, [id])

  const firstType = pokemon?.types[0].type.name

  const handleNavigate = () => {
    navigate(`/pokedex`)
}

  console.log(pokemon)

  return (
    <div className='main__box'>
        <button className='id__btn' onClick={handleNavigate}>Back to Pokemon list</button>
    <div className='id'>
        <div className={`id__header ${firstType}-gradient`}>
          <p>.</p>
        </div>
        <img className='id__img'  src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h2 className={`id__number ${firstType}-color`}>#{pokemon?.id}</h2>
        <h2 className={`id__name ${firstType}-color`}>{pokemon?.name}</h2>
        <ul className='id__ul'>
          <li className='id__li'><span className='id__label'>Weight: </span><span className='id__value'>{pokemon?.weight}</span></li>
          <li className='id__li'><span className='id__label'>Height: </span><span className='id__value'>{pokemon?.height}</span></li>
        </ul>
        <div className='id__container'>
          <div className='id__type__container'>
            <h3 className='id__type'>Type</h3>
            <ul className='id__type__list'>
              {
                pokemon?.types.map(poke => (
                    <li className='id__types' key={poke.type.url}>{poke.type.name}</li>
                ))
                }
            </ul>
          </div>
          <div className='id__abilities__container'>
            <h3 className='id__ability'>Abilities</h3>
            <ul className='id__ability__list'>
              {
                pokemon?.abilities.map(ability => (
                  <li className='id__abilities' key={ability.ability.url}>{ability.ability.name}</li>
                ))
              }
            </ul>
          </div>
          <div className='id__bar'>
            <h3>Hp</h3>
            <div className='id__value__container'>
              <div className='id__value__stat'>{pokemon?.stats[0].base_stat}</div>
            </div>
          </div>
          <div className='id__bar'>
            <h3>Attack</h3>
            <div className='id__value__container'>
              <div className='id__value__stat'>{pokemon?.stats[1].base_stat}</div>
            </div>
          </div>
          <div className='id__bar'>
            <h3>Defense</h3>
            <div className='id__value__container'>
              <div className='id__value__stat'>{pokemon?.stats[2].base_stat}</div>
            </div>
          </div>
          <div className='id__bar'>
            <h3>Special Attack</h3>
            <div className='id__value__container'>
              <div className='id__value__stat'>{pokemon?.stats[3].base_stat}</div>
            </div>
          </div>
          <div className='id__bar'>
            <h3>Special Defense</h3>
            <div className='id__value__container'>
              <div className='id__value__stat'>{pokemon?.stats[4].base_stat}</div>
            </div>
          </div>
          <div className='id__bar'>
            <h3>Speed</h3>
            <div className='id__value__container'>
              <div className='id__value__stat'>{pokemon?.stats[5].base_stat}</div>
            </div>
          </div>    
        </div>
    </div>
    </div>
  )
}

export default PokedexIdPage