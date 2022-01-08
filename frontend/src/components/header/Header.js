import './Header.scss';
import { useState } from 'react';
import NavigationButton from '../navigationButton/NavigationButton';

import ImgAvatar from '../../assets/test.jpg';
import IconSettings from '../../assets/settings.svg';
import IconSettingsActive from '../../assets/settings-active.svg';
import IconLogout from '../../assets/logout.svg';
import IconLogoutActive from '../../assets/logout-active.svg';
import IconDropDown from '../../assets/dropdown.svg';

const routes = [
  {
    name: 'Log out',
    logo: IconLogout,
    logoActive: IconLogoutActive,
    path: '/login'
  },
  {
    name: 'Settings',
    logo: IconSettings,
    logoActive: IconSettingsActive,
    path: '/settings'
  }
];

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleProfileOpen = () => {
    if (profileOpen) {
      setProfileOpen(false);
    }
    setProfileOpen(!profileOpen);
  };

  return (
    <div className="header">
      <div className="header__wrapper">
        <span className="header__lable">Home</span>
      </div>
      <div
        className={profileOpen ? 'profile__back' : 'profile__back--disable'}
        onClick={handleProfileOpen}></div>
      <div className="profile" onClick={handleProfileOpen}>
        <div className={profileOpen ? 'profile__wrapper' : 'profile__wrapper--disabled'}>
          <div className="header__profile">
            <img className="profile__img" src={ImgAvatar}></img>
            <span className="profile__name">Joe Biden</span>
            <img
              className={`profile__icon ${profileOpen ? 'profile__icon--rotated' : ''}`}
              src={IconDropDown}></img>
          </div>
          <div className={profileOpen ? 'profile__nav' : 'profile__nav--disabled'}>
            {routes.map((el) => {
              return (
                <NavigationButton
                  path={el.path}
                  name={el.name}
                  logo={el.logo}
                  logoActive={el.logoActive}
                  key={el.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
