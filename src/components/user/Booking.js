import { Tabs, Tab } from "react-bootstrap";
import Header from "../Header";
import Booked from "./Booked";
import History from "./History";
import Canceled from "./Cancel";

export default function Booking() {

    return (
        <div>
            <Header color="rgb(5, 24, 43)"/>
            <div className="container">
                <Tabs style={{ paddingTop: "100px" }} defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Booking">
                        <Booked/>
                    </Tab>
                    <Tab eventKey="profile" title="History">
                        <History/>
                    </Tab>
                    <Tab eventKey="contact" title="Canceled">
                        <Canceled/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
