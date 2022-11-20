import React from 'react';
import { NavLink } from 'react-router-dom';
import './asideItem.scss';
import '../../../style/iconsFont.scss';

const AsideItem = ({children, link, font}) => {
    return (
        <NavLink className={`asideItem icon-${font}`} exact activeClassName='asideItem_active' to={link}>{children}</NavLink>
    );
};

export default AsideItem;