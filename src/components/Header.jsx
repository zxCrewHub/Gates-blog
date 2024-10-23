import { NavLink } from './NavLink'

export const Header = () => {
  return (
    <div className='container flex justify-between p-4 items-center'>
      <img src="/src/images/BlackLogo.svg" alt="" className="h-[95px] w-[85px]" />
      <nav>
        <ul className='flex items-center gap-10'>
          <li> <NavLink to="/login"> Home </NavLink></li>
          <li> <NavLink to="/sign"> Connect </NavLink></li>
          <li> <NavLink to="/" button={true}> Sign up </NavLink></li>
          <li> <NavLink to="/"> Login </NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
