import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'
import '../components/PokedexPage/styles/PokedexPage.css'

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const trainer = useSelector(store => store.trainer)

  const inputSearch = useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)

  useEffect(() => {
    if(typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getTypePokemon(typeSelected)
    }
  }, [typeSelected])

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const pokemonFilter = pokemons?.results.filter(poke => poke.name.includes(inputValue)) 

  return (
    <article className='pokedex'>
      <header className='pokedex__header'>
        <img className='pokedex__title' src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="" />
        <p className='pokedex__header__black'>.</p>
      </header>
      <p className='pokedex__salute'>
        <span className='pokedex__trainer'>Hi {trainer}</span>
        <span className='pokedex__instructions'>, here you can find your favourite Pokemon</span>
      </p>
      <form className='pokedex__form' onSubmit={handleSubmit}>
        <input className='pokedex__input' ref={inputSearch} type="text" />
        <button className='pokedex__btn'>Search</button>
      </form>
      <section className='pokedex__types'>
        <SelectType setTypeSelected={setTypeSelected} />
      </section>
      <section className='pokedex__container'>
        {
          pokemonFilter?.map(poke => (
            <PokeCard 
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </section>
    </article>
  )
}

export default PokedexPage