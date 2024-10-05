/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";


class Scrolling extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
        >
          <div >
            <img
            
              src="https://media.istockphoto.com/photos/car-engine-disassembled-many-parts-picture-id1139697726?s=612x612"
              height="600px"
            />
          </div>
          <div>
            <img
              src="https://www.easypacelearning.com/design/images/carparts.jpg"
              height="600px"
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/set-of-car-parts-isolated-on-white-background-3d-picture-id1034249292?s=612x612"
              height="600px"
            />
          </div>
        </Carousel>

        <div style={{ marginTop: "6rem" }}>
          <div
            style={{
              margin: "auto",
              display: "block",
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "2rem",
              fontWeight:"bolder"
            }}
          >
            Our Partners
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-sm-12 col-md-8">
              <div className="row">
                <div className="col-md-3">
                  <div>
                    <img
                      src="https://image.flaticon.com/icons/png/512/888/888863.png"
                      height="100px"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHOanPSHlprYvJ759BVQhI2KZINJCmP98a5Arlezf9s0kY_EJkKMQW7U2mpjtfM1DTnY&usqp=CAU"
                      height="100px"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img
                      src="https://cerebral-overload.com/wp-content/uploads/2019/04/rm0zqapy_400x400.jpg"
                      height="100px"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img
                      src="https://www.eimesc.co.il/wp-content/uploads/2015/05/ASUS-Logo.png"
                      height="100px"
                    />
                  </div>                  
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src="https://static.wixstatic.com/media/179655_7eb0593a2f064500989d33bf57fd5877~mv2.jpg"
                      height="100px"
                    />
                  </div>
                  
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src="https://www.galax.com/media/wysiwyg/corpsite/page/download/galax_logo_guideline/galax_logo.png"
                      height="100px"
                    />
                  </div>                 
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/lg-3-283092.png"
                      height="100px"
                    />
                  </div>                 
                </div>
                <div className="col-md-3">
                <div>
                    <img
                      src="https://img.flaticon.com/icons/png/512/882/882836.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      height="100px"
                    />
                  </div>                 
                </div>
              </div>
            </div>

            <div className="col"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Scrolling;
