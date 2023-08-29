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
import Cards from '../card-component/card';

    // import Welcome from '../Welcome'

    import dataset from "../../images/dataset.png";
    import certified from "../../images/certified.jpg";
    import registered from "../../images/registered.jpeg";
let cardDetails=[{
  id:1,
  image:dataset,
buttonName:"DataSet",
certified_logo:certified,
certified_text:"Certified",
register_logo:registered,
register_text:"Registered",
meta_quality:20 ,
node_heading:"Employee Salary Details",
button_alation:"Alation",
name:"Sathish",
}
,{
  id:2,
  image:dataset,
buttonName:"MyDataSet",
certified_logo:certified,
certified_text:"Certified",
register_logo:registered,
register_text:"Registered",
meta_quality:50 ,
node_heading:"Purchase Details",
button_alation:"Alation",
name:"Jeevitha",
},
{
  id:3,
  image:dataset,
buttonName:"DataSet",
certified_logo:certified,
certified_text:"Certified",
register_logo:registered,
register_text:"Registered",
meta_quality:80,
node_heading:"Sales of the Month",
button_alation:"Alation",
name:"Sai Kiran Reddy",
}
,
{
  id:4,
  image:dataset,
buttonName:"DataSet",
certified_logo:certified,
certified_text:"Certified",
register_logo:registered,
register_text:"Registered",
meta_quality:90,
node_heading:"Recordings of July",
button_alation:"Ranger",
name:"Saha",
}

]


const TabButton=()=> {
  return(
    <div justify-content-center>
    <Tabs
    defaultActiveKey="profile"
    id="justify-tab-example"
    className="mb-3 custom-tab "
  justify
  >
    
    <Tab eventKey="profile" title="Collections" >
      Tab content for Profile
    </Tab>
    <Tab eventKey="home" title="Nodes" className="d-flex flex-row flex-wrap justify-content-start">
      {
      cardDetails.map((x)=>{
        return <Cards key={x.id} image={x.image} 
        buttonName={x.buttonName} 
         certified_logo={x.certified_logo}
         certified_text={x.certified_text}
         register_logo={x.register_logo}
         register_text={x.register_text}
         meta_quality={x.meta_quality}
         node_heading={x.node_heading}
         button_alation={x.button_alation}
         name={x.name} />
      })
      }

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