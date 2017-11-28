import React, { Component } from 'react';
import TableRow from "../../components/Table/TableRow";
import { Table, Row, Col, Card, CardHeader, CardBody, Button,
Modal, ModalHeader, ModalBody, ModalFooter,
Form, FormGroup, Input, Label } from 'reactstrap';


class Employees extends Component {
  constructor(props){
    super(props)

    this.state = {
      addEmployeeModal: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      addEmployeeModal: !this.state.addEmployeeModal
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="4" lg="4">
            <Card>
              <CardBody>
                <h3><i className="icon-people blue paddingRight" /> Employees: 4</h3>
              </CardBody>
            </Card>
          </Col>

          <Col xs="0" md="4" lg="4">
            {/* Empty */}
          </Col>

          <Col xs="12" md="4" lg="4">
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <Button outline className="fullWidthButton" color="primary" onClick={this.toggle}>Add Employee</Button>
                  </Col>
                  <Col>
                    <Button className="fullWidthButton" outline color="danger">Remove Employee</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

        </Row>

        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>Employees
          </CardHeader>

          <CardBody>
            <Table responsive hover bordered>
              <thead>
                <tr>
                  <th>  </th>
                  <th>Code</th>
                  <th>Employee Name</th>
                  <th>Position</th>
                  <th>Hourly Rate</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Options</th>
                </tr>
              </thead>

              <tbody>
                <TableRow type="employee" employeeCode="01" employeeName="Krishna Kapadia"
                employeePosition="Technician" employeeRate="20.00" employeePhoneNumber="0221800317"
                employeeAddress="55 Kanpur Road Broadmeadows"
                />
              </tbody>
            </Table>
          </CardBody>
        </Card>

        <Modal className="modal-primary" isOpen={this.state.addEmployeeModal} toggle={this.toggle}>
          <ModalHeader>Add New Employee</ModalHeader>

          <ModalBody>
            <Form>
              {/* <FormGroup> REMOVED AS WILL AUTO INCREMENT ON DATABASE ADDITION
                <Label>Employee Code: </Label>
                <Input type="text" name="clientCode" />
              </FormGroup> */}

              <FormGroup>
                <Label>Name: </Label>
                <Input type="text" name="clientName" />
              </FormGroup>

              <FormGroup>
                <Label>Position: </Label>
                <Input type="text" name="employeePosition" />
              </FormGroup>

              <FormGroup>
                <Label>Hourly Rate: </Label>
                <Input type="number" name="clientPhone" />
              </FormGroup>

              <FormGroup>
                <Label>Phone Number: </Label>
                <Input type="number" name="clientPhone" />
              </FormGroup>

              <FormGroup>
                <Label>Address: </Label>
                <Input type="text" name="clientAddress" />
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save Changes</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }

}

export default Employees;
