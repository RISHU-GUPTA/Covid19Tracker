import React, { Component } from "react";
import { instance } from "../utils/axiosconfig3";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";

export default class District extends Component {
  constructor(props) {
    super(props);

    this.state = {
      distrcits: [],
    };
  }
  componentDidMount() {
    instance
      .get("/state_district_wise.json")
      .then((res) => {
        console.log(Object.entries(res.data));
        const arr = Object.entries(res.data);
        const astate = arr.filter((a) => a[0] == this.props.state);
        const bstate = astate[0][1].districtData;
        const cstate = Object.entries(bstate);
        this.setState({ distrcits: cstate });
        console.log(cstate);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    function RenderCard({ disc }) {
      console.log(disc[1]);
      return (
        <Card body>
          <CardTitle className="blue-text">
            <h4>{disc[0]}</h4>
          </CardTitle>
          <CardText className="text-center">
            <span className="pink-text">
              {disc[1].notes}
              <br />
            </span>
            <h5 className="orange-text">
              {" "}
              Confirmed:{disc[1].confirmed}
              <br />
            </h5>
            <h5 className="green-text">
              {" "}
              Recovered:{disc[1].recovered}
              <br />
            </h5>
            <h5 className="red-text">
              {" "}
              Active: {disc[1].active}
              <br />
            </h5>
            <h5 className="black-text"> Deceased:{disc[1].deceased}</h5>
          </CardText>
        </Card>
      );
    }

    const alldistrcit = this.state.distrcits.map((item) => {
      return (
        <div className="col-sm-12 col-md-5 m-1 mb-1">
          <RenderCard disc={item} />
        </div>
      );
    });

    return (
      <>
        <Header />
        <div className="container">
          <h3 className="text-center">{this.props.state}</h3>
          <div className="row justify-content-center">{alldistrcit}</div>
        </div>
      </>
    );
  }
}
