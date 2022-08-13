import { IoMdClose } from 'react-icons/io'

interface Props {
  title: string,
  onClick: () => void
}

const ModalHeader = ({ title, onClick } : Props) => {
  return <>
    <div className="flex justify-between items-start">
      <h2 className="mx-5 my-2 text-2xl font-medium text-gray-800">{title}</h2>
      <button onClick={onClick} className="m-2 text-2xl shadow-lg bg-slate-600 hover:bg-slate-800 text-white rounded">
        <IoMdClose/>
      </button>
    </div>
  </>
}

export default ModalHeader
