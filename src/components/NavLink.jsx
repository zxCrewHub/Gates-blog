import { Link } from "react-router-dom"

export const NavLink = ({children, to, button}) => {
  return (
    <Link 
      to={to} 
      className={`font-poppins text-14 font-normal transition duration-300 ease-in-out 
      ${button 
        ? 'flex justify-center items-center bg-gradient-to-r from-gray-700 to-black text-white py-1 px-4 rounded hover:bg-gray-800'  // Стили для кнопки с градиентом
        : 'text-black pb-1 hover:border-b-2 hover:border-black'}`}  // Стили для обычных ссылок
    >
      {children}
    </Link>
  )
}
