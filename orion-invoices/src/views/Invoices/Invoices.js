import React, { Component } from 'react';
import TableRow from "../../components/Table/TableRow";
import {
  Row, Col, Card, CardHeader,  CardBody, Button, Table,
  Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, FormGroup, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Invoices extends Component {

  constructor(props) {
    super(props);

    this.state = {
      invoices: [], invoiceCount: 0,
    }

    // this.addInvoice = this.addInvoice.bind(this);
    this.getAllInvoices = this.getAllInvoices.bind(this);
  }

  componentDidMount() {
    // this.forceUpdate();
    this.getAllInvoices();
  }

  /**
  * Retrieves all the invoices accociated with the business associated with the logged in user
  */
  getAllInvoices() {
    axios.get("http://localhost:4000/api/v1/invoices").then( (data) => {
      var invoices = [];
      var invoiceCount = 0;

      data.data.invoices.map( (invoice) => {
        var date = new Date(invoice.date);
        date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        invoice.date = date;

        invoices.push(
          invoice
          // id: invoice._id, inv_number: invoice.inv_number,
          // client_code: invoice.client_code, client_name: invoice.client_name,
          // client_address: invoice.client_address, subtotal: invoice.subtotal,
          // tax_rate: invoice.tax_rate, total: invoice.total, items: invoice.items
        );
        invoiceCount++;
      });

      this.setState({ invoices, invoiceCount });
    }).catch( (err) => {
      if(err) console.log(err);
    });
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
                  <th>Invoice Number</th>
                  <th>Client Name</th>
                  <th>Date Created</th>
                  <th>Paid</th>
                  <th>Options</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.invoices.map( (e) => {
                    return(
                      <TableRow key={e._id} type="invoice" data={e} togglePaid={this.togglePaid}/>
                    )
                  })
                }
              </tbody>

            </Table>
          </CardBody>
        </Card>

      </div>
    );
  }

}

export default Invoices;
