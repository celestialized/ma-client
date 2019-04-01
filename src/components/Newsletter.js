import React from 'react';
import { InputGroup, Button, InputGroupAddon, Input } from 'reactstrap';

import '../styles/Newsletter.css';

const Newsletter = (props) => {
  return (
    <div>
      <div className="container mx-auto w-50 my-5">
        <div className="wrapper">
          <p className="text-center"> Join the LCWA newsletter!</p>
          <h3  className="text-center my-3">Get weekly updates about events, courses online and discounts.</h3>
          <label className="text-white mt-3">Email</label>          
          <InputGroup>
          <div className="d-flex justify-content-center">
            <Input />
            <InputGroupAddon addonType="append">
            <Button className="btn btn-primary my-2 my-sm-0">Join the newsletter</Button>
            </InputGroupAddon>
            </div>
          </InputGroup>
        
        </div>
      </div>
    </div>
  );
};


  export default Newsletter;