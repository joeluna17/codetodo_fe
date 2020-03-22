import React from 'react';
import  MainDashBoard from './Components/DashBoardComponent/index'
import Styled from 'styled-components';
import styled from 'styled-components';

const MainWrapper = styled.div`

    margin: 0 auto;
    width: 100%;
    display:flex;
    flex-flow:row wrap;


`;


function App() {
  return (
    // the main wrapper need to encompass the Sidebar and Tab_pages
    <MainWrapper>
        <MainDashBoard />
    </MainWrapper>
  );
}

export default App;




// this is where the Dashboard adnd/or Landing/Login the user will be located
// we will load all the Parent components here and use protected routes to let the user login

// The overall goal of this application is to allow a user to make notes on a workitem that can
// that can be tailored to their liking, but CR1 will be bare bones and have only Basic functionality
// that allows a user to prefor CRUD operation on their profile and stories and possiblt login via JWT




/* IDEAS:

    - Users can create custom links to favorite sites
    - Users can see a visual of their worlflow hsitory(research timeline UI)
    - Users can are able to share reserch and Workitems (RC2 or 3)
    


*/