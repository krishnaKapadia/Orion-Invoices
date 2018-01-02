import React, { Component } from 'react';
import TableRow from "../../components/Table/TableRow";
import {
  Row, Col, Card, CardHeader,  CardBody, Button, Table,
  Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, FormGroup, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Invoices extends Component {

  constructor(props) {
    super(props);

    this.state = {
      invoiceCount: 100,
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={{ size: 12 }} md={{ size: 4 }} lg={{ size: 4 }}>

            <Card>
              <CardBody>
                <h3><i className="icon-bubble blue paddingRight" /> Invoices: {this.state.invoiceCount}</h3>
              </CardBody>
            </Card>
          </Col>

          <Col xs={{ size: 0 }} md={{ size: 4 }} lg={{ size: 4 }}>
            {/* EMPTY */}
          </Col>

          <Col xs={{ size: 12 }} md={{ size: 4 }} lg={{ size: 4 }}>
            <Card>
              <CardBody>
                  <Row>
                    <Col>
                      <NavLink to="/invoices/createInvoice">
                        <Button className="fullWidthButton" color="primary" onClick={this.toggle}>Create Invoice</Button>
                      </NavLink>
                    </Col>

                    {/* <Col>
                      <Button outline className="fullWidthButton" color="danger">Remove Invoice</Button>
                    </Col> */}
                  </Row>
              </CardBody>
            </Card>
          </Col>

        </Row>

        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>Invoices
          </CardHeader>

          <CardBody>
            <Table hover responsive bordered>
              <thead>
                <tr>
                  <th> </th>
                  <th>Invoice Number</th>
                  <th>Client Name</th>
                  <th>Date</th>
                  <th>Paid</th>
                  <th>Options</th>
                </tr>
              </thead>

              <tbody>
                <TableRow type="invoice" invoiceNumber="A100" clientName="Arrow Uniforms"
                date="20/12/2017" paid="1" />

                <TableRow type="invoice" invoiceNumber="V987" clientName="Vanguard"
                date="19/12/2020" paid="0" />

              </tbody>

            </Table>
          </CardBody>
        </Card>

      </div>
    );
  }

}

export default Invoices;
