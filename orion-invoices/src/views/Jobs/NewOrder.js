import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardFooter,
  Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NewOrder extends Component {

  // Endpoint: items object containing objects for each item.
  // eg:
  /*
    items [
      { desc: item1, quantity: 10, cost: 4.50 },
      { desc: item2, quantity: 5, cost: 8.50 }
    ]
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

  render() {
    return (
      <div className="animated fadeIn">
        {/* <Row>
          <Col xs="12" md="4" lg="4">
            <Card>
              <CardBody>
                <h2><i className="icon-doc blue paddingRight" /> New Order</h2>
              </CardBody>
            </Card>
          </Col>
        </Row> */}


        <Row>
          <Col xs="12" md="12" lg="12">
            <Card>
              <CardHeader>New Order</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor="clientName">Client Name</Label>
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

                  {/* <FormGroup>
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>Item Description</th>
                          <th>Item Quantity</th>
                          <th>Cost per Item</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td><Input type="text" id="itemDescription" placeholder="" /></td>
                          <td><Input type="number" id="itemQuantity" placeholder="" /></td>
                          <td><Input type="number" id="itemCost" placeholder="" /></td>
                        </tr>
                      </tbody>

                      <tfoot>
                        <Row>
                          <Col xs="12" md="12" lg="12">
                            <Button className="fullWidthButton">+</Button>
                          </Col>
                        </Row>
                      </tfoot>
                    </Table>
                  </FormGroup> */}
                  {/* <FormGroup row>
                    <Col xs="8">
                      <FormGroup>
                        <Label htmlFor="city">City</Label>
                        <Input type="text" id="city" placeholder="Enter your city"/>
                      </FormGroup>
                    </Col>
                    <Col xs="8">
                      <FormGroup>
                        <Label htmlFor="postal-code">Postal Code</Label>
                        <Input type="text" id="postal-code" placeholder="Postal Code"/>
                      </FormGroup>
                    </Col>
                  </FormGroup> */}

                </Form>

              </CardBody>

              <CardFooter>
                  <NavLink to="/Orders">
                    <Button type="submit" size="md" color="primary"><i className="fa fa-dot-circle-o"></i> Submit Order</Button>
                  </NavLink>

                  <NavLink to="/Orders">
                    <Button className="paddingLeft" type="reset" size="md" color="danger"><i className="fa fa-ban"></i> Cancel Order</Button>
                  </NavLink>

              </CardFooter>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }

}

export default NewOrder;
