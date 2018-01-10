import React, { Component } from 'react';
import axios from 'axios';
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
      clientCount: '', addClientModal: false, clients: []
    };

    // Bindings
    this.toggle = this.toggle.bind(this);
    this.addClient = this.addClient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllClients = this.getAllClients.bind(this);
  }

  componentWillMount() {
    this.getAllClients();
  }

  /**
   * Retrieves all the clients associated with the user from the backend
   */
  getAllClients() {
    const result = axios.get("http://localhost:4000/api/v1/clients").then( (data) => {
      var clients = [];
      var clientCount = 0;

      data.data.clients.map( (client) => {
        clients.push({
          id: client._id, code: client.code, name: client.name,
          address: client.address, phone_number: client.phone_num
        });
        clientCount++;
      });

      this.setState({ clients, clientCount });
    });
  }

  // Toggles Add client modal
  toggle() {
    this.setState({ addClientModal: !this.state.addClientModal });
  }

  // Adds to list of clients, given a FormData object
  addClient(data) {
    var newClient = {
      code: data.get("clientCode"), name: data.get("clientName"),
      address: data.get("clientAddress"), phone: data.get("clientPhone")
    }

    var clients = this.state.clients;
    clients.push(newClient);
    this.setState({ clients });
  }

  handleSubmit(e) {
      e.preventDefault();
      // Serializes the form to give us an object containing the form's values
      const data = new FormData(e.target);
      // Delates addition to addClient method
      this.addClient(data);

      // Dismisses the modal
      this.toggle();
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
                      <Button className="fullWidthButton" color="primary" onClick={this.toggle}>Add Client</Button>
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
                {
                  this.state.clients.map( (c) => (
                    <TableRow key={c.id} type="client" clientCode={c.code} clientName={c.name}
                    clientAddress={c.address} clientPhone={c.phone_number} />
                  ))
                }

                {/* <TableRow type="client" clientCode="A100" clientName="Arrow Uniforms"
                clientAddress="11 Jackson Street, Petone" clientPhone="0221800317" />

                <TableRow type="client" clientCode="V987" clientName="Vanguard"
                clientAddress="19 Jackson Street, Petone" clientPhone="0274500317" /> */}

              </tbody>

            </Table>
          </CardBody>
        </Card>





        {/* Add client Modal */}
        <Modal className="modal-primary" isOpen={this.state.addClientModal} toggle={this.toggle}>
          <ModalHeader>Add new client</ModalHeader>

          <Form onSubmit={this.handleSubmit}>
            <ModalBody>
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
            </ModalBody>

            <ModalFooter>
              <Button color="primary" type="submit">Add</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>

        </Modal>

      </div>
    );
  }

}

export default Clients;
