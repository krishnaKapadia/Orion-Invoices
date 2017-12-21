import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Input, Label,
Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
class Order extends Component {

  constructor(props) {
    super(props)

    this.state = {
      editModal: false,
      completed: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit () {
    this.setState({
      editModal: !this.state.editModal
    })
  }

  toggleComplete() {
    this.setState({
      completed: !this.state.completed
    })
  }

  render() {
    return (
      <tr>
          <td><input type="checkbox" /></td>
          <td>{this.props.code}</td>
          <td>{this.props.clientName}</td>
          <td>
            <ul>
              <li>{this.props.orderList.o1}</li>
              <li>{this.props.orderList.o2}</li>
            </ul>
          </td>
          <td>{this.props.created}</td>
          <td>
            <Row >
              <Col className="topButton">
                <Button outline className="fullWidthButton" color="primary blue" onClick={this.toggleEdit}>Edit</Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button outline className="fullWidthButton" color="secondary blue" onClick={this.toggleComplete}>Mark Completed</Button>
              </Col>
            </Row>
          </td>

          <Modal className="modal-primary" isOpen={this.state.editModal} toggle={this.toggleEdit}>
            <ModalHeader>Edit Order Information</ModalHeader>

            <ModalBody>
              <Form>
                <FormGroup>
                  <Label>Order Code: </Label>
                  <Input type="text" name="clientCode" defaultValue={this.props.code} />
                </FormGroup>

                <FormGroup>
                  <Label>Client Name: </Label>
                  {/* TODO: CHANGE LATER TO BE A SELECTABLE LIST OF CLIENTS */}
                  <Input type="text" name="clientName" defaultValue={this.props.clientName} />
                </FormGroup>

                <FormGroup>
                  {/* TODO: ADD THE ABILITY TO ADD ORDER LIST ITEMS WITHIN THE MODAL AND ALSO REMOVE */}
                  <Label>Order List </Label>
                  <Table>
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Cost Per Item</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td><Input type="text" defaultValue="Caps with red logo" /></td>
                        <td><Input type="number" defaultValue="100" /></td>
                        <td><Input type="number" defaultValue="4.50" /></td>
                      </tr>

                      <tr>
                        <td><Input type="text" defaultValue="Caps with white logo" /></td>
                        <td><Input type="number" defaultValue="50" /></td>
                        <td><Input type="number" defaultValue="5.00" /></td>
                      </tr>

                    </tbody>
                  </Table>
                  {/* <ul>
                    <li><Input type="text" name="Order List 1" defaultValue={this.props.orderList.o1} /></li>
                    <li><Input type="text" name="Order List 2" defaultValue={this.props.orderList.o2} /></li>
                  </ul> */}


                </FormGroup>

                <FormGroup>
                  <Label>Created: </Label>
                  <Input type="text" name="created" defaultValue={this.props.created} />
                </FormGroup>
              </Form>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={this.toggleEdit}>Save Changes</Button>
              <Button color="secondary" onClick={this.toggleEdit}>Cancel</Button>
            </ModalFooter>
          </Modal>
      </tr>
    );
  }

}

export default Order;
