import './Sidebar.scss';
import Gravatar from 'react-gravatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faTasks, faCalendarAlt, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Logo from '../../assets/logo_white.svg';
import { useState } from 'react';

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
        path: '/',
        active: true
    },
    {
        name: 'Tasks',
        logo: faTasks,
        path: '/',
        active: false
    },
    {
        name: 'Calendar',
        logo: faCalendarAlt,
        path: '/',
        active: false
    }
];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <div className="sidebar__title">
                    <img width={36} src={Logo} />
                    <span className="sidebar__name">FoxTask</span>
                </div>
                <div className="sidebar__collapse" onClick={() => setCollapsed(!collapsed)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            </div>
            <div className="sidebar__middle">
                {
                    routes.map(el => {
                        return (
                            <div className={`sidebar__route ${el.active && 'sidebar__route__active'}`}>
                                <div className="route__icon"><FontAwesomeIcon icon={el.logo} /></div>
                                <span className="route__text">{ el.name }</span>
                            </div>
                        );
                    })
                }
            </div>
            <div className="sidebar__bottom">
                <motion.div className="sidebar__profile" whileHover="hover">
                    <div className="profile__left">
                        <Gravatar className="profile__picture" size={32} email="yyakovliev02@gmail.com" />
                        <span className="profile__name">Jenya</span>
                    </div>
                    <motion.div
                        className="profile__right"
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