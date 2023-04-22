import React from 'react'
import { Link } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';

export interface NavBarProps { }
interface NavBarLink {
  name: string;
  path: string;
}

const NavBar: React.FC<NavBarProps> = (_props): React.ReactElement => {
  const [showMenu, setShowMenu] = React.useState(false);

  const links: NavBarLink[] = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: 'about' },
    { name: 'SERVICES', path: 'services' },
    { name: 'CONTACT', path: 'contact' }
  ];

  return (
    <>
      <span onClick={() => setShowMenu(!showMenu)} className='fixed right-4 top-6 cursor-pointer md:hidden block z-50 text-white text-xl hover:text-cyan-500 duration-500'>
        {
          showMenu ? "CLOSE" : "CONTACT"
        }
      </span>
      <div className='fixed top-0 left-0 z-30 w-full shadow-sm bg-gray-900 opacity-50 text-white' style={{ height: "80px" }}>
        <nav className="p-5 m-auto max-w-screen-xl md:flex items-center md:justify-between">
          <div className='flex justify-between items-center'>
            <span className='text-2xl font-[Poppins] cursor-pointer'>
              <Link to={"/"}>
                <img className="h-10 mr-2 inline" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
                Name
              </Link>
            </span>
          </div>
          <ul className={`md:flex md:items-center z-[-1] md:z-auto absolute md:static w-full left-0 md:w-auto md:py-0 
      py-4 md:pl-0 pl-7 opacity-0 md:opacity-100`}
          >
            {
              links.map((link, index) => {
                return (
                  <li className='mx-4 my-6 md:my-0' key={index}>
                    <Link to={link.path} onClick={() => setShowMenu(false)} className='text-xl hover:text-cyan-500 duration-500'>{link.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
      {
        !showMenu ? null :
          <Overlay />
      }
    </>
  );
};

export default NavBar;