/* eslint-disable no-use-before-define */
interface Course {
  id: number,
  name: string
  credits: number,
  userId: number
}

interface inputCourse {
  name: string
  credits: number,
  userId: number
}

interface Semester {
  id: number,
  name: string,
  startDate: Date | string,
  endingDate: Date | string,
  userId: number,
  SemesterCourses?: Array<SemesterCourse>
}

interface SemesterCourse {
  id: number,
  courseId: number,
  semesterId: number,
  passed: boolean,
  Course: Course,
  Semester: Semester,
  Evaluation?: Array<Evaluation>
}

interface Evaluation {
  id: number,
  number: number,
  weight: number,
  grade: number,
  evaluationTypeId: number,
  semesterCourseId: number
  EvaluationType: EvaluationType
}

interface EvaluationType {
  id: number,
  name: string,
}

interface inputSemester {
  name: string,
  startDate: string,
  endingDate: string,
  userId: number
}

interface newSemester {
  name: string,
  startDate: Date,
  endingDate: Date,
  userId: number
}

interface ErrorResponse{
  error: string,
  unauthorized?: boolean
}

export {
  Semester,
  ErrorResponse,
  inputSemester,
  newSemester,
  Course,
  inputCourse
}
