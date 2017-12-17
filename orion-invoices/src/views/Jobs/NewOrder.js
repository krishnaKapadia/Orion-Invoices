import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardFooter,
  Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NewOrder extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        {/* <Row>
          <Col xs="12" md="4" lg="4">
            <Card>
              <CardBody>
                <h2><i className="icon-doc blue paddingRight" /> New Order</h2>
              </CardBody>
            </Card>
          </Col>
        </Row> */}


        <Row>
          <Col xs="12" md="12" lg="12">
            <Card>
              <CardHeader>New Order</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor="clientName">Client Name</Label>
                    <Input type="text" id="clientName" placeholder="Enter the clients name"/>
                  </FormGroup>
                  <Label htmlFor="orderlist">Order List:</Label>

                  <FormGroup>
                    <div>
                      <Row className="topButton">
                        <Col>
                          <Label>Item Description</Label>
                          <Input type="text" id="itemDescription" placeholder="" />
                        </Col>

                        <Col>
                          <Label>Item Quantity</Label>
                          <Input type="number" id="itemQuantity" placeholder="" />
                        </Col>

                        <Col>
                          <Label>Cost per Item</Label>
                          <Input type="number" id="itemQuantity" placeholder="" />
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" md="2" lg="2">
                          <Button className="fullWidthButton" color="primary"> + </Button>
                        </Col>
                      </Row>
                    </div>

                  </FormGroup>

                  {/* <FormGroup>
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>Item Description</th>
                          <th>Item Quantity</th>
                          <th>Cost per Item</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td><Input type="text" id="itemDescription" placeholder="" /></td>
                          <td><Input type="number" id="itemQuantity" placeholder="" /></td>
                          <td><Input type="number" id="itemCost" placeholder="" /></td>
                        </tr>
                      </tbody>

                      <tfoot>
                        <Row>
                          <Col xs="12" md="12" lg="12">
                            <Button className="fullWidthButton">+</Button>
                          </Col>
                        </Row>
                      </tfoot>
                    </Table>
                  </FormGroup> */}
                  {/* <FormGroup row>
                    <Col xs="8">
                      <FormGroup>
                        <Label htmlFor="city">City</Label>
                        <Input type="text" id="city" placeholder="Enter your city"/>
                      </FormGroup>
                    </Col>
                    <Col xs="8">
                      <FormGroup>
                        <Label htmlFor="postal-code">Postal Code</Label>
                        <Input type="text" id="postal-code" placeholder="Postal Code"/>
                      </FormGroup>
                    </Col>
                  </FormGroup> */}

                </Form>

              </CardBody>

              <CardFooter>
                  <NavLink to="/Orders">
                    <Button type="submit" size="md" color="primary"><i className="fa fa-dot-circle-o"></i> Submit Order</Button>
                  </NavLink>
                  <Button className="paddingLeft" type="reset" size="md" color="danger"><i className="fa fa-ban"></i> Reset Fields </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }

}

export default NewOrder;
