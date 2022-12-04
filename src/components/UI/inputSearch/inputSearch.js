import React, { useState } from 'react';
import './inputSearch.scss';
import '../../../style/iconsFont.scss';

const InputSearch = ({...props}) => {
    return (
        <div className='inputSearch'>
            <input type='text' value={props.value} placeholder='Search'
            onChange={props.onChange} />
        </div>
    );
};

export default InputSearch;