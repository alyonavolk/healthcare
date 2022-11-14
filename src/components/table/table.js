import React from 'react';
import ClientTable from '../UI/clientTable/clientTable';
import './table.scss';
import client from '../../resources/img/client.svg';

const Table = () => {
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Visit Time</th>
                        <th>Doctor</th>
                        <th>Conditions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <ClientTable foto={client} name='Leslie Alexander' email='lesie.alexander@example.com' date='10/10/2020' visit='09:15-09:45am' doctor='Dr. Jacob Jones' conditions='Mumps Stage II' />
                    <ClientTable name='' email='' date='' visit='' doctor='' conditions='' />
                    <ClientTable name='' email='' date='' visit='' doctor='' conditions='' border='brBt' />
                </tbody>
            </table>
        </div>
    );
};

export default Table;