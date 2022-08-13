import prisma from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { Course, ErrorResponse } from 'types/types'

export default function Courses (req: NextApiRequest, res: NextApiResponse<Course | Array<Course> | ErrorResponse>) {
  const { method } = req

  if (method !== 'GET' && method !== 'POST') { res.status(405).send({ error: 'Not http method supported' }) }

  if (method === 'GET') {
    prisma.course.findMany()
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        console.log(err)
        res.status(400).json({ error: err })
      })
  }

  if (method === 'POST') {
    const course = req.body

    prisma.course
      .create({ data: course })
      .then((data) => res.status(201).json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json({ error: err })
      })
  }
}
