import React from "react";
import Main from "../../components/main";
import Container from "../../components/sharedComponent/container";
import LandingPage from "../../components/landingpage/LandingPage";
import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";
import Verify from "../../components/verify/Verify";
import SettingBoard from "../../components/settingsboard/SettingBoard";
import Complaint from "../../components/complaintboard/Complaint";
import Utility from "../../components/dash/Utilitydash";
import Airtime from "../../components/dash/Airtime";
import Cable from "../../components/dash/Cable";
import Internet from "../../components/dash/Internet";
import Hotel from "../../components/dash/Hotel";
import ToastMe from "../../components/toast";




const Dashboard = () => {
  
  return (
    

     <div>
      
       {/* <Container> */}
       
     {/* <Complaint/> */}
        {/* <Main/> */}
     {/* </Container> */}

      <LandingPage/>
      {/* <Complaint/> */}
      
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <SettingBoard/> */}
      {/* <ToastMe/> */}
      {/* <Utility/>
      <Airtime/>
      <Cable/>
      <Internet/>
      <Hotel/> */}

      
      <Verify/>
      
      </div>
    
   
  );
};

export default Dashboard;
