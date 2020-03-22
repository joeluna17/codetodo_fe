import React from 'react'
import Styled from 'styled-components'
import TabHeader from '../TabPageCommonComp/TabHeader';
import { HeadingWrapper } from '../TabPageCommonStyles/TabPageWrapper';

const UserProfileWrapper = Styled.div`
    display:none;
    width:100%;
`;





class UserProfile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render(){
        return(

             < UserProfileWrapper style={{display: this.props.tabIndexSelected === 1? 'flex': 'none'}}>
               <HeadingWrapper>
                   <TabHeader pageName={"User Settings"}/>
                </HeadingWrapper>
             </ UserProfileWrapper>

             )
    }

}


export default UserProfile;