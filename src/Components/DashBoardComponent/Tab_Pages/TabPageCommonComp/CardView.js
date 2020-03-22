import React from 'react';
import Styled from 'styled-components';





//we can alter through props the width and height : COMPLETE
//we can alter through props the background and color : NOT COMPLETE
//on hover over card component box-shadow changes for UI acknowledgemnt: COMPLETE
//the card should allow 30% for the title and 70% for the value: NOT COMPLETE
//USE CASES:
//         - This card should be used exsclusivly for baisic value outputs.

const CardView = props => {

    const CardViewWrapper = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    width:${(props.width || 250 ) + 'px'};
    height:${(props.height || 250) + 'px'};
    margin: 1%;
    border:1px solid rgba(0,0,0,0.3);
    border-radius 10px;
    box-shadow: 0 5px 12px 0 rgba(0,0,0,0.3);

    &:hover {
         box-shadow: 0 5px 8px 0 rgba(0,0,0,0.6);
      }

`;

const TitleWrapper = Styled.h4`
    font-weight:bold;
    border-bottom: 1px solid rgba(0,0,0,0.3);
`;



    return (
        <CardViewWrapper>
            <TitleWrapper>{props.title}</TitleWrapper>
            <h4>{props.value}</h4>
        </CardViewWrapper>

    )
}

export default CardView;

