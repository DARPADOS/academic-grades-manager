import Link from 'next/link'
import { Semester } from '../../types/types'

interface Props{
  semester: Semester
}

const CardSemester = ({ semester }: Props) => {
  const { id, name, endingDate, startDate } = semester

  const startLocaleDate = new Date(startDate).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  })
  const endingLocaleDate = new Date(endingDate).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  })

  return <>
    <div className="shadow-lg bg-white rounded-lg p-4 text-center flex flex-col justify-between h-48 relative hover:scale-[1.02]">
      <h2 className="text-2xl font-semibold pb-2 text-slate-700">{name}</h2>
      <div className="flex justify-between">
        <div className="font-medium">
          <p>Start date</p>
          <p className="text-gray-500 " >{startLocaleDate}</p>
        </div>

        <div className="font-medium">
          <p>Ending date</p>
          <p className="text-gray-500 " >{endingLocaleDate}</p>
          <Link href={'/semester/[id]'} as={`/semester/${id}`} hidden={true}>
            <a className="after:absolute after:inset-0 flex-none "></a>
          </Link>
        </div>
      </div>
    </div>
  </>
}

export default CardSemester
