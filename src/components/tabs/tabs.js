

import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import "../tabs/tabs.scss";
import "../tabs/tabs.css";
import Cards from "../card-component/card";

import { useCart } from "../global-component/global";

const TabButton = () => {
  const { cardDetails } = useCart();
  return (
    <div justify-content-center>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3 custom-tab "
        justify
      >
        <Tab eventKey="profile" title="Collections">
          Tab content for Profile
        </Tab>
        <Tab
          eventKey="home"
          title="Nodes"
          className="d-flex flex-row flex-wrap justify-content-start"
        >
          {cardDetails.map((x) => {
            return (
              <Cards
                key={x.id}
                image={x.image}
                buttonName={x.buttonName}
                certified_logo={x.certified_logo}
                certified_text={x.certified_text}
                register_logo={x.register_logo}
                register_text={x.register_text}
                meta_quality={x.meta_quality}
                node_heading={x.node_heading}
                button_alation={x.button_alation}
                name={x.name}
              />
            );
          })}
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabButton;
