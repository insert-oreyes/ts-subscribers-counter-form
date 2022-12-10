import { useState, useEffect, useRef } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import { Sub } from './types'

const INITIAl_STATE = [
  {
    nick: 'oreyesdev',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=oreyesdev',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    nick: 'mondays',
    subMonths: 1,
    avatar: 'https://i.pravatar.cc/150?u=mondays',
  },
]

interface AppState {
  subs: Array<Sub>
  NewSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState['NewSubsNumber']>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAl_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub])
    setNewSubsNumber((newSubsNumber) => newSubsNumber + 1)
  }

  return (
    <div className='App' ref={divRef}>
      <h1>Suscribed list</h1>
      <List subs={subs} />
      <small> New subs: {newSubsNumber}</small>
      <Form onNewSub={handleNewSub} />
    </div>
  )
}

export default App
