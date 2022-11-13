import React from 'react';
import { NavLink } from 'react-router-dom';
import './asideItem.scss';
import '../../../style/iconsFont.scss';

const AsideItem = ({children}) => {
    return (
        <div className='asideItem'>
            <NavLink className='icon-doctors_cyrcle' activeClassName='' to='/'>{children}</NavLink>
        </div>
    );
};

export default AsideItem;