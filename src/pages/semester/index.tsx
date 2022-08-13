import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import ListSemester from 'components/semester/semester.list'
import { Semester } from 'types/types'
import SemesterLoader from 'components/semester/content.loader'
import SemesterModal from 'components/semester/semester.modal'

const SemesterPage: NextPage = () => {
  const [listSemester, setListSemester] = useState<Array<Semester>>([])
  const [isLoading, setLoading] = useState<boolean>(true)

  const onSemesterSubmitted = () => {
    setLoading(true)
  }

  useEffect(() => {
    console.log('useEffect')

    if (isLoading) {
      fetch('/api/semesters')
        .then(res => {
          console.log('call to api')

          if (!res.ok) throw new Error('Error in data fetching')
          return res.json()
        })
        .then((data: Array<Semester>) => {
          setListSemester(data)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [isLoading])

  return <>
    <div>
      <h1 className="mb-2 px-4 text-3xl font-semibold">Academic Semesters</h1>
      <SemesterModal onSubmit={onSemesterSubmitted} ></SemesterModal>
      { isLoading
        ? <SemesterLoader/>
        : <ListSemester listSemesters={listSemester} />
      }
    </div>
  </>
}

export default SemesterPage
