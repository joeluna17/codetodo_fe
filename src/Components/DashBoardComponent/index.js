import React from  'react';
import Styled from 'styled-components'
import TabListParent from './SideBar/TabListParent';
import TabPagesParent from './Tab_Pages/index';






const MainDashBoardWrapper = Styled.div`
     margin: 0 auto;
     width:100%;
     display:flex;
     flex-flow:row wrap;
`;

class MainDashBoard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tabIndexSelected: 0
        }
    }

    handleTabClick = (index) => {
        this.setState( 
            {
                tabIndexSelected: index
            }
        )
    }

    render(){
        return(
            <MainDashBoardWrapper>
                <TabListParent handleTabClick={this.handleTabClick} tabIndexSelected={this.state.tabIndexSelected} />
                <TabPagesParent tabIndexSelected={this.state.tabIndexSelected}/>
           </ MainDashBoardWrapper>



                    )

    }

}


export default MainDashBoard;