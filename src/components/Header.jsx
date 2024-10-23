import { NavLink } from "./NavLink";

export const Header = () => {
  return (
    <div className="bg-white fixed  w-full z-50">
      <div className="container flex justify-between items-center ">
        <img
          src="/src/images/BlackLogo.svg"
          alt=""
          className="h-[95px] w-[85px]"
        />
        <nav>
          <ul className="flex items-center gap-10">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/"> Connect </NavLink>
            </li>
            <li>
              <NavLink to="/sign" button={true}>
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink to="/login"> Login </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
