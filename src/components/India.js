import React, { Component } from "react";
import { instance } from "../utils/axiosconfig2";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import "../Cards.css";
import Header from "./Header";
import Footer from "./Footer";

export default class India extends Component {
  constructor(props) {
    super(props);

    this.state = {
      states: [],
    };
  }

  componentDidMount() {
    instance
      .get("/states")
      .then((res) => {
        console.log(res.data.state);
        this.setState({ states: res.data.state });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    function RenderCard({ country }) {
      return (
        <>
          <MDBCol col="4" className="m-3 state-card">
            <MDBCard wide>
              <MDBCardImage
                className="view view-cascade gradient-card-header state-card-image"
                cascade
                tag="div"
              >
                <h2 className="h2-responsive mb-2 text-center">
                  {country.name}
                </h2>
                <p className="text-center">
                  <MDBIcon icon="calendar-alt" /> {country.total}
                </p>
              </MDBCardImage>
              <MDBCardBody cascade className="text-center">
                <MDBCardText>
                  <h5 className="red-text">
                    Active -{country.active} <br />
                  </h5>
                  <h5 className="green-text">
                    Cured- {country.cured}
                    <br />
                  </h5>
                  <h5 className="black-text">
                    Death- {country.death}
                    <br />
                  </h5>
                </MDBCardText>
                <a
                  href="!#"
                  className="orange-text mt-1 d-flex justify-content-end align-items-center "
                >
                  <Link to={`/india/${country.name}`}>
                    <h5 className="state-card-district-link">
                      See Districts{" "}
                      <MDBIcon
                        icon="chevron-right"
                        className="ml-2"
                        size="sm"
                      ></MDBIcon>
                    </h5>
                  </Link>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </>
      );
    }

    const allsates = this.state.states.map((item) => {
      if (item.total > 0) {
        return (
          <span key={item.id} className="col-md-4 col-12">
            <MDBRow className="md-4">
              <RenderCard country={item} />
            </MDBRow>
          </span>
        );
      } else {
        return <div></div>;
      }
    });

    return (
      <>
        <Header />
        <div className="container">
          <div className="row justify-content-center">{allsates}</div>
        </div>
        <Footer />
      </>
    );
  }
}
