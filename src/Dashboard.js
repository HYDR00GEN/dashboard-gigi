import React from "react";
import { act } from "react-dom/test-utils";
import { httpGetDashboards } from "./api.http";
import Bucket from "./Bucket";
import Card from "./Card";
import { Form } from "./Form";
import Popup from "./PopUp";

class Dashboard extends React.Component {
  //   constructor(props) {
  //     super(props);
  // }
  state = { cardName: "Inizio" };
  componentDidMount() {
    this.setState({
      cardName: "La mia carta",
    });
    this.getMyDashboards();
  }
  async getMyDashboards() {
    let myDashboard = {};
    try {
      const resp = await httpGetDashboards();
      myDashboard = resp.data;
    } catch (err) {
      console.log(err);
    }
    this.setState((prev) => {
      return {
        ...prev,
        myDashboard: myDashboard,
      };
    });
  }

  getMyContents(gigi) {
    return gigi.contents.map((el) => {
      return <Card descr={el.text} key={el.id} />;
    });
  }

  render() {
    const { myDashboard: dashboards } = this.state;

    let actualDashboards;
    if (dashboards) {
      console.log(dashboards);
      actualDashboards = dashboards.map((el) => {
        return (
          <>
          <Bucket title={el.name} key={el.id}>
            {this.getMyContents(el)}
          </Bucket>
          </>
        );
      });
    } else {
      actualDashboards = <h1>Cacca</h1>;
    }
    return (
      <>
        <div style={{ padding: 50 }} className="dashboard">
          {actualDashboards}
        </div>
      </>
    );
  }
}
export default Dashboard;
