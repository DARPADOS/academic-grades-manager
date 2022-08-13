import Link from 'next/link'
import NavButton from './nav-button'

const Sidebar = () => {
  return <nav className="shadow-2xl bg-blue-dark text-white rounded-lg m-3 p-5 h-auto w-80 flex flex-col justify-between">
    <div className="flex flex-col gap-20 mt-3">
      <h1 className="text-4xl font-bold text-center text-green">Grades Manager</h1>
      <ul className="text-gray-200">
      <li>
        <NavButton href='/dashboard'>
          <span>🏠</span> Dashboard
        </NavButton>
      </li>
      <li>
        <NavButton href='/semester'>
          <span>📆</span> Semesters
        </NavButton>
      </li>
      <li>
        <NavButton href='/course'>
          <span>📓</span> Course
        </NavButton>
      </li>
    </ul>

    </div>

    <Link href="/course">
      <a className="rounded block bg-slate-500 hover:bg-slate-400 w-auto p-2 text-xl font-bold text-center"><span>⚙️</span> Settings</a>
    </Link>
  </nav>
}

export default Sidebar
