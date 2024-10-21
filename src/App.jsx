import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div>
      <header className="text-pink-800 font-bold bg-yellow-200 ">
        Здравствуйте!
      </header>
      <main>
        <Link to="/login" className="p-2 text-green-800 font-bold">
          Войти
        </Link>
        <Link to="/sign" className="text-green-800 font-bold">
          Зарегистрироваться
        </Link>
        <Link to="/details" className="p-2 text-green-800 font-bold">
          Подробнее
        </Link>
        <Outlet></Outlet>
      </main>
      <footer className="text-pink-800 font-bold bg-yellow-200 ">
        Контакты
      </footer>
    </div>
  );
}
