
import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import logo  from  "../../images/background/collage3.png"
class GalleryPage extends Component {
  render() {
    return (
      <div className ="myDiv">
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={logo} />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={logo} />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={logo} />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </div>
    )
  }
}

export default GalleryPage;