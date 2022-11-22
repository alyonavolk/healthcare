import React, {useState} from 'react';
import './asideMenu.scss'; 
import AsideItem from '../UI/asideItem/asideItem';
import logo from '../../resources/img/logo-small.svg';
import cx from 'classnames';

const AsideMenu = () => {
    const [menu, setMenu] = useState(false);

    return (
        <aside className={cx('aside', menu ? 'aside_active' : 'aside_close' )}>
            <div className='menu'>
                    <div className='menu__logo' onClick={() => setMenu(!menu)}>
                        <img className='' src={logo} alt=''/>
                    </div>
                    <div className={cx('menu__content', menu ? 'menu_active' : 'menu_close' )}>
                        <div className="menu__title">
                            <h3>Healthcare</h3>
                        </div>
                        <p className='menu__subTitle'>MEDICINE</p>
                        <ul className='menu__items'>
                            <li><AsideItem link='/' font='dashboard'>Dashboard</AsideItem></li>
                            <li><AsideItem link='/appointments' font='appointments'>Appointments</AsideItem></li>
                            <li><AsideItem link='/123' font='doctors_cyrcle'>Doctors</AsideItem></li>
                            <li><AsideItem link='/124' font='departmens'>Departments</AsideItem></li>
                            <li><AsideItem link='/125' font='patients'>Patients</AsideItem></li>
                            <li><AsideItem link='/126' font='payments'>Payments</AsideItem></li>
                            <li><AsideItem link='/127' font='help'>Help</AsideItem></li>
                        </ul>
                    </div>
                </div>
        </aside>
    )
}

export default AsideMenu;