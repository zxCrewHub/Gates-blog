import { NavLink } from './NavLink'


export const Header= () => {
  return (
    <div className='flex justify-between p-4'>
<img src="/images/BlackLogo.svg" alt="" className="h-[95px] w-[85px]"/>
<nav>
<ul>
<li> <NavLink to="/login"> Войти </NavLink></li>
<li> <NavLink to="/sign"> Зарегистрироваться </NavLink></li>
<li> <NavLink to="/"> login </NavLink></li>
<li> <NavLink to="/"> login </NavLink></li>
</ul>
</nav>

    </div>
  )
}
