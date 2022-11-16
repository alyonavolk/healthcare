import React from 'react';
import './Dashboard.scss';
import MoneyChart from '../UI/moneyChart/moneyChart';
import SurveyChart from '../UI/surveyChart/surveyChart';

const Dashboard = () => {
    const dataMonth = [45, 77, 35, 62, 43];
    const xMonth = ['1 July', '8 July', '16 July', '24 July', '31 July'];
    const dataWeek = [64, 38, 58, 40, 77, 18, 53];
    const xWeek = ['25 July', '26 July', '27 July', '28 July', '29 July', '31 July', '30 July'];

    return (
        <div className='dashboard'>
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
        </div>
    );
};

export default Dashboard;