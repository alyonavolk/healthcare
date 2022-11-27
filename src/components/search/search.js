import React from 'react';
import './search.scss';
import Profile from '../UI/profile/profile';
import InputSearch from '../UI/inputSearch/inputSearch';
import avatar from '../../resources/img/avatar.svg';

const Search = () => {
    return (
        <div className='search'>
            <div className='search__input'>
                <InputSearch />
            </div>
            <div className='search__profile'>
                <Profile img={avatar} count='1'/>
            </div>
        </div>
    );
};

export default Search;