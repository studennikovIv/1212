import { useState,useEffect} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import TotalIcons from '../../logo.svg';
import BurgerIcon from '../../img_icon/burger-menu-right.svg';

// import Vector from './Vector.png';
import {
  HEADER_SECTION,
  FIXED_DIV,
  MENU_NAV,
  IMG,
  A_DIV,
  PHONE_DIV,
} from './Layout.styled.jsx';
import Footer from '../footer/Footer';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

    // Обработчик ресайза
    useEffect(() => {
      const handleResize = () => {
        // Закрываем меню, если ширина экрана больше, чем 1024px (например, для десктопа)
        if (window.innerWidth > 1024) {
          setIsMenuOpen(false);
        }
      };
  
      // Добавляем обработчик
      window.addEventListener('resize', handleResize);
  
      // Убираем обработчик при размонтировании компонента
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const closeMenuOnClick = () => {
      setIsMenuOpen(false);
    };
  return (
    <>
      <FIXED_DIV>
        <HEADER_SECTION>
          <IMG src={TotalIcons} alt="totalLogo" />
          <div className={`${isMenuOpen && "open"} [&.open]:max-lg:left-[0%] max-lg:left-[100%] transition-all grid lg:flex items-center w-[100%] max-lg:absolute max-lg:left-0 max-lg:top-[80px] max-lg:flex-col max-lg:h-[calc(100vh-80px)] max-lg:bg-[#fffc] max-lg:backdrop-blur-[10px] max-lg:overflow-auto max-lg:py-[10px]`}>
          <MENU_NAV>
              <A_DIV>
                <NavLink to="/" onClick={closeMenuOnClick}>Меню</NavLink>
              </A_DIV>
              <A_DIV>
                <NavLink to="/about_me" onClick={closeMenuOnClick}>Обо мне</NavLink>
              </A_DIV>
              <A_DIV>
                <NavLink to="/reviews" onClick={closeMenuOnClick}>Отзывы</NavLink>
              </A_DIV>
              <A_DIV>
                <NavLink to="/services" onClick={closeMenuOnClick}>Услуги</NavLink>
              </A_DIV>
              <A_DIV>
                <NavLink to="/information" onClick={closeMenuOnClick}>Информация</NavLink>
              </A_DIV>
              <A_DIV>
                <NavLink to="/articles" onClick={closeMenuOnClick}>Статьи</NavLink>
              </A_DIV>
            </MENU_NAV>
            <PHONE_DIV>
              <p>8(905) 495-95-28</p>
              <p>8(918) 042-76-87</p>
            </PHONE_DIV>
          </div>
            <img onClick={toggleMenu}  className="ml-auto w-[50px] hidden max-lg:block" src={BurgerIcon} alt="" />
        </HEADER_SECTION>
      </FIXED_DIV>
      <Outlet />
      <Footer />
    </>
  );
};
