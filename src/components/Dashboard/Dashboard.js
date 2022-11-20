import React from 'react';
import './Dashboard.scss';
import MoneyChart from '../UI/moneyChart/moneyChart';
import SurveyChart from '../UI/surveyChart/surveyChart';
import Card from '../UI/card/card';
import bag from '../../resources/img/bag.svg';
import human1 from '../../resources/img/human1.svg';
import human2 from '../../resources/img/human2.svg';
import bank from '../../resources/img/bank.svg';
import Table from '../table/table';

const Dashboard = () => {
    const dataMonth = [45, 77, 35, 62, 43];
    const xMonth = ['1 July', '8 July', '16 July', '24 July', '31 July'];
    const dataWeek = [64, 38, 58, 40, 77, 18, 53];
    const xWeek = ['25 July', '26 July', '27 July', '28 July', '29 July', '31 July', '30 July'];

    return (
        <div className='dashboard'>
            <div className='dashboard__card'>
                <Card icon={bag} title='Appointments' volum='213'/>
                <Card icon={human1} title='New Patients' volum='104'/>
                <Card icon={human2} title='Operations' volum='24'/>
                <Card icon={bank} title='Hospital Earnings' volum='$ 12,174'/>
            </div>
            <div className='dashboard__chart'>
                <div className='dashboard__chart_up'>
                    <SurveyChart/>
                </div>
                <div className='dashboard__chart_down'>
                    <MoneyChart data={dataMonth} xCategories={xMonth} 
                    title='$ 100,000' subtitle='Income in current month' 
                    optColor='#336CFB' markColor='#A9C1FD' />
                    <MoneyChart data={dataWeek} xCategories={xWeek} 
                    title='$ 25,000' subtitle='Income in current week' 
                    optColor='#FAC032' markColor='#FCDF98' />
                </div>
            </div>
            <div className='dashboard__table'>

            </div>
        </div>
    );
};

export default Dashboard;