import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  href: string,
  children: ReactNode
}

const NavButton = ({ href, children } : Props) => {
  return <>
    <Link href={href} >
      <a className="rounded block hover:bg-slate-400 w-auto my-3 p-2 pl-4 text-xl font-bold">
        {children}
      </a>
    </Link>
  </>
}

export default NavButton
