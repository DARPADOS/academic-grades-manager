import Button from 'components/button'
import { MouseEvent, ReactNode } from 'react'

interface Props {
  open: boolean,
  children: ReactNode,
  handleToggle: () => void,
}

const Modal = ({ open, children, handleToggle } : Props) => {
  const onClickModal = (e: MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return
    handleToggle()
  }

  return <>
    <Button onClick={handleToggle} color='blue'>Add</Button>
    {
      open
        ? <>
        <div onClick={onClickModal} className="bg-neutral-900 bg-opacity-70 h-screen w-screen z-20 absolute top-0 left-0 flex">
          <div className="m-auto bg-white rounded-lg min-h-fit">
            {children}
          </div>
        </div>
        </>
        : <></>
    }
  </>
}

export default Modal
