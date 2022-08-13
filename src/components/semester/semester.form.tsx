import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { ChangeEvent, FormEvent, useState } from 'react'
import { inputSemester, newSemester } from '../../types/types'
import InputDate from '../input/input.date'
import InputText from '../input/input.text'

interface Props {
   onSemesterSubmitted: () => void,
   formId: string
}

const reqConf = (data: newSemester): RequestInit => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
}

const FormSemester = ({ onSemesterSubmitted, formId }: Props) => {
  const [newSemester, setNewSemester] = useState<inputSemester>({
    name: '',
    startDate: '00-00-0000',
    endingDate: '00-00-0000',
    userId: 1
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    setNewSemester({
      ...newSemester,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const data = {
      ...newSemester,
      startDate: new Date(newSemester.startDate),
      endingDate: new Date(newSemester.endingDate)
    }

    fetch('/api/semesters', reqConf(data))
      .then(() => onSemesterSubmitted())
      .catch((e) => console.log(e))
  }

  return <form onSubmit={ handleSubmit } id={formId} className="mx-5 px-4 text-lg grid gap-3">
    <InputText inputValue={newSemester.name} handleChange={handleChange} inputName={'name'}>Name</InputText>
    <InputDate inputValue={newSemester.startDate} handleChange={handleChange} inputName={'startDate'}>Start Date</InputDate>
    <InputDate inputValue={newSemester.endingDate} handleChange={handleChange} inputName={'endingDate'}>Ending Date</InputDate>
  </form>
}

export default FormSemester
