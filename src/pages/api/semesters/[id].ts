import { NextApiRequest, NextApiResponse } from 'next'
import { ErrorResponse, Semester } from 'types/types'
import prisma from 'lib/prisma'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async function SemestersDetail (
  req: NextApiRequest,
  res: NextApiResponse<Semester | Array<Semester> | ErrorResponse>
) {
  const { method, query } = req
  const id = query.id || 0

  const session: Session | null = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    res.status(401).json({ error: 'Unauthorized', unauthorized: true })
    return
  }

  switch (method) {
    case 'GET':{
      try {
        const data = await prisma.semester
          .findUniqueOrThrow({
            where: {
              id: +id
            },
            include: {
              SemesterCourses: {
                select: {
                  Course: true
                }
              }
            }
          })
        if (data.userId !== session?.user.id) {
          res.status(401).json({ error: 'Unauthorized', unauthorized: true })
          return
        }
        res.status(200).json(data)
      } catch (err:any) {
        console.log(err)
        res.status(400).json({ error: err.message })
      }
      break
    }
    case 'PUT':{
      try {
        const updatedSemester: Semester = req.body

        if (updatedSemester.userId !== session?.user.id) res.status(401).json({ error: 'Unauthorized', unauthorized: true })

        const data = await prisma.semester
          .update({
            where: {
              id: +id
            },
            data: updatedSemester
          })

        res.status(201).json(data)
      } catch (err: any) {
        console.log(err)
        res.status(500).json({ error: err.message })
      }
      break
    }
    case 'DELETE':{
      try {
        const deletedSemester: Semester = req.body

        if (deletedSemester.userId !== session?.user.id) res.status(401).json({ error: 'Unauthorized', unauthorized: true })

        const data = await prisma.semester
          .delete({
            where: {
              id: +id
            }
          })

        res.status(200).json(data)
      } catch (err: any) {
        console.log(err)
        res.status(500).json({ error: err.message })
      }
      break
    }
    default:{
      res.status(405).send({ error: 'Not http method supported' })
      break
    }
  }
}
