import React from 'react';
import ClientTable from '../UI/clientTable/clientTable';
import './table.scss';
import client from '../../resources/img/client.svg';

const Table = () => {
    const data1 = [
        { name: "Leslie Alexander", email: "lesie.alexander@example.com", date: "10/10/2020", visit: "09:15-09:45am", doctor: "Dr. Jacob Jones", conditions: "Mumps Stage II" },
        { name: "Ronald Richards", email: "ronald.richards@example.com", date: "10/12/2020", visit: "12:00-12:45pm", doctor: "Dr. Theresa Webb", conditions: "Depression" },
        { name: "Jane Cooper", email: "jane.cooper@example.com", date: "10/13/2020", visit: "01:15-01:45pm", doctor: "Dr. Jacob Jones", conditions: "Arthritis" },
        { name: "Robert Fox", email: "robert.fox@gmail.com", date: "10/14/2020", visit: "02:00-02:45pm", doctor: "Dr. Arlene McCoy", conditions: "Fracture" },
        { name: "Jenny Wilson", email: "jenny.wilson@example.com", date: "10/15/2020", visit: "12:00-12:45pm", doctor: "Dr. Esther Howard", conditions: "Depression" },
    ]
    // const data2 = [
    //     { "name": "Leslie Alexander", "email": "lesie.alexander@example.com", "date": "10/10/2020", "visit": "09:15-09:45am", "doctor": "Dr. Jacob Jones", "conditions": "Mumps Stage II" },
    //     { "name": "Ronald Richards", "email": "ronald.richards@example.com", "date": "10/12/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Theresa Webb", "conditions": "Depression" },
    //     { "name": "Jane Cooper", "email": "jane.cooper@example.com", "date": "10/13/2020", "visit": "01:15-01:45pm", "doctor": "Dr. Jacob Jones", "conditions": "Arthritis" },
    //     { "name": "Robert Fox", "email": "robert.fox@gmail.com", "date": "10/14/2020", "visit": "02:00-02:45pm", "doctor": "Dr. Arlene McCoy", "conditions": "Fracture" },
    //     { "name": "Jenny Wilson", "email": "jenny.wilson@example.com", "date": "10/15/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Esther Howard", "conditions": "Depression" },
    //     { "name": "Robert Fox", "email": "robert.fox@gmail.com", "date": "10/14/2020", "visit": "02:00-02:45pm", "doctor": "Dr. Arlene McCoy", "conditions": "Fracture" },
    //     { "name": "Leslie Alexander", "email": "lesie.alexander@example.com", "date": "10/10/2020", "visit": "09:15-09:45am", "doctor": "Dr. Jacob Jones", "conditions": "Mumps Stage II" },
    //     { "name": "Ronald Richards", "email": "ronald.richards@example.com", "date": "10/12/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Theresa Webb", "conditions": "Depression" },
    //     { "name": "Jane Cooper", "email": "jane.cooper@example.com", "date": "10/13/2020", "visit": "01:15-01:45pm", "doctor": "Dr. Jacob Jones", "conditions": "Arthritis" },
    //     { "name": "Robert Fox", "email": "robert.fox@gmail.com", "date": "10/14/2020", "visit": "02:00-02:45pm", "doctor": "Dr. Arlene McCoy", "conditions": "Fracture" },
    //     { "name": "Jenny Wilson", "email": "jenny.wilson@example.com", "date": "10/15/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Esther Howard", "conditions": "Depression" },
    //     { "name": "Leslie Alexander", "email": "lesie.alexander@example.com", "date": "10/10/2020", "visit": "09:15-09:45am", "doctor": "Dr. Jacob Jones", "conditions": "Mumps Stage II" },
    //     { "name": "Ronald Richards", "email": "ronald.richards@example.com", "date": "10/12/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Theresa Webb", "conditions": "Depression" },
    //     { "name": "Jane Cooper", "email": "jane.cooper@example.com", "date": "10/13/2020", "visit": "01:15-01:45pm", "doctor": "Dr. Jacob Jones", "conditions": "Arthritis" },
    //     { "name": "Robert Fox", "email": "robert.fox@gmail.com", "date": "10/14/2020", "visit": "02:00-02:45pm", "doctor": "Dr. Arlene McCoy", "conditions": "Fracture" },
    //     { "name": "Jenny Wilson", "email": "jenny.wilson@example.com", "date": "10/15/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Esther Howard", "conditions": "Depression" },
    // ]

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
                    { 
                    data1.map((val) => {
                        return(
                            <ClientTable foto={client} name={val.name} email={val.email} date={val.date} visit={val.visit} doctor={val.doctor} conditions={val.conditions} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;