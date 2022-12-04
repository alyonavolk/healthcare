import React, {useState, useMemo, useTransition} from 'react';
import './appointments.scss';
import Profile from '../UI/profile/profile';
import InputSearch from '../UI/inputSearch/inputSearch';
import ClientTable from '../UI/clientTable/clientTable';
import Button from '../UI/button/button';

import data1 from '../../resources/data';
import avatar from '../../resources/img/avatar.svg';
import client from '../../resources/img/client.svg'
import arrow from '../../resources/img/arrow.svg';
import arrowDef from '../../resources/img/arrowDef.svg';

const Appointments = () => {
    const data = data1;
    const [value, setValue] = useState('');
    const [posts, setPosts] = useState(data);

    const [isPending, startTransition] = useTransition();

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(value));
    }, [value]);

    const onValueChange = (e) => {
        startTransition(() => setValue(e.target.value));
    }

    return (
        <div className='appointments'>
        <div className='appointments__search'>
            <div className='search__input'>
                <InputSearch onChange={onValueChange} value={value}/>
            </div>
            <div className='appointments__search_profile'>
                <Profile img={avatar} count='1'/>
            </div>
        </div>
            <h2 className='appointments__title'>
                Appointments
            </h2>
            <div className='appointments__table'>
            <div className='appointments__row'>
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
                    filteredPosts.map((val) => {
                        return(
                            <ClientTable key={val.id} foto={client} name={val.name} email={val.email} date={val.date} visit={val.visit} doctor={val.doctor} conditions={val.conditions} />
                        )
                    })}
                </tbody>
            </table>
        </div>
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