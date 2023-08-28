// import React from "react"
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// // import App from "../../App";
// // import ReactDOM from "react";

// const TabButton=()=>{
//     return(
//     <div>
//         <Tabs
//       defaultActiveKey="profile"
//       id="fill-tab-example"
//       className="mb-3"
//       fill
//     >
     
//      <Tab eventKey="home" title="Home">
//         Tab content for Home
//       </Tab>
//       <Tab eventKey="profile" title="Profile">
//         Tab content for Profile
//       </Tab>



//     </Tabs>

// </div>
    



//     )}
// ReactDOM.render(<App/>,document.getElementById("app"));

    // export default TabButton; 

    import * as React from 'react';
    import Tab from 'react-bootstrap/Tab';
    import Tabs from 'react-bootstrap/Tabs';
    // import "../tabs/tabs.scss";
    import "../tabs/tabs.css";
import Card from '../card-component/card';

    // import Welcome from '../Welcome'

const TabButton=()=> {
  return(
    <div >
    <Tabs
    defaultActiveKey="profile"
    id="justify-tab-example"
    className="mb-3 custom-tab justify-content-center"
  justify
  >
    <Tab eventKey="home" title="Home">
      < Card/>
    </Tab>
    <Tab eventKey="profile" title="Profile">
      Tab content for Profile
    </Tab>
    
  </Tabs>
  </div>
);
}
  //  return(
  //   <div>
  //   <Tabs
  //     defaultActiveKey="profile"
  //     id="justify-tab-example"
  //     className="mb-3 custom-tab d-flex-center  "
  //   >
  //     <Tab eventKey="home"  title="Nodes" className='tab-content' >
  //       <h1>Hello This is my content fo the tab </h1>
  //     </Tab>
  //     <Tab eventKey="profile" title="Collections">
  //       <Welcome />
  //     </Tab>

  //     </Tabs>
  //    </div>)}
  
   

export default TabButton;