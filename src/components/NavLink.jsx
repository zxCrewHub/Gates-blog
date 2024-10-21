import { Link } from "react-router-dom"


export const NavLink = ({children, to}) => {
  return (
    <Link to={to} className="font-poppins text-black text-14 font-normal leading-7 tracking-wider text-left hover:underline hover:underline-offset-1">
    {children}
  </Link>
  
  )
}
