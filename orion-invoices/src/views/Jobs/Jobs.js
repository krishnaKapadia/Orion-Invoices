import React, { Component } from 'react';
import Order from '../../components/Table/Order';
import { NavLink } from 'react-router-dom';
import {
  Card, CardHeader, CardBody, Row, Col, Button,
  Table
} from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-spinkit';

class Jobs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      orders: [], currentOrderCount: 0, completedOrderCount: 0, loading: true
    }

    this.getAllOrders = this.getAllOrders.bind(this);
    this.deleteOrderFromState = this.deleteOrderFromState.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllOrders();
  }

  /**
  * Retrieves all the invoices accociated with the business associated with the logged in user
  */
  getAllOrders() {
    axios.get("http://localhost:4000/api/v1/orders").then((data) => {
      var orders = [];
      var currentOrderCount = 0;
      var completedOrderCount = 0;

      data.data.orders.map( (order) => {
        var date = new Date(order.created);
        date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        order.created = date;

        orders.push(order);

        if(order.completed){
          completedOrderCount++;
        }else{
          currentOrderCount++;
        }
      });

      this.setState({ orders, currentOrderCount, completedOrderCount, loading: false });
    }).catch((err) => {
      if(err) console.log(err);
    })
  }

  /**
  * Deletes given order from application state
  */
  deleteOrderFromState(id, data) {
    var orders = this.state.orders;
    var filteredOrders = orders.filter( (order) => {
      return order._id !== id;
    });

    if(data.completed){
      this.setState( { orders: filteredOrders, completedOrderCount: this.state.completedOrderCount - 1 });
    }else{
      this.setState( { orders: filteredOrders, currentOrderCount: this.state.currentOrderCount - 1 });
    }
  }

  /**
  * Updates an existing order in local application state, Passed to Order Component
  */
  updateOrder(id, data) {
    var orders = this.state.orders;
    var index = orders.findIndex(x => x._id == id);
    orders[index] = data;

    toast.success("Order Updated!", {
      position: toast.POSITION.BOTTOM_RIGHT
    });

    this.setState({ orders });
  }

  /**
  * Toggles completed status on a order in local application state
  */
  toggleCompleted(id, status) {
    var orders = this.state.orders;

    var index = orders.findIndex(x => x._id == id);
    orders[index].completed = status;

    var completedOrderCount = this.state.completedOrderCount;
    if(status) completedOrderCount++;
    else completedOrderCount--;

    toast.success("Order Completed!", {
      position: toast.POSITION.BOTTOM_RIGHT
    });

    this.setState({ orders, completedOrderCount });
  }

  render() {

    if(this.state.loading) {
      return(
        <div className="animated fadeIn darken">
          <Spinner fadeIn='none' className="loadingSpinner" name="folding-cube" color="#1abc9c" />
        </div>
      );
    }else {
      return (
        <div className="animated fadeIn">
          <ToastContainer />
          <Row>
            <Col xs={{ size: 12 }} md={{ size: 4 }} lg={{ size: 4 }}>
              <Card>
                <CardBody>
                  <h3><i className="icon-drawer blue paddingRight" /> Current Orders: {this.state.currentOrderCount}</h3>
                </CardBody>
              </Card>
            </Col>

            <Col xs={{ size: 12 }} md={{ size: 4 }} lg={{ size: 4 }}>
              <Card>
                <CardBody>
                  <h3><i className="icon-drawer blue paddingRight" /> Completed Orders: {this.state.completedOrderCount}</h3>
                </CardBody>
              </Card>
            </Col>

            <Col xs={{ size: 12 }} md={{ size: 4 }} lg={{ size: 4 }}>
              <Card>
                <CardBody>
                  <NavLink to="/orders/newOrder">
                  <Button className="fullWidthButton" color="primary" onClick={this.toggle}>New Order</Button>
                </NavLink>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>Orders
          </CardHeader>

          <CardBody>
            {/* add, responsive prop to tag to make the table responsive */}


            <Table bordered>
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Order List</th>
                  <th>Created</th>
                  <th>Options</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.orders.map( (o) => {
                    return(
                      <Order key={o._id} type="order" data={o} toggleCompleted={this.toggleCompleted} updateOrder={this.updateOrder} deleteOrderFromState={this.deleteOrderFromState} />
                    )
                  })
                }
              </tbody>

            </Table>
          </CardBody>
        </Card>

      </div>
    );
    }
  }

}

export default Jobs;
