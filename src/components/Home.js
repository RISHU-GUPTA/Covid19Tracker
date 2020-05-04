import React from 'react';
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView } from 'mdbreact';

const Home = (props) => {
  return (
    <MDBRow>

      <MDBCol md='4' className="mt-5">
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={require('../images/total1.png')}
              alt='confirmed'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='font-weight-bold pink-text text-center'>
            Total Confirmed
            </MDBCardTitle>

            <MDBCardText>
            <h2>{props.total}</h2> 
            </MDBCardText>

          
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4' className="mt-5">
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={require('../images/nurse1.png')}
              alt='recovered'
            />
          </MDBView>

          <MDBCardBody className='text-center card-body card-body-cascade'>
            {/* <h5 className='pink-text'>
              <MDBIcon icon='utensils' /> Culinary
            </h5> */}

            <MDBCardTitle className='font-weight-bold green-text text-center' >
            Total Recovered
            </MDBCardTitle>

            <MDBCardText>
         <h2>  {props.recover}</h2>
            </MDBCardText>

           
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md='4' className="mt-5">
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={require('../images/death1.png')}
              alt='death'
            />
          </MDBView>

          <MDBCardBody className='text-center'>
            {/* <h5 className='pink-text'>
              <MDBIcon icon='utensils' /> Culinary
            </h5> */}

            <MDBCardTitle className='font-weight-bold text-center'>
            Total Deaths
            </MDBCardTitle>

            <MDBCardText>
          <h2>{props.dead}</h2>  
            </MDBCardText>

          
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>
  )
}

export default Home;
