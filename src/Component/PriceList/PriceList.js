import React from "react";
import { ListGroup } from "react-bootstrap";
import './PriceList.css'
import img1 from '../../image/Inner-map.png'

const PriceList = () => {
  return (
    <div className="container">
        <h1 className="mb- mt-4 text-left">Campground price list</h1>
      <div className="row">
          
        <div className="col-md-7 col-sm-12 pt-4">
          <ListGroup horizontal className="List mb-3" >
            <ListGroup.Item className="List"><h6>ALL SEASON</h6></ListGroup.Item>
            <ListGroup.Item className="List"><h6>PRICE LIST</h6></ListGroup.Item>
            <ListGroup.Item className="List"><h6>YEARS 2021</h6></ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal className="List" >
            <ListGroup.Item className="List">Zone A, per person</ListGroup.Item>
            <ListGroup.Item className="List">15.00$</ListGroup.Item>
            <ListGroup.Item className="List">Summer</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item className="List">Zone B, per person</ListGroup.Item>
            <ListGroup.Item className="List">10.00$</ListGroup.Item>
            <ListGroup.Item className="List">Winter</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item className="List">Child (6-12 years)</ListGroup.Item>
            <ListGroup.Item className="List">7.00$</ListGroup.Item>
            <ListGroup.Item className="List">Summer</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item className="List">Infants (0-5 years)</ListGroup.Item>
            <ListGroup.Item className="List">Gratis</ListGroup.Item>
            <ListGroup.Item className="List">Gratis</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item className="List">Pet</ListGroup.Item>
            <ListGroup.Item className="List">Free</ListGroup.Item>
            <ListGroup.Item className="List">Winter</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item className="List">Electricity</ListGroup.Item>
            <ListGroup.Item className="List">4.00$</ListGroup.Item>
            <ListGroup.Item className="List">Summer</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item className="List">Internet connection</ListGroup.Item>
            <ListGroup.Item className="List">Free</ListGroup.Item>
            <ListGroup.Item className="List">Summer</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item className="List">Vehicle on the plot</ListGroup.Item>
            <ListGroup.Item className="List">13.00$</ListGroup.Item>
            <ListGroup.Item className="List">Winter</ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col-md-5 col-sm-12">
            <div>
                <img src={img1} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
