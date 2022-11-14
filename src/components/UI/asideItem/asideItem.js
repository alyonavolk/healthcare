import React from 'react';
import { NavLink } from 'react-router-dom';
import './asideItem.scss';
import '../../../style/iconsFont.scss';

const AsideItem = ({children, link, font}) => {
    return (
        <div className='asideItem'>
            <NavLink className={`icon-${font}`} activeClassName='asideItem_active' to={link}>{children}</NavLink>
        </div>
    );
};

export default AsideItem;