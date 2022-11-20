import React from 'react';
import './appointments.scss';
import Table from '../table/table';

const Appointments = () => {
    return (
        <div className='appointments'>
            <h2 className='appointments__title'>
                Appointments
            </h2>
            <div className='appointments__table'>
                <Table />
            </div>
        </div>
    );
};

export default Appointments;