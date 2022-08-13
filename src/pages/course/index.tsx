import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import ListSemester from '../../components/semester/semester.list'
import { Semester } from '../../types/types'
import { IoMdClose } from 'react-icons/io'
import FormSemester from '../../components/semester/semester.form'
import SemesterLoader from '../../components/semester/content.loader'

const CoursePage: NextPage = () => {
  const [listSemester, setListSemester] = useState<Array<Semester>>([])
  const [isLoading, setLoading] = useState<boolean>(true)
  const [isFormModal, setIsFormModal] = useState<boolean>(false)

  const modalHandle = () => {
    setIsFormModal(val => !val)
  }

  const onSemesterSubmitted = () => {
    setIsFormModal(val => !val)
    setLoading(true)
  }

  useEffect(() => {
    if (isLoading) {
      fetch('/api/semesters')
        .then(res => {
          if (!res.ok) throw new Error('Error in data fetching')
          return res.json()
        })
        .then((data: Array<Semester>) => {
          setListSemester(data)
          setLoading(false)
        })
        .catch(() => setLoading(true))
    }
  }, [isLoading])

  return <>
    <div>
      <h1 className="px-4 text-3xl font-semibold">Academic Semesters</h1>
      <button onClick={modalHandle} className="m-2 w-24 py-1.5 shadow-lg bg-blue-500 hover:bg-blue-700  text-white rounded-lg font-semibold ">Add</button>
      { isLoading
        ? <SemesterLoader/>
        : <ListSemester listSemesters={listSemester} />
      }
      {
        isFormModal
          ? <div className="bg-neutral-900 bg-opacity-70 h-screen w-screen z-20 absolute top-0 left-0 flex">
          <div className="m-auto bg-white rounded-lg min-h-fit">
            <div className="flex justify-between items-start">
              <h2 className="m-2 text-2xl font-medium text-gray-800">New Semester</h2>
              <button onClick={modalHandle} className="m-2 text-2xl shadow-lg bg-slate-600 hover:bg-slate-800 text-white rounded"><IoMdClose/></button>
            </div>

            <FormSemester onSemesterSubmitted={onSemesterSubmitted}/>

            <div className="flex justify-end gap-3 p-3">
              <button onClick={modalHandle} className="w-24 py-1.5 shadow-lg bg-slate-500 hover:bg-slate-700  text-white rounded-lg font-semibold ">Close</button>
              <button type="submit" form="new-semester" className="w-24 py-1.5 shadow-lg bg-blue-500 hover:bg-blue-700  text-white rounded-lg font-semibold ">Save</button>
            </div>
          </div>
        </div>
          : <></>
      }

    </div>
  </>
}

export default CoursePage
