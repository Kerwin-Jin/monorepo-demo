import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GetSentence } from '@zek/apis'
import { addTwoNumber } from "@zek/utils"
import {AuthButton, Title} from '@zek/components'


function App() {
  const [sentence, setSentence] = useState('')


  const fetchData = ()=>{
    GetSentence().then(res=>{
      setSentence(res.data)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title>Foo Project</Title>
      <div className="card">
        <p>{sentence}</p>
        <button onClick={fetchData}>
          刷新{addTwoNumber(1,5)}
        </button>
        <Title>Hello World</Title>
      </div>
      <AuthButton authKey='all'/>
    </>
  )
}

export default App
