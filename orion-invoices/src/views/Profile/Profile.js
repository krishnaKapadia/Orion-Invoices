import React, { Component } from 'react';
import {
  Row, Col, Card, CardHeader, CardBody, CardFooter, Button, Table,
  Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, FormGroup, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={{ size: 8 }} md={{ size: 8 }} lg={{ size: 8 }}>

            <Card>
              <CardBody>
                {/* <div className="profileBox"></div> */}
                <Row>
                  <Col xs="12" md="10">
                    <h3>My Profile</h3>
                  </Col>
                  <Col xs="12" md="2">
                    <Button color="primary">Edit Profile</Button>
                  </Col>
                </Row>
                <br />

                <Form>
                  <Row>
                    <Col xs="12" md="6" lg="6">
                      <FormGroup>
                        <Label>First Name: </Label>
                        <Input type="text" name="userFirstName" />
                      </FormGroup>
                    </Col>

                    <Col xs="12" md="6" lg="6">
                      <FormGroup>
                        <Label>Last Name: </Label>
                        <Input type="text" name="userLastName" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="12" md="6" lg="6">
                      <FormGroup>
                        <Label>Email Address:</Label>
                        <Input type="text" name="userEmail" />
                      </FormGroup>
                    </Col>
                    <Col xs="12" md="6" lg="6">
                      <FormGroup>
                        <Label>Position:</Label>
                        <Input type="text" name="userPosition" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="6" md="6" lg="6">
                      <FormGroup>
                        <Label>Company Name:</Label>
                        <Input type="text" name="userCompanyName" />
                      </FormGroup>
                    </Col>

                    <Col xs="6" md="6" lg="6">
                      <FormGroup>
                        <Label>Salary:</Label>
                        <Input type="text" name="userSalary" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col xs={{ size: 4 }} md={{ size: 4 }} lg={{ size: 4 }}>

            <Card>
              <CardBody>
                {/* <img src={'img/avatars/2.jpg'} style={ { width: '70%' } } className="img" alt="Profile Picture"/> */}
              </CardBody>
              <CardFooter>
                <Button color="primary">Change Picture</Button>
              </CardFooter>
            </Card>
          </Col>

        </Row>

      </div>
    );
  }

}

export default Profile;
