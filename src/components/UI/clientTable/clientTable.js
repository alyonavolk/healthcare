import React from 'react';
import './clientTable.scss';
import pencil from '../../../resources/img/pencil.svg';
import trash from '../../../resources/img/trash.svg';

const ClientTable = (props) => {
    return (
        <tr className='clientTable'>
            <td>
                <img src={props.foto} alt='' />
                <p>{props.name}</p>
            </td>
            <td>
                <p>{props.email}</p>
            </td>
            <td>
                <p>{props.date}</p>
            </td>
            <td>
                {props.visit}
            </td>
            <td>
                {props.doctor}
            </td>
            <td>
                {props.conditions}
            </td>
            <td>
                <img src={pencil} alt='' />
                <img src={trash} alt='' />
            </td>
        </tr>
    );
};

export default ClientTable;