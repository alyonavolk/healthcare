import React, { useState } from 'react';
import './inputSearch.scss';
import '../../../style/iconsFont.scss';

const InputSearch = () => {
    const [value, setValue] = useState('');
    return (
        <div className='inputSearch'>
            <input type='text' value={value} placeholder='Search'
            onChange={event => setValue(event.target.value)} />
        </div>
    );
};

export default InputSearch;