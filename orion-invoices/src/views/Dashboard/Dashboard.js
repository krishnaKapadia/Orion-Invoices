import React, { Component } from 'react';
import TaskTable from '../../components/Tasks/TaskTable';
import LineGraph from '../../components/Graphs/LineGraph';
import { NavLink } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
} from 'reactstrap';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          {/* <Col xs="12" md="3" lg="3">
            <Card class="cardButton">
              <CardBody>
                <h2><i className="icon-people blue paddingRight" /> New Invoice</h2>
              </CardBody>
            </Card>
          </Col> */}

          <Col xs="12" md="4" lg="4">
            <Card>
              <NavLink to="/clients" className="linkCard">
                <CardBody>
                  <h2><i className="icon-people blue paddingRight" /> Clients: 200</h2>
                </CardBody>
              </NavLink>
            </Card>
          </Col>

          <Col xs="12" md="4" lg="4">
            <Card>
              <CardBody>
                <h2><i className="icon-docs blue paddingRight" /> Invoices : 2</h2>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="4" lg="4">
            <Card>
              <CardBody>
                <h2><i className="icon-drawer blue paddingRight" /> Orders: 10</h2>
              </CardBody>
            </Card>
          </Col>

        </Row>

        <Row>
          <Col xs="12" md="8" lg="8">
            {/* Graph of the number of jobs/orders completed per day, for 30 days */}
            <LineGraph />
          </Col>

          <Col xs="12" md="4" lg="4">
            <TaskTable />
          </Col>
        </Row>

      </div>
    )
  }
}

export default Dashboard;
