import React from 'react';
import './card.scss';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card__img'>
                <img src={props.icon} alt='' />
            </div>
            <div className='card__content'>
                <p className='card__title'>
                    {props.title}
                </p>
                <p className='card__volum'>
                    {props.volum}
                </p>
            </div>
        </div>
    );
};

export default Card;