import React, { Component } from 'react';
import { Form, FormGroup, Label, Button, Input, Modal,
  ModalHeader, ModalBody, ModalFooter, Row, Col
} from 'reactstrap';
import axios from 'axios';

// Error notification
import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor';

class TableRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editModal: false,
    }

    this.toggle = this.toggle.bind(this);
    this.deleteClient = this.deleteClient.bind(this);
    this.updateClient = this.updateClient.bind(this);
  }

  toggle() {
    this.setState({
      editModal: !this.state.editModal
    })
  }

  /**
  * Deletes the client thats stored by this TableRow
  */
  deleteClient() {

    axios.delete(`http://localhost:4000/api/v1/clients/${this.props.clientId}`).then( (response) => {
      console.log(response);

      toast.success("Client deleted!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      // Remove from state
      this.props.deleteClientFromState(this.props.clientId);
    }).catch( (err) => {
      if(err) toast.error("Could not delete client", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    })
  }

  /**
  * Updates the client thats stored by this TableRow
  */
  updateClient(e) {
    e.preventDefault();
    var data = new FormData(e.target);

    // Handles the case where the address is not entered
    if(data.get("clientAddress").trim() === ''){
      data.set("clientAddress", "Not added");
    }

    // Handles the case where phone isnt inputted
    if(data.get("clientPhone").trim() === '') {
      data.set("clientPhone", "Not added");
    }

    var newClient = {
      code: data.get("clientCode"), name: data.get("clientName"),
      address: data.get("clientAddress"), phone_num: data.get("clientPhone")
    }

    axios.put(`http://localhost:4000/api/v1/clients/${this.props.clientId}`, newClient).then( (response) => {
      console.log(response);

      toast.success("Client updated!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });

      this.toggle();
      this.props.updateClientFromState(this.props.clientId, newClient);
    }).catch( (err) => {
      if(err) toast.error("Could not update client", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    });

  }

  render() {
    switch (this.props.type) {
      case 'client':
        return (
          <tr>
            <td>{this.props.clientCode}</td>
            <td>{this.props.clientName}</td>
            <td>{this.props.clientAddress}</td>
            <td>{this.props.clientPhone}</td>

            <td>
              {/* Error Toast notification */}
              <ToastContainer />

              <Button outline className="fullWidthButton" color="info" onClick={this.toggle}>Edit</Button>
            </td>

            <Modal className="modal-primary" isOpen={this.state.editModal} toggle={this.toggle}>
              <ModalHeader>Edit Client Information</ModalHeader>

              <Form onSubmit={this.updateClient}>
                <ModalBody>
                  <FormGroup>
                    <Label>Client Code: </Label>
                    <Input type="text" name="clientCode" defaultValue={this.props.clientCode} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Client Name: </Label>
                    <Input type="text" name="clientName" defaultValue={this.props.clientName} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Client Address: </Label>
                    <Input type="text" name="clientAddress" defaultValue={this.props.clientAddress} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Client Phone: </Label>
                    <Input type="number" name="clientPhone" defaultValue={this.props.clientPhone} />
                  </FormGroup>
                </ModalBody>

                <ModalFooter>
                  <div className="test">
                    <div className="floatLeft">
                      <Button outline color="danger" onClick={this.deleteClient}>Delete Client</Button>
                    </div>

                    <Button color="secondary" className="floatRight" onClick={this.toggle}>Cancel</Button>
                    <Button color="primary" type="submit" className="floatRight paddingRight">Save Changes</Button>                  </div>
                </ModalFooter>
              </Form>
            </Modal>

          </tr>
        );

      case "employee":
        return (
          <tr>
            <td>{this.props.employeeCode}</td>
            <td>{this.props.employeeName}</td>
            <td>{this.props.employeePosition}</td>
            <td>${this.props.employeeRate}</td>
            <td>{this.props.employeePhoneNumber}</td>
            <td>{this.props.employeeAddress}</td>

            <td><Button outline className="fullWidthButton" color="info" onClick={this.toggle}>Edit</Button></td>

            <Modal className="modal-primary" isOpen={this.state.editModal} toggle={this.toggle}>
              <ModalHeader>Edit Employee Information</ModalHeader>

              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label>Employee Code: </Label>
                    <Input type="text" name="clientCode" defaultValue={this.props.employeeCode} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Name: </Label>
                    <Input type="text" name="clientName" defaultValue={this.props.employeeName} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Position: </Label>
                    <Input type="text" name="employeePosition" defaultValue={this.props.employeePosition} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Hourly Rate: </Label>
                    <Input type="number" name="clientPhone" defaultValue={this.props.employeeRate} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Phone Number: </Label>
                    <Input type="number" name="clientPhone" defaultValue={this.props.employeePhoneNumber} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Address: </Label>
                    <Input type="text" name="clientAddress" defaultValue={this.props.employeeAddress} />
                  </FormGroup>
                </Form>
              </ModalBody>

              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Save Changes</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </tr>
        );

      case "invoice":
        return (
          <tr>
            <td><input type="checkbox" /></td>
            <td>{this.props.invoiceNumber}</td>
            <td>{this.props.clientName}</td>
            <td>{this.props.date}</td>
            <td><Button outline className="fullWidthButton" color="info" onClick={this.toggle}>Mark Paid</Button></td>

            <td><Button outline className="fullWidthButton" color="info" onClick={this.toggle}>Edit</Button></td>

            <Modal className="modal-primary" isOpen={this.state.editModal} toggle={this.toggle}>
              <ModalHeader>Edit Invoice Information</ModalHeader>

              <ModalBody>
                {/* NEED TO TAKE INTO ACCOUNT THE EDITING OF THE ACTUAL INVOICE ORDER, NOT JUST THE CLIENT CREDENTIALS */}
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label>Invoice Number: </Label>
                    <Input type="text" name="clientCode" defaultValue={this.props.invoiceNumber} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Client Name: </Label>
                    <Input type="text" name="clientName" defaultValue={this.props.clientName} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Date Created</Label>
                    <Input type="text" name="clientAddress" defaultValue={this.props.date} />
                  </FormGroup>
                </Form>
              </ModalBody>

              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Save Changes</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>

          </tr>
        );
    }

  }

}

export default TableRow;
