import React from 'react';
import './profile.scss';
import bell from '../../../resources/img/ring.svg';

const Profile = (props) => {
    return (
        <div className='profile'>
            <div className='profile__bell'>
                <img src={bell} alt='' />
                <p>{props.count}</p>
            </div>
            <div className='profile__icon'>
                <img src={props.img} alt='' />
            </div>
        </div>
    );
};

export default Profile;