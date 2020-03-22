import React from 'react';
import Styled from 'styled-components'

const Tab = Styled.div`
     margin: 1% auto;
     width:75%;
     height:75px;
     display:flex;
     flex-flow:column wrap;
     justify-content: center;
     align-items:center;
     color:white;
     
     &:hover {
        background-color:rgba(43,65,98,1);
        border-radius:10px;
      }

`;



const TabChild = (props) => {

    return(
        <Tab  onClick={()=>props.handleTabClick(props.index)}>
            <h2>{props.tabName}</h2>
        </Tab>
    )

}

export default TabChild;