import { Tabs, Tab } from "react-bootstrap"
import BookingBeforeNow from "./History"
import BookingAfterNow from "./History"
import Header from "../Header"

export default function Booking() {

    return (
        <div>
            <Header color="rgb(5, 24, 43)" />
            <div className="container">
            <Tabs style={{ paddingTop: "100px" }} defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Booking">
                    <BookingAfterNow />
                </Tab>
                <Tab eventKey="profile" title="History">
                    <BookingBeforeNow />
                </Tab>
                <Tab eventKey="contact" title="Cancel">
                    nothing
                </Tab>
            </Tabs>
            </div>
        </div>

    )
}
