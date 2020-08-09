
import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import logo  from  "../../images/background/collage3.png"
import { Link } from "gatsby"
class GalleryPage extends Component {
  render() {
    return (
      <div className ="myDiv">
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={logo} />
            <MDBCardBody cascade>
              <MDBCardTitle>Project1: Borail Upojati Kalyan Sangha</MDBCardTitle>
              <MDBCardText>This is a placeholder where we will write details about our project.Also User can nevigate to the project landing page by clicking the below button</MDBCardText>
                <MDBBtn><Link to="/projects/" style={{color: 'green', border: '1px solid',padding: '5px 10px 5px 5px'}}>Project Details</Link></MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={logo} />
            <MDBCardBody cascade>
              <MDBCardTitle>Project2:Education Scholarship</MDBCardTitle>
              <MDBCardText>This is a placeholder where we will write details about our project.Also User can nevigate to the project landing page by clicking the below button</MDBCardText>

                <MDBBtn><Link to="/projects/" style={{color: 'green', border: '1px solid',padding: '5px 10px 5px 5px'}}>Project Details</Link></MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={logo} />
            <MDBCardBody cascade>
              <MDBCardTitle>Project3: Medical camp for kids</MDBCardTitle>
              <MDBCardText>This is a placeholder where we will write details about our project.Also User can nevigate to the project landing page by clicking the below button</MDBCardText>
              <MDBBtn><Link to="/projects/" style={{color: 'green', border: '1px solid',padding: '5px 10px 5px 5px'}}>Project Details</Link></MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>
      </div>
    )
  }
}

export default GalleryPage;