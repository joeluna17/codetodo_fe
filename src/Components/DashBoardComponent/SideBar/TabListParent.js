import React from 'react'
import TabChild from './TabChild';
import Styled from 'styled-components';



const TabWrapper = Styled.div`
     margin: 0 auto;
     width:15%;
     height:100VH;
     display:flex;
     flex-flow:row wrap;
     justify-content: center;
     align-items:center;
     background-color: rgba(0, 0, 0, 0.95);
     color:white;
     box-shadow: 5px 0 10px rgba( 0, 0, 0, 0.5);
`;

const UserAvitarWrapper = Styled.div`
    display:flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items:center;
    width:100%;
    height:20vh;
    border-bottom: 1px solid white;
`;


const TabListWrapper = Styled.div`
    display:flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items:center;
    height:80vh;
    width:90%;
    border-bottom: 1px solid white;
`;

const ProfileImage = Styled.img`
    width:85px;
    height:85px;
    border-radius:50%
`


class TabListParent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            User: {
                firstName: 'Joe',
                lastName: 'Luna',
                userName: 'JLuna17',
                email:'joeluna17@yahoo.com',
                profileImg: "https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"
            },
            tabs: [
                "Dashboard",
                "User Profile",
                "Settings"
            ]
        }
    }


    render(){
        console.log('Here in the tablistparenet ', this.props)
        return(
            //need user avitar and name on top
            //need list of tabs : [dashboard, user profile, settings]
            //need bottom element with name of app
            <TabWrapper>
             <UserAvitarWrapper>
                <h3>{this.state.User.firstName + " " + this.state.User.lastName}</h3>
                <ProfileImage src={this.state.User.profileImg} alt="user-profile-picture"/>
             </ UserAvitarWrapper> 

            <TabListWrapper>
            {this.state.tabs.map((tab, index) =>{
                    return <TabChild tabName={tab} 
                    key={index} index={index}
                    handleTabClick={this.props.handleTabClick} 
                    tabIndexSelected={this.state.tabIndexSelected}/>
            }   
            )}
            </TabListWrapper>
            </ TabWrapper>
        )
    }

}


export default TabListParent;
