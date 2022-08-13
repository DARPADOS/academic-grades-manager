import { ChangeEvent, ReactNode } from 'react'

interface Props {
  children: ReactNode,
  inputValue: string,
  inputName: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputDate = ({ inputValue, handleChange, inputName, children }: Props) => {
  return (
  <div className="flex flex-col">
    <label htmlFor={inputName}>{children}</label>
    <input type="date" value={inputValue} name={inputName} id={inputName} onInput={ handleChange } onChange={ handleChange } className="border rounded-md p-2" />
  </div>
  )
}

export default InputDate
