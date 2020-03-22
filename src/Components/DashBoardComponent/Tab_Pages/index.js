import React from 'react';
import Dashboard from './Dashboard/DashboardParent'
import UserProfile from './UserProfile/UserProfile'
import Settings from './Settings/Settings';
import Styled from 'styled-components';

const TabPagesWrapper = Styled.div`
     margin: 0 auto;
     width:85%;
     height:100VH;
     display:flex;
     flex-flow:row wrap;
     overflow: hidden;
     padding: 2%;
    
`;





class TabPagesParent extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        console.log(this.props)
        // this is where are the tab pages List components will be loaded : [Dashboard Page, User Profile Page, Settings Page]
        return(
            <TabPagesWrapper>
                <Dashboard tabIndexSelected={this.props.tabIndexSelected} />
                <UserProfile tabIndexSelected={this.props.tabIndexSelected} />
                <Settings tabIndexSelected={this.props.tabIndexSelected} />
            </ TabPagesWrapper>

        )
    }

}


export default TabPagesParent;