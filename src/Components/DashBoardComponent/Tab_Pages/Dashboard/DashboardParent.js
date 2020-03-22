import React from 'react'
import Styled from 'styled-components'
import TabHeader from '../TabPageCommonComp/TabHeader';
import CardView from '../TabPageCommonComp/CardView';
import { HeadingWrapper } from '../TabPageCommonStyles/TabPageWrapper';


const DashboardWrapper = Styled.div`
    display:none;
    width:100%;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
`;


class DashBoard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render(){

        return(

             <DashboardWrapper style={{display: this.props.tabIndexSelected === 0? 'flex': 'none'}}>
                <HeadingWrapper>
               <TabHeader pageName={"Dashboard"}/>
               </HeadingWrapper>
               <CardView title={"Some Prop Tile"} value={"Some Prop Value"}/>
               <CardView title={"Some Prop Tile 0"} value={"Some Prop Value 0"} width={210} height={210}/>
               <CardView title={"Some Prop Tile 1"} value={"Some Prop Value 1"}/>
             </DashboardWrapper>

             )

    }

}


export default DashBoard;








