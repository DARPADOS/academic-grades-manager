import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

const LoginButton = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div className='flex gap-3 items-center'>
          <Image className='rounded-full' height={50} width={50} src={session.user!.image || ''} alt="" />
          <p className='text-xl'>{session.user!.name}</p>
          <button className='m-2 w-24 py-1.5 shadow-lg bg-red-500 hover:bg-red-700  text-white rounded-lg font-semibold active:scale-95' onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    )
  }
  return <>
    <button className='m-2 w-24 py-1.5 shadow-lg bg-blue-500 hover:bg-blue-700  text-white rounded-lg font-semibold active:scale-95' onClick={() => signIn()}>Sign in</button>
  </>
}

export default LoginButton
