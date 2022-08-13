import { Semester } from '../../types/types'
import CardSemester from './semester.card'

interface Props{
  listSemesters: Array<Semester>
}

const ListSemester = ({ listSemesters }:Props) => {
  return <div className="grid grid-cols-fill-80 gap-3 pr-3">
    {
      listSemesters.map((semester:Semester) => <CardSemester key={semester.id} semester={semester}/>)
    }
  </div>
}

export default ListSemester
