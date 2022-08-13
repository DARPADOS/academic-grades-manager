import { ChangeEvent, ReactNode } from 'react'

interface Props {
  children: ReactNode,
  inputValue: string,
  inputName: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({ inputValue, handleChange, inputName, children }: Props) => {
  return (
  <div className="flex flex-col">
    <label htmlFor={inputName} className="">{children}</label>
    <input type="text" value={inputValue} name={inputName} id={inputName} onChange={ handleChange } className="border rounded-md p-2 w-80" />
  </div>
  )
}

export default InputText
