import './Sidebar.scss';
import NavigationButton from '../navigationButton/navigationButton';

import IconHome from '../../assets/home.svg';
import IconHomeActive from '../../assets/home-active.svg';
import IconCalendar from '../../assets/calendar.svg';
import IconCalendarActive from '../../assets/calendar-active.svg';
import IconDay from '../../assets/day.svg';
import IconDayActive from '../../assets/day-active.svg';
import IconTasks from '../../assets/tasks.svg';
import IconTasksActive from '../../assets/tasks-active.svg';
import IconSettings from '../../assets/settings.svg';
import IconSettingsActive from '../../assets/settings-active.svg';
import IconSupport from '../../assets/support.svg';
import IconSupportActive from '../../assets/support-active.svg';

const routesTop = [
  {
    name: 'Home',
    logo: IconHome,
    logoActive: IconHomeActive,
    path: '/'
  },
  {
    name: 'Calendar',
    logo: IconCalendar,
    logoActive: IconCalendarActive,
    path: '/calendar'
  },
  {
    name: 'Day',
    logo: IconDay,
    logoActive: IconDayActive,
    path: '/day'
  },
  {
    name: 'Tasks',
    logo: IconTasks,
    logoActive: IconTasksActive,
    path: '/tasks'
  }
];

const routesBottom = [
  {
    name: 'Settings',
    logo: IconSettings,
    logoActive: IconSettingsActive,
    path: '/settings'
  },
  {
    name: 'Support',
    logo: IconSupport,
    logoActive: IconSupportActive,
    path: '/support'
  }
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__logo"></div>
        <nav className="sidebar__nav">
          {routesTop.map((el) => {
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
        </nav>
      </div>
      <div className="sidebar__bottom">
        <nav className="sidebar__nav">
          {routesBottom.map((el) => {
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
        </nav>
        <div className="sidebar__copyright">
          <span>© 2022 Foxtask. All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
