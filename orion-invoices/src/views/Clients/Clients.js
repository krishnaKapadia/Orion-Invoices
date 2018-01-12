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
    this.deleteClient = this.deleteClient.bind(this);
    this.updateClient = this.updateClient.bind(this);
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

  /**
   * POSTS a new client to the API. Needs a FormData Object
   */
  addClient(data) {
    var newClient = {
      code: data.get("clientCode"), name: data.get("clientName"),
      address: data.get("clientAddress"), phone_num: data.get("clientPhone")
    }

    // Perform axios POST operation
    axios.post("http://localhost:4000/api/v1/clients", newClient).then( (response) => {
      console.log(response);
      /**
       * Adds to local state to improve performace and removing the need to reload
         after submittion to get new database data
       */
      var clients = this.state.clients;
      newClient.id = response.data.client._id;

      clients.push(newClient);
      this.setState({ clients, clientCount: this.state.clientCount + 1 });

    }).catch((err) => {
      // TODO show error to user in a notification window
      if(err) console.log(err);
    })
  }

  /**
  * Removes the particular client from the state, Passed to TableRow
  */
  deleteClient(id) {
    var clients = this.state.clients;
    var filteredClients = clients.filter( (client) => {
      return client.id !== id;
    });

    this.setState( { clients: filteredClients, clientCount: this.state.clientCount - 1 })
  }

  /**
  * Updates the particular client in the state, Passed to TableRow
  */
  updateClient(id, data) {
    var clients = this.state.clients;
    var client = clients.find( (c) => {
      return c.id === id;
    });

    client = data;
    var foundIndex = clients.findIndex(x => x.id == id);
    clients[foundIndex] = client;

    this.setState( { clients, clientCount: this.state.clientCount - 1 })
  }

  /**
   * Handles delegation of operations on form submit
   */
  handleSubmit(e) {
    e.preventDefault();
    // Serializes the form to give us an object containing the form's values
    // e.target.clientAddress = "Not Added";
    const data = new FormData(e.target);

    // Handles the case where address isnt inputted
    if(data.get("clientAddress").trim() === ''){
      data.set("clientAddress", "Not added");
    }

    // Handles the case where phone isnt inputted
    if(data.get("clientPhone").trim() === '') {
      data.set("clientPhone", "Not added");
    }

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
                    <TableRow key={c.id} type="client" clientId={c.id} clientCode={c.code} clientName={c.name}
                    clientAddress={c.address} clientPhone={c.phone_number}
                    deleteClientFromState={this.deleteClient} updateClientFromState={this.updateClient}/>
                  ))
                }
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
                <Input type="text" name="clientCode" required />
              </FormGroup>
              <FormGroup>
                <Label>Client Name: </Label>
                <Input type="text" name="clientName" required />
              </FormGroup>
              <FormGroup>
                <Label>Client Address: </Label>
                <Input type="text" name="clientAddress" />
              </FormGroup>
              <FormGroup>
                <Label>Client Phone: </Label>
                <Input type="number" name="clientPhone" />
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
