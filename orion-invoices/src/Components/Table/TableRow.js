import React, { Component } from 'react';
import { Form, FormGroup, Label, Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TableRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editModal: false,
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      editModal: !this.state.editModal
    })
  }

  render() {
    switch (this.props.type) {
      case 'client':
        return (
          <tr>
            <td><input type="checkbox" /></td>
            <td>{this.props.clientCode}</td>
            <td>{this.props.clientName}</td>
            <td>{this.props.clientAddress}</td>
            <td>{this.props.clientPhone}</td>

            <td><Button outline className="fullWidthButton" color="info" onClick={this.toggle}>Edit</Button></td>

            <Modal className="modal-primary" isOpen={this.state.editModal} toggle={this.toggle}>
              <ModalHeader>Edit Client Information</ModalHeader>

              <ModalBody>
                <Form>
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
                </Form>
              </ModalBody>

              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Save Changes</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>

          </tr>
        );

      case "employee":
        return (
          <tr>
            <td><input type="checkbox" /></td>
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

    }

  }

}

export default TableRow;
