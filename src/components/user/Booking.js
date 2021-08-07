import { Tabs, Tab } from "react-bootstrap"
import BookingBeforeNow from "./History"
import BookingAfterNow from "./Booked"
import Header from "../Header"
import Canceled from "./Cancel"

export default function Booking() {

    return (
        <div>
            <Header color="rgb(5, 24, 43)" />
            <div className="container">
                <Tabs style={{ paddingTop: "100px" }} defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Booking">
                        <BookingAfterNow />
                    </Tab>
                    <Tab eventKey="profile" title="History">
                        <BookingBeforeNow />
                    </Tab>
                    <Tab eventKey="contact" title="Canceled">
                        <Canceled />
                    </Tab>
                </Tabs>
            </div>
        </div>

    )
}
