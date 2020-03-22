import React from 'react';
import Styled from 'styled-components';

const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ] 


const rawDate = new Date();
const year = rawDate.getFullYear();
const day = rawDate.getDate();
const month = rawDate.getMonth();
const dayOfWeekNum = rawDate.getDay();
const dayOfWeek = days.filter((day, index)=>{
    if (dayOfWeekNum === index){
        return day
    }else{
       return null
    }
})

const formatedCurrentDate = `${month}\\${day}\\${year}`;


const TabHeader = props => {

    return (
        <div>
         <h3 style={{width: '75%'}}>{props.pageName}</h3>
         <h4>{dayOfWeek+" "+formatedCurrentDate}</h4>
        </div>
    )


}

export default TabHeader;