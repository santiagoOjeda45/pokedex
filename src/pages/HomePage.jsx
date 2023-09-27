import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerSlice } from '../store/slices/trainer.slice'
import { useNavigate } from 'react-router-dom'
import '../components/HomePage/styles/HomePage.css'

const HomePage = () => {

    const inputTrainer = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }

    return (
        <article className='home'>
            <div className='home__title__container'>
                <img className='home__title' src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="" />
            </div>
            <section className='home__text'>
                <h2 className='home__salute'>Hi trainer!</h2>
                <p className='home__instructions'>Lets start! But first, introduce your name as a trainer:</p>
            </section>
            <form className='home__form' onSubmit={handleSubmit}>
                <input className='home__input' ref={inputTrainer} type="text" />
                <button className='home__btn'>Start</button>
            </form>
            <footer className='home__footer'>
                <img className='home__ball' src="https://benjamin-flores.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc2e86dc1-d4c8-4ab4-8356-bd178a1cb14a%2Fpokemon-4657023_640.png?table=block&id=d6bede7a-0291-4b7a-ad34-990833401938&spaceId=35066e2c-3339-430c-80ca-dae715f7e3af&width=250&userId=&cache=v2" alt="" />

            </footer>
        </article>
    )
}

export default HomePage