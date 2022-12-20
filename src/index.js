import { generateJoke } from './generateJoke'
import './styles/main.scss'
import apple from './assets/apple.svg'

const appleImg = document.getElementById('appleImg')
appleImg.src = apple

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)
console.log(generateJoke())
