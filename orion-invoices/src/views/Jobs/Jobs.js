import React, { Component } from 'react';
import Order from '../../components/Table/Order';
import { NavLink } from 'react-router-dom';

import {
  Card, CardHeader, CardBody, Row, Col, Button,
  Table

} from 'reactstrap';

class Jobs extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={{ size: 12 }} md={{ size: 4 }} lg={{ size: 4 }}>
            <Card>
              <CardBody>
                <h3><i className="icon-drawer blue paddingRight" /> Current Orders: 10</h3>
              </CardBody>
            </Card>
          </Col>

          <Col xs={{ size: 12 }} md={{ size: 4 }} lg={{ size: 4 }}>
            <Card>
              <CardBody>
                <h3><i className="icon-drawer blue paddingRight" /> Completed Orders: 1000</h3>
              </CardBody>
            </Card>
          </Col>

          <Col xs={{ size: 12 }} md={{ size: 4 }} lg={{ size: 4 }}>
            <Card>
              <CardBody>
                <NavLink to="/orders/newOrder">
                  <Button className="fullWidthButton" color="primary" onClick={this.toggle}>New Order</Button>
                </NavLink>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>Orders
          </CardHeader>

          <CardBody>
            {/* add, responsive prop to tag to make the table responsive */}
            <Table bordered>
              <thead>
                <tr>
                  <th> </th>
                  <th>Order Code</th>
                  <th>Client Name</th>
                  <th>Order List</th>
                  <th>Created</th>
                  <th>Options</th>
                </tr>
              </thead>

              <tbody>
                <Order code="1" clientName="Arrow Uniforms"
                  orderList={ {o1: "Caps with red logo x 10: $5.00 each", o2: "Caps with white logo x 50: $4.50 each"}}
                  created="15 Nov 2017"
                />
              </tbody>

            </Table>
          </CardBody>
        </Card>

      </div>
    );
  }

}

export default Jobs;
