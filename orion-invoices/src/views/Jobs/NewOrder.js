import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Row, Col, Card, CardHeader, CardBody, CardFooter,
  Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NewOrder extends Component {

  // TODO backend wireup API post on submit

  // Endpoint to send to API: clientName and items object containing objects for each item.
  // eg:
  /*
    clientName: "Bill",
    items [
      { key: 1, desc: "item1", quantity: 10, cost: 4.50 },
      { key: 2, desc: "item2", quantity: 5, cost: 8.50 }
    ]

    On Form Submit, this object will be sent to API for storage

    Possible methods:
      - Directly send to API and therefore when the user navigates to the order page, it will have to do a fetch request every time.
      - Get redux to do it while simulaniously updating its local state therefore not needed to fetch on every visit to the page.

    Currently will use first option, but will explore redux at a later date as it is faster as components will access local store and API calls will only be made when that store is changed
  */

  constructor(props) {
    super(props);

    // Rows store an object containing the 3 fields of the input
    this.state = {
      clientName: "",
      itemCount: 0,
      items: []
    }

    // Bindings
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.setClientName = this.setClientName.bind(this);
    this.submitOrderToAPI = this.submitOrderToAPI.bind(this);
  }

  componentDidMount() {
    this.addItem();
  }

  addItem() {
    // Adds new empty item row to the order
    var items = this.state.items;

    var newRow = {
      key: this.state.itemCount, desc: "", quantity: "", cost: ""
    }
    items.push(newRow);

    // Increments the key value
    var itemCount = this.state.itemCount + 1;

    this.setState( { items, itemCount } );
  }

  // Removes the last item row in the order
  removeItem() {
    console.log("DANK");

    var items = this.state.items;

    if(items.length > 1){
      items.pop();
      var itemCount = this.state.itemCount - 1;

      this.setState({ items, itemCount });
    }
  }

  // Sets the clients name state
  setClientName(e) {
    var clientName = this.state.clientName;
    clientName = e.target.value;
    this.setState( { clientName } );
    console.log(this.state);
  }

  // Sets the particular item desc
  setItemDesc(id, e) {
    var desc = e.target.value;
    var items = this.state.items;
    items[id].desc = desc;
    this.setState({ items })
    console.log(this.state.items);
  }

  // Sets the particular items quantity
  setItemQuantity(id, e) {
    var quantity = e.target.value;
    var items = this.state.items;
    items[id].quantity = quantity;
    this.setState({ items })
    console.log(this.state.items);
  }

  // Sets the particular items cost
  setItemCost(id, e) {
    var cost = e.target.value;
    var items = this.state.items;
    items[id].cost = cost;
    this.setState({ items })
    console.log(this.state.items);
  }

  // Submits the order to the API
  submitOrderToAPI() {
    // TODO wire up when backend API is completed
    console.log("WIRE UP THE SUBMIT ORDER TO API");
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" lg="12">
            <Card>
              <CardHeader>New Order</CardHeader>
              <Form>

                <CardBody>
                    <FormGroup>
                      <Label htmlFor="clientName">Client Name</Label>
                        {/* <Select.Creatable
                          value={this.state.clientName}
                          options={[
                            { value: 'one', label: 'One' },
                            { value: 'two', label: 'Two' },
                          ]}
                        /> */}

                      <Input type="text" id="clientName" placeholder="Enter the clients name" onChange={this.setClientName} />
                    </FormGroup>
                    <br />
                    <Label htmlFor="orderlist"><h4>Order List:</h4></Label>

                    <FormGroup>
                      <div>
                        <Row className="topButton">
                          <Col>
                            <Label>Item Description</Label>
                          </Col>

                          <Col>
                            <Label>Item Quantity</Label>
                          </Col>

                          <Col>
                            <Label>Cost per Item</Label>
                          </Col>
                        </Row>

                        {/* Dynamic rows */}
                        {
                          this.state.items.map( (i) => (
                            <Row key={i.key} className="topButton">
                              <Col>
                                <Input key={i.key} onChange={(e) => this.setItemDesc(i.key, e)} type="text" id="itemDescription" name="name" placeholder="Desc" />
                              </Col>

                              <Col>
                                <Input key={i.key} onChange={(e) => this.setItemQuantity(i.key, e)} type="number" id="itemQuantity" name="quantity" placeholder="Quantity" />
                              </Col>

                              <Col>
                                <Input key={i.key} onChange={(e) => this.setItemCost(i.key, e)} type="number" step="0.01" id="itemQuantity" name="cost" placeholder="Cost Per Unit" />
                              </Col>
                            </Row>
                          ))
                        }

                        <Row>
                          <Col xs="12" md="2" lg="2">
                            <Button className="fullWidthButton" color="primary" onClick={this.addItem}> + </Button>
                          </Col>

                          <Col xs="12" md="2" lg="2">
                            <Button className="fullWidthButton" color="danger" onClick={this.removeItem}> - </Button>
                          </Col>

                        </Row>
                      </div>

                    </FormGroup>
                </CardBody>

                <CardFooter>
                    <NavLink to="/orders">
                      <Button onClick={this.submitOrderToAPI} size="md" color="primary"><i className="fa fa-dot-circle-o"></i> Submit Order</Button>
                    </NavLink>

                    <NavLink to="/orders">
                      <Button className="paddingLeft" type="reset" size="md" color="danger"><i className="fa fa-ban"></i> Cancel Order</Button>
                    </NavLink>

                </CardFooter>
              </Form>


            </Card>
          </Col>
        </Row>

      </div>
    );
  }

}

export default NewOrder;
