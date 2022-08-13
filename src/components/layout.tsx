import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Header from './header'
import Sidebar from './sidebar'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { status } = useSession()
  const router = useRouter()

  if (router.pathname !== '/' && status === 'unauthenticated') {
    router.push('/api/auth/signin')
    return <></>
  }
  return <>
    <div className="h-screen max-h-max flex bg-green-pale">
      {
        (status === 'authenticated')
          ? <Sidebar/>
          : <></>
      }
      <div className="w-full flex flex-col">
        <Header/>
        <main className=" h-full">
          {children}
        </main>
      </div>
    </div>
  </>
}

export default Layout
