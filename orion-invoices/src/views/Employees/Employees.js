import React, { Component } from 'react';
import TableRow from "../../components/Table/TableRow";
import { Table, Row, Col, Card, CardHeader, CardBody, Button,
Modal, ModalHeader, ModalBody, ModalFooter,
Form, FormGroup, Input, Label } from 'reactstrap';

class Employees extends Component {
  constructor(props){
    super(props)

    this.state = {
      addEmployeeModal: false, employees: [], totalEmployees: '1'
    }

    this.toggle = this.toggle.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const employee = {
      code: "01", name: "Krishna Kapadia", position: "CFO", rate: "20.00",
      phone: "0221800317", address: "55 Kanpur Road Broadmeadows"
    }

    var employees = this.state.employees;
    employees.push(employee);

    this.setState( { employees } );

  }

  toggle() {
    this.setState({
      addEmployeeModal: !this.state.addEmployeeModal
    })
  }

  // Adds the employee to the state, TODO: ADD TO SERVER
  addEmployee(data) {
    var newClient = {
      code: data.get("employeeCode"), name: data.get("employeeName"),
      position: data.get("employeePosition"), rate: data.get("employeeRate"),
      phone: data.get("employeePhone"), address: data.get("employeeAddress")
    }

    var employees = this.state.employees;
    employees.push(newClient);

    this.setState( { employees } );
  }

  handleSubmit(e) {
    e.preventDefault();

    // Creates an object containing form data and delegates addition to addEmployee function
    const data = new FormData(e.target);
    this.addEmployee(data);

    // Dismisses the modal
    this.toggle();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="4" lg="4">
            <Card>
              <CardBody>
                <h3><i className="icon-people blue paddingRight" /> Employees: {this.state.totalEmployees}</h3>
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
                {
                  this.state.employees.map( (e) => (
                    <TableRow key={e.code} type="employee" employeeCode={e.code} employeeName={e.name}
                    employeePosition={e.position} employeeRate={e.rate} employeePhoneNumber={e.phone}
                    employeeAddress={e.address}
                    />
                  ))
                }
              </tbody>
            </Table>
          </CardBody>
        </Card>



        <Modal className="modal-primary" isOpen={this.state.addEmployeeModal} toggle={this.toggle}>
          <ModalHeader>Add New Employee</ModalHeader>

          <Form onSubmit={this.handleSubmit}>
            <ModalBody>
                <FormGroup>
                  {/* REMOVED AS WILL AUTO INCREMENT ON DATABASE ADDITION */}
                  <Label>Employee Code: </Label>
                  <Input type="text" name="employeeCode" />
                </FormGroup>

                <FormGroup>
                  <Label>Name: </Label>
                  <Input type="text" name="employeeName" />
                </FormGroup>

                <FormGroup>
                  <Label>Position: </Label>
                  <Input type="text" name="employeePosition" />
                </FormGroup>

                <FormGroup>
                  <Label>Hourly Rate: </Label>
                  <Input type="number" name="employeeRate" />
                </FormGroup>

                <FormGroup>
                  <Label>Phone Number: </Label>
                  <Input type="number" name="employeePhone" />
                </FormGroup>

                <FormGroup>
                  <Label>Address: </Label>
                  <Input type="text" name="employeeAddress" />
                </FormGroup>

            </ModalBody>

            <ModalFooter>
              <Button color="primary" type="submit" >Add Employee</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>

      </div>
    );
  }

}

export default Employees;
