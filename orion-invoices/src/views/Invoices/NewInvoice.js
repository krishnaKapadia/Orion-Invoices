import React, { Component } from 'react';
import {
  Row, Col, Card, CardHeader, CardBody, CardFooter,
  Table, Input, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NewInvoice extends Component {

  render() {
    return (
      <Row>
        <Col md="8">
          <Card className="animated fadeIn invoiceCard">
            <CardHeader>
              <h3>Invoice</h3>
            </CardHeader>

            <CardBody>
              <div className="invoice-container">
                {/* Invoice */}
                <Row className="invoiceHeader">
                  <Col md="8">
                    <img src={require('../../Assets/logo.png')} alt="Amba Logo" />
                  </Col>

                  <Col className="rightBox" md="4">
                    <h5 className="bold">Tax Invoice</h5>
                    <p>Invoice #: 9361 <br />
                      Created: January 1, 2017 <br />
                      Due: January 15, 2018</p>
                  </Col>
                </Row>

                <Row className="invoiceClientDetails">
                  {/* Client Details */}
                  <Col md="4">
                    <h5 className="bold">To:</h5>
                    <p>Krishna Kapadia<br />
                      55 Kanpur Road<br />
                      Broadmeadows<br />
                      Wellington, 6035</p>
                  </Col>

                  <Col md="4">
                    {/* Spacing purposes only */}
                  </Col>

                  {/* Client details in terms of our payment numbers */}
                  <Col className="rightBox" md="4">
                    <h5 className="bold">Details:</h5>
                    <p>GST Num: 85-105-434<br />
                      Client Num: 300452<br />
                      Our account for direct crediting<br />
                      06-0507-0052045-00</p>
                  </Col>
                </Row>

                <Row className="invoiceTableRow">
                  <Col>
                    {/* Table */}
                    <Table className="table" condensed>
                      <thead>
                        <tr>
                          <th>Order #</th>
                          <th>Description</th>
                          <th>Quantity</th>
                          <th>Unit Price</th>
                          <th>Sub total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>A56D</td>
                          <td>White T-Shirt with Multi-color logo</td>
                          <td>30</td>
                          <td>$4.50</td>
                          <td>$135</td>
                        </tr>

                        <tr>
                          <td><Input type="text" name="invoiceNumber" placeholder="Invoice Number" /></td>
                          <td><Input type="desc" name="desc" placeholder="Description" /></td>
                          <td><Input type="number" name="quantity" placeholder="Quantity"/></td>
                          <td><Input type="number" name="unitPrice" placeholder="Unit Price"/></td>
                          <td>
                            {/* Auto calculate subtotal here */}
                          </td>
                        </tr>

                        <tr>
                          <td><Button className="fullWidthButton" color="primary">Add Item</Button></td>
                          <td> {/* Spacer */} </td>
                          <td> {/* Spacer */} </td>
                          <td colSpan="2">
                            <Table bordered>
                              <tbody>
                                <tr>
                                  <td>
                                    <Row className="totals">
                                      <Col md="6">Subtotal:</Col>
                                      <Col md="6">$135</Col>
                                    </Row>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <Row className="totals">
                                      <Col md="6">Tax(15%):</Col>
                                      <Col md="6">$13.45</Col>
                                    </Row>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <Row className="totals">
                                      <Col md="6">Total:</Col>
                                      <Col md="6">$148.35</Col>
                                    </Row>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>

                            {/* <Row className="totals">
                              <Col md="6">Subtotal:</Col>
                              <Col md="6">$135</Col>
                            </Row>

                            <Row className="totals">
                              <Col md="6">Tax(15%):</Col>
                              <Col md="6">$13.45</Col>
                            </Row>

                            <Row className="totals">
                              <Col md="6">Total:</Col>
                              <Col md="6">$148.35</Col>
                            </Row> */}
                          </td>
                        </tr>

                        {/* <tr>
                          <td className="noBox"> </td>
                          <td className="noBox">  </td>
                          <td className="noBox">  </td>
                          <td colSpan="2">

                          </td>
                        </tr> */}


                      </tbody>
                    </Table>
                  </Col>
                </Row>

              <div className="invoiceFooter">
                <Row>
                  {/* Our Contact Details */}
                  <Col className="leftBox" md="4">
                    <h4>Contact Us:</h4>
                      <p>Phone: 04-939-1711 <br />
                      Fax: 04-939-1712 <br />
                      Email: amba@xtra.co.nz</p>
                  </Col>

                  <Col md="3">
                    {/* Spacing purposes only */}
                  </Col>

                  <Col className="rightBox" md="5">
                    <h4>Address:</h4>
                    <p>Address: 19-21 Jackson Street <br />
                    Petone, Wellington <br />
                    6035</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="footer">
                      <h5>All totals are final and non-negotiable. Payments must be made by the specified due date
                      with no exceptions. Unpaid accounts will incur late payment fees & collection costs</h5>
                    </div>

                  </Col>
                </Row>

              </div>


              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="0" md="4">
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <NavLink to="/invoices">
                    <Button outline className="fullWidthButton" color="primary">Save Invoice</Button>
                  </NavLink>
                </Col>

                <Col>
                  <NavLink to="/invoices">
                    <Button outline className="fullWidthButton" color="danger">Cancel</Button>
                  </NavLink>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

}

export default NewInvoice;
