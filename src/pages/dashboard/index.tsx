import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Dashboard: NextPage = () => {
  const { status } = useSession()

  return (
    <div>

    </div>
  )
}

export default Dashboard
