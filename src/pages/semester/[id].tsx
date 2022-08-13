import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Semester } from 'types/types'
import { dateFormatOptions } from 'utils/date-utils'

const SemesterDetail: NextPage = () => {
  const router = useRouter()
  const [semester, setSemester] = useState<Semester>({
    id: 0,
    name: '',
    startDate: '2022-01-01',
    endingDate: '2022-01-01',
    userId: 0
  })
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    console.log('useEffect')

    if (isLoading && router.isReady) {
      fetch(`/api/semesters/${router.query.id}`)
        .then(res => {
          console.log('call to api')

          if (!res.ok) throw new Error('Error in data fetching')
          return res.json()
        })
        .then((data: Semester) => {
          console.log(data)

          setSemester({
            ...data,
            startDate: new Date(data.startDate).toLocaleDateString('en-US', dateFormatOptions),
            endingDate: new Date(data.endingDate).toLocaleDateString('en-US', dateFormatOptions)
          })
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)

          setLoading(false)
        })
    }
  }, [isLoading, router.isReady, router.query.id])

  return <>
    <div>
      <h1 className="mb-2 px-4 text-3xl font-semibold">Semester: {semester.name}</h1>
      <div>
        <p>Start Date: {`${semester.startDate}`}</p>
      </div>
      <div>
        <p>Ending Date: {`${semester.endingDate}`}</p>
      </div>
      <h2 className="mb-2 px-4 text-2xl font-medium">Courses</h2>
      <div>
        {
          (semester.SemesterCourses?.length === 0)
            ? <div className="grid content-center">
                <h1>There are no courses yet</h1>
              </div>
            : <div className="grid content-center">
                <h1>Courses</h1>
              </div>
        }
      </div>
    </div>
  </>
}

export default SemesterDetail
