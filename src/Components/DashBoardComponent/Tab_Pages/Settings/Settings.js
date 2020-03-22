import React from 'react'
import Styled from 'styled-components'
import TabHeader from '../TabPageCommonComp/TabHeader';
import { HeadingWrapper } from '../TabPageCommonStyles/TabPageWrapper';

const SettingsWrapper = Styled.div`
    display:none;
    width:100%;
`;


class Settings extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render(){

        return(

             <SettingsWrapper style={{display: this.props.tabIndexSelected === 2? 'flex': 'none'}}>
                 <HeadingWrapper>
                  <TabHeader pageName={"Settings"}/>
                  </HeadingWrapper>
             </SettingsWrapper>

             )

    }

}


export default Settings;