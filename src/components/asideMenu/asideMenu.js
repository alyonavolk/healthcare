import React from 'react';
import './asideMenu.scss'; 
import AsideItem from '../UI/asideItem/asideItem';
import logo from '../../resources/img/logo-small.svg';



class AsideMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            leftOpen: true,
        }
    }
    toggleSlidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({[key]: !this.state[key]});
    }
    
    render(){
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        return(
            <div id='aside'>
                <div id='left' className={leftOpen}>
                    <div className="menu__img" onClick={this.toggleSlidebar}><img src={logo} alt=''/></div>
                    <div className={`menu ${leftOpen}`}>
                        <div className="header">
                            <h3 className="title">Healthcare</h3>
                        </div>
                        <div className="menu__content">
                            <p className='menu__title'>MEDICINE</p>
                            <ul className='menu__items'>
                                    <li><AsideItem link='/' font='dashboard'>Dashboard</AsideItem></li>
                                    <li><AsideItem link='/appointments' font='appointments'>Appointments</AsideItem></li>
                                    <li><AsideItem link='/123' font='doctors_cyrcle'>Doctors</AsideItem></li>
                                    <li><AsideItem link='/124' font='departmens'>Departments</AsideItem></li>
                                    <li><AsideItem link='/125' font='patients'>Patients</AsideItem></li>
                                    <li><AsideItem link='/126' font='payments'>Payments</AsideItem></li>
                                    <li><AsideItem link='/127' font='help'>Help</AsideItem></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AsideMenu;