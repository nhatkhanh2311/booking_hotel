import { Tabs, Tab } from "react-bootstrap";
import StatisticBooking from "./StatisticBooking";
import StatisticGrossRevenue from "./StatisticGrossRevenue";

export default function Booking() {

    return (
        <div>
            <div className="container" >
                <h1 style={{ textAlign:'center' }}>Statistic</h1>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-4">
                    <Tab eventKey="home" title="Statistic Gross Revenue">
                        <StatisticGrossRevenue/>
                    </Tab>
                    <Tab eventKey="profile" title="Statistic Booking">
                        <StatisticBooking/>
                    </Tab>
                    
                </Tabs>
            </div>
        </div>
    );
}
