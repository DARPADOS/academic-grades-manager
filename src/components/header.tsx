import LoginButton from './login/login-btn'

const Header = () => {
  return <header className="bg-transparent h-16 flex justify-end">
    <div className="my-auto p-4">
      <LoginButton></LoginButton>
    </div>
  </header>
}

export default Header
