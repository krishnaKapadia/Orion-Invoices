import React, { Component } from 'react';
import {
  Row, Col, Card, CardHeader, CardBody, CardFooter,
  Table
} from 'reactstrap';

class Invoices extends Component {

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
                    <Table hover bordered>
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
                          <td>A56D</td>
                          <td>White T-Shirt with Multi-color logo</td>
                          <td>30</td>
                          <td>$4.50</td>
                          <td>$135</td>
                        </tr>

                        <tr>
                          <td>Add Item</td>
                        </tr>
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

        <Col md="4">
          <Card>
            <CardBody>
              Buttons
            </CardBody>
          </Card>
        </Col>
      </Row>

    );
  }

}

export default Invoices;
