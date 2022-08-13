import { ReactNode } from 'react'

interface Props {
  type?: 'button'| 'submit' | 'reset',
  form?: string,
  color: 'blue' | 'slate' | 'red',
  onClick?: () => void,
  children: ReactNode,
}

const Button = ({ type, onClick, color, children, form } : Props) => {
  return <>
    <button onClick={onClick} type={type} className={`m-2 w-24 py-1.5 shadow-lg bg-${color}-500 hover:bg-${color}-700 text-white rounded-lg font-semibold active:scale-[0.98]`} form={form}>
      {children}
    </button>
  </>
}

export default Button
