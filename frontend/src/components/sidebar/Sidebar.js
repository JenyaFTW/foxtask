import './Sidebar.scss';
import Gravatar from 'react-gravatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faTasks, faCalendarAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Logo from '../../assets/logo_white_alt.svg';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const hoverMotion = {
    hover: {
        rotate: 90,
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const routes = [
    {
        name: 'Home',
        logo: faHome,
        path: '/'
    },
    {
        name: 'Tasks',
        logo: faTasks,
        path: '/tasks'
    },
    {
        name: 'Calendar',
        logo: faCalendarAlt,
        path: '/calendar'
    }
];

const Sidebar = () => {
    const history = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const checkRouteActive = path => {
        return history.pathname === path;
    };

    return (
        <div className={collapsed ? 'sidebar__collapsed' : 'sidebar'}>
            <div className={collapsed ? 'sidebar__top__collapsed' : 'sidebar__top'}>
                <div className={`sidebar__title ${collapsed && 'text__collapsed'}`}>
                    <img width={36} alt="Logo" src={Logo} />
                    <span className="sidebar__name">FoxTask</span>
                </div>
                <div className="sidebar__collapse" onClick={() => setCollapsed(!collapsed)}>
                    <FontAwesomeIcon icon={collapsed ? faChevronRight : faChevronLeft} />
                </div>
            </div>
            <div className="sidebar__middle">
                {
                    routes.map(el => {
                        return (
                            <Link to={el.path} key={el.name} className={`sidebar__route ${checkRouteActive(el.path) && 'sidebar__route__active'} ${collapsed && 'sidebar__route__collapsed'}`}>
                                <div className="route__icon"><FontAwesomeIcon icon={el.logo} /></div>
                                <span className={`route__text ${collapsed && 'text__collapsed'}`}>{ el.name }</span>
                            </Link>
                        );
                    })
                }
            </div>
            <div className={collapsed && 'sidebar__bottom__collapsed'}>
                <motion.div className={collapsed ? 'sidebar__profile__collapsed' : 'sidebar__profile'} whileHover="hover">
                    <div className="profile__left">
                        <Gravatar className="profile__picture" size={32} email="yyakovliev02@gmail.com" />
                        <span className={`profile__name ${collapsed && 'text__collapsed'}`}>Jenya</span>
                    </div>
                    <motion.div
                        className={`profile__right ${collapsed && 'text__collapsed'}`}
                        variants={hoverMotion}
                    >
                        <FontAwesomeIcon icon={faCog} />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Sidebar;