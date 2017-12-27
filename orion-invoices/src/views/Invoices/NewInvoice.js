import React, { Component } from 'react';
import {
  Row, Col, Card, CardHeader, CardBody, CardFooter,
  Table, Input, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NewInvoice extends Component {

  // Endpoint to send to API: clientName, number, address and items object, containing objects for each item.
  // eg:
  /*
    clientName: "Bill",
    clientNumber: "1974"
    address: "123 temp drive",
    items [
      { key: 1, orderNumber: "AB89", desc: "Item 1", quantity: 10, unitPrice: 4.50, totalPrice: 45.0 },
      { key: 2, orderNumber: "ZX24", desc: "Item 2", quantity: 50, unitPrice: 6.50, totalPrice: 325 }
    ],
    itemCount: 2

    On Form Submit, this object will be sent to API for storage

    Possible methods:
      - Directly send to API and therefore when the user navigates to the order page, it will have to do a fetch request every time.
      - Get redux to do it while simulaniously updating its local state therefore not needed to fetch on every visit to the page.

    Currently will use first option, but will explore redux at a later date as it is faster as components will access local store and API calls will only be made when that store is changed
  */

  constructor(props) {
    super(props);

    this.addItem             = this.addItem.bind(this);
    this.removeItem          = this.removeItem.bind(this);
    this.setItemDesc         = this.setItemDesc.bind(this);
    this.setClientName       = this.setClientName.bind(this);
    this.setItemQuantity     = this.setItemQuantity.bind(this);
    this.setItemUnitPrice    = this.setItemUnitPrice.bind(this);
    this.setItemTotalPrice   = this.setItemTotalPrice.bind(this);
    this.setItemOrderNumber  = this.setItemOrderNumber.bind(this);

    this.state = {
      clientName: "",
      clientNumber: "",
      address: "",
      items: [],
      itemCount: 0
    }
  }

  componentDidMount() {
    this.addItem();
  }

  addItem() {
    // Adds a new empty item to the invoice table
    var items = this.state.items;

    var newItem = {
      key: this.state.itemCount, orderNumber: "", desc: "", quantity: "",
      unitPrice: "", totalPrice: ""
    }
    items.push(newItem);

    // Increment the key value
    var itemCount = this.state.itemCount + 1;

    this.setState( { items, itemCount });
  }

  // Removes the last item row in the invoice table
  removeItem() {
    var items = this.state.items;

    if(items.length > 1) {
      items.pop();
      const itemCount = this.state.itemCount - 1;

      this.setState( { items, itemCount } );
    }
  }

// SETTERS

  // Sets the client name, stored in state
  setClientName(e) {
    var clientName = this.state.clientName;
    clientName = e.target.value;
    this.setState( { clientName });
  }

  // Sets the Order Number of an item, stored in items array object
  setItemOrderNumber(id, e) {
    const orderNumber = e.target.value;
    var items = this.state.items;
    items[id].orderNumber  = orderNumber;

    this.setState( { items });
    console.log(this.state.items);
  }

  // Sets the Description of an item, stored in items array object
  setItemDesc(id, e) {
    const desc = e.target.value;
    var items = this.state.items;
    items[id].desc = desc;

    this.setState( { items } );
    console.log(this.state.items);
  }

  // Sets the quantity of an item, stored in items array object
  setItemQuantity(id, e) {
    const quantity = e.target.quantity;
    var items = this.state.items;
    items[id].quantity = quantity;

    this.setState( { items } );
    console.log(this.state.items);
  }

  // Sets the unit price of an item, stored in the items array object
  setItemUnitPrice(id, e) {
    const price = e.target.quantity;
    var items = this.state.item;
    items[id].unitPrice = price;

    this.setState( { items } );
    console.log(this.state.items);
  }

  // Sets the total price of an item, stored in the items array object
  setItemTotalPrice(id, e) {
    var items = this.state.items;

    // Calculation: total price = unit price * quantity
    const unitPrice = items[id].unitPrice;
    const quantity = items[id].unitPrice;
    const totalPrice = unitPrice * quantity;
    items[id].totalPrice = totalPrice;

    this.setState( { items } );
    console.log(this.state.items);
  }


  render() {
    return (
      <Row>
        <Col xs="12" md="9">
          <Card className="animated fadeIn invoiceCard">
            <CardHeader>
              <h3>Invoice</h3>
            </CardHeader>

            <CardBody>
              <div className="invoice-container">
                {/* Invoice */}
                <Row className="invoiceHeader">
                  <Col md="8">
                    <img src={require('../../Assets/logo.png')} alt="Amba Logo" />
                  </Col>

                  <Col className="rightBox" md="4">
                    <h5 className="bold">Tax Invoice</h5>
                    <p>Invoice #: 9361 <br />
                      Created: January 1, 2017 <br />
                      Due: January 15, 2018</p>
                  </Col>
                </Row>

                <Row className="invoiceClientDetails">
                  {/* Client Details */}
                  <Col md="4">
                    <h5 className="bold">To:</h5>
                    <Input className="invoiceInput" type="text" id="clientName" placeholder="Enter the clients name" />
                    <Input className="invoiceInput" type="text" id="clientAddress" placeholder="Enter the clients address" />
                    <Input className="invoiceInput" type="text" id="clientSuburb" placeholder="Enter the clients suburb" />
                    {/* <Input className="invoiceInput" type="text" id="clientCountry" placeholder="Enter the clients Country" /> */}
                    <p>
                      {/* Krishna Kapadia<br /> */}
                      {/* 55 Kanpur Road<br /> */}
                      {/* Broadmeadows<br /> */}
                      {/* Wellington, 6035 */}
                    </p>
                  </Col>

                  <Col md="4">
                    {/* Spacing purposes only */}
                  </Col>

                  {/* Client details in terms of our payment numbers */}
                  <Col className="rightBox" md="4">
                    <h5 className="bold">Details:</h5>
                    <p>GST Num: 85-105-434<br />
                      Client Num: 300452<br />
                      Our account for direct crediting<br />
                      06-0507-0052045-00</p>
                  </Col>
                </Row>

                <Row className="invoiceTableRow">
                  <Col>
                    {/* Table */}
                    <Table className="invoiceTable" size="md" hover>
                      <thead>
                        <tr>
                          <th>Order #</th>
                          <th>Description</th>
                          <th>Quantity</th>
                          <th>Unit Price</th>
                          <th>Sub total</th>
                          <th> </th>
                        </tr>
                      </thead>
                      <tbody>

                        {this.state.items.map( (i) => (
                          <tr key={i.key}>
                            {/* <td >A56D</td>
                            <td >White T-Shirt with Multi-color logo</td>
                            <td >30</td>
                            <td >$4.50</td>
                            <td >$135</td> */}
                            <td><Input key={i.key} onChange={(e) => this.setItemOrderNumber(i.key, e)} type="text" name="orderNumber" placeholder="Order Number" /></td>
                            <td><Input key={i.key} type="text" name="desc" placeholder="Description" /></td>
                            <td><Input key={i.key} type="number" name="quantity" placeholder="Quantity"/></td>
                            <td><Input key={i.key} type="number" name="unitPrice" placeholder="Unit Price"/></td>
                            <td></td>
                            {/* <td><Button className="glyphicon-remove" color="danger" onClick={this.removeRow}>Remove Item</Button></td> */}
                          </tr>
                        ))}



                        <tr>
                          <td><Button className="fullWidthButton" color="primary" onClick={this.addItem}> + </Button></td>
                          <td><Button className="fullWidthButton" color="danger" onClick={this.removeItem}> - </Button></td>
                          <td> {/* Spacer */} </td>

                          <td colSpan="2">
                            <Table bordered>
                              <tbody>
                                <tr>
                                  <td>
                                    <Row className="totals">
                                      <Col md="6">Subtotal:</Col>
                                      <Col md="6">$135</Col>
                                    </Row>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <Row className="totals">
                                      <Col md="6">Tax(15%):</Col>
                                      <Col md="6">$13.45</Col>
                                    </Row>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <Row className="totals">
                                      <Col md="6">Total:</Col>
                                      <Col md="6">$148.35</Col>
                                    </Row>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>

                            {/* <Row className="totals">
                              <Col md="6">Subtotal:</Col>
                              <Col md="6">$135</Col>
                            </Row>

                            <Row className="totals">
                              <Col md="6">Tax(15%):</Col>
                              <Col md="6">$13.45</Col>
                            </Row>

                            <Row className="totals">
                              <Col md="6">Total:</Col>
                              <Col md="6">$148.35</Col>
                            </Row> */}
                          </td>
                        </tr>

                        {/* <tr>
                          <td className="noBox"> </td>
                          <td className="noBox">  </td>
                          <td className="noBox">  </td>
                          <td colSpan="2">

                          </td>
                        </tr> */}


                      </tbody>
                    </Table>
                  </Col>
                </Row>

              <div className="invoiceFooter">
                <Row>
                  {/* Our Contact Details */}
                  <Col className="leftBox" md="4">
                    <h4>Contact Us:</h4>
                      <p>Phone: 04-939-1711 <br />
                      Fax: 04-939-1712 <br />
                      Email: amba@xtra.co.nz</p>
                  </Col>

                  <Col md="3">
                    {/* Spacing purposes only */}
                  </Col>

                  <Col className="rightBox" md="5">
                    <h4>Address:</h4>
                    <p>Address: 19-21 Jackson Street <br />
                    Petone, Wellington <br />
                    6035</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="footer">
                      <h5>All totals are final and non-negotiable. Payments must be made by the specified due date
                      with no exceptions. Unpaid accounts will incur late payment fees & collection costs</h5>
                    </div>

                  </Col>
                </Row>

              </div>


              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" md="3">
          <Card>
            <CardHeader>Options</CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <NavLink to="/invoices">
                    <Button outline className="fullWidthButton" color="primary">Save Invoice</Button>
                  </NavLink>
                </Col>

                <Col>
                  <NavLink to="/invoices">
                    <Button outline className="fullWidthButton" color="danger">Cancel</Button>
                  </NavLink>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

}

export default NewInvoice;
