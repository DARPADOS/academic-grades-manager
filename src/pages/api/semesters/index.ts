import { NextApiRequest, NextApiResponse } from 'next'
import { ErrorResponse, Semester } from 'types/types'
import prisma from 'lib/prisma'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async function Semesters (
  req: NextApiRequest,
  res: NextApiResponse<Semester | Array<Semester> | ErrorResponse>
) {
  const { method } = req

  const session: Session | null = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    res.status(401).json({ error: 'Unauthorized', unauthorized: true })
    return
  }

  switch (method) {
    case 'GET': {
      try {
        const data = await prisma.semester
          .findMany({
            where: {
              userId: session?.user.id
            }
          })
        res.status(200).json(data)
      } catch (err: any) {
        console.log({ err })
        res.status(400).json({ error: err.message })
      }
      break
    }
    case 'POST': {
      try {
        const semester = req.body
        const data = await prisma.semester
          .create({ data: { ...semester, userId: session?.user.id } })
        res.status(201).json(data)
      } catch (err: any) {
        console.log({ err })
        res.status(500).json({ error: err.message })
      }
      break
    }
    default:{
      res.status(405).json({ error: 'Not http method supported' })
      break
    }
  }
}
