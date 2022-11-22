import React from 'react';
import './appointments.scss';
import Table from '../table/table';
import Button from '../UI/button/button';
import arrow from '../../resources/img/arrow.svg';
import arrowDef from '../../resources/img/arrowDef.svg';

const Appointments = () => {
    return (
        <div className='appointments'>
            <h2 className='appointments__title'>
                Appointments
            </h2>
            <div className='appointments__table'>
                <Table />
                <div className='appointments__table__button'>
                    <Button><img src={arrow} alt='' /></Button>
                    <Button mix='button_num'>1</Button>
                    <Button mix='button_num'>2</Button>
                    <Button mix='button_num'>3</Button>
                    <Button ><img src={arrowDef} alt='' /></Button>
                </div>
            </div>
        </div>
    );
};

export default Appointments;