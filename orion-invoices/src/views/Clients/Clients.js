import React, { Component } from 'react';
import TableRow from "../../components/Table/TableRow";
import AddClientModal from "../../components/Modals/AddClientModal";
import {
  Row, Col, Card, CardHeader,  CardBody, Button, Table,
  Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, FormGroup, Label
} from 'reactstrap';

class Clients extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clientCount: '', addClientModal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.setState({ clientCount: 2 });
  }

  toggle() {
    this.setState({ addClientModal: !this.state.addClientModal });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={{ size: 12 }} md={{ size: 4 }} lg={{ size: 4 }}>

            <Card>
              <CardBody>
                <h3><i className="icon-bubble blue paddingRight" /> Clients: {this.state.clientCount}</h3>
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
                      <Button outline className="fullWidthButton" color="primary" onClick={this.toggle}>Add Client</Button>
                    </Col>

                    <Col>
                      <Button outline className="fullWidthButton" color="danger">Remove Clients</Button>
                    </Col>
                  </Row>
              </CardBody>
            </Card>
          </Col>

        </Row>

        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>Clients
          </CardHeader>

          <CardBody>
            <Table hover responsive bordered>
              <thead>
                <tr>
                  <th> </th>
                  <th>Client Code</th>
                  <th>Client Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Options</th>
                </tr>
              </thead>

              <tbody>
                <TableRow type="client" clientCode="A100" clientName="Arrow Uniforms"
                clientAddress="11 Jackson Street, Petone" clientPhone="0221800317" />

                <TableRow type="client" clientCode="V987" clientName="Vanguard"
                clientAddress="19 Jackson Street, Petone" clientPhone="0274500317" />

              </tbody>

            </Table>
          </CardBody>
        </Card>

        <Modal className="modal-primary" isOpen={this.state.addClientModal} toggle={this.toggle}>
          <ModalHeader>Add new client</ModalHeader>

          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Client Code: </Label>
                <Input type="text" name="clientCode"/>
              </FormGroup>
              <FormGroup>
                <Label>Client Name: </Label>
                <Input type="text" name="clientName"/>
              </FormGroup>
              <FormGroup>
                <Label>Client Address: </Label>
                <Input type="text" name="clientAddress" />
              </FormGroup>
              <FormGroup>
                <Label>Client Phone: </Label>
                <Input type="number" name="clientPhone"/>
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }

}

export default Clients;
