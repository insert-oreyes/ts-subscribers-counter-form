// import { useState, useReducer } from 'react'
import { Sub } from '../types'
import useNewSubForm from '../hooks/useNewSubForm'

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

// interface FormState {
//   inputValues: Sub
// }

// const INITIAL_STATE = {
//   nick: '',
//   subMonths: 0,
//   avatar: '',
//   description: '',
// }

const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setinputValues] = useState<FormState['inputValues']>(INITIAl_STATE)

  const [inputValues, dispatch] = useNewSubForm() //useReducer(formReducer, INITIAL_STATE)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // setinputValues({ ...inputValues, [event.target.name]: event.target.value })
    const { name, value } = event.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value,
      },
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onNewSub(inputValues)
    // handleClear()
    dispatch({ type: 'clear' })
  }

  const handleClear = () => {
    // setinputValues(INITIAL_STATE)
    dispatch({ type: 'clear' })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          placeholder='nick'
          name='nick'
          value={inputValues.nick}
        />
        <input
          onChange={handleChange}
          type='number'
          placeholder='subMonths'
          name='subMonths'
          value={inputValues.subMonths}
        />
        <input
          onChange={handleChange}
          type='text'
          placeholder='avatar'
          name='avatar'
          value={inputValues.avatar}
        />
        <textarea
          onChange={handleChange}
          placeholder='description'
          name='description'
          value={inputValues.description}
        />
        <button onClick={handleClear} type='button'>
          Clear form
        </button>
        <button type='submit'>Save new sub</button>
      </form>
    </div>
  )
}

export default Form
