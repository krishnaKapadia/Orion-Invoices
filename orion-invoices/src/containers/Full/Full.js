import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Profile from '../../views/Profile/Profile';
import Clients from '../../views/Clients/';
import Employees from '../../views/Employees/';
import Jobs from '../../views/Jobs/';
import NewOrder from '../../views/Jobs/NewOrder';
import Invoices from '../../views/Invoices/Invoices';
import NewInvoice from '../../views/Invoices/NewInvoice';
import Login from '../../views/Login';
import { connect } from 'react-redux';

class Full extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    if(this.props.isLoggedIn) {
      return (
        <Switch>
          <div className="app">
            <Header />
            <div className="app-body">
              <Sidebar {...this.props}/>
              <main className="main">
                <Breadcrumb />
                <Container fluid>
                  <Switch>
                    <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                    <Route path="/profile" name="My Profile" component={Profile} />
                    <Route path="/clients" name="Clients" component={Clients} />
                    <Route path="/employees" name="Employees" component={Employees} />
                    <Route path="/orders/newOrder" name="New Order" component={NewOrder} />
                    <Route path="/orders" name="Orders" component={Jobs} />
                    <Route path="/invoices/createInvoice" name="Create Invoice" component={NewInvoice} />
                    <Route path="/invoices" name="Invoices" component={Invoices} />
                    <Redirect from="/" to="/dashboard"/>
                  </Switch>
                </Container>
              </main>
              <Aside />
            </div>

            <Footer />
          </div>
        </Switch>
      )
    }else{
      return (
        <Switch>
          <Route history={this.props.history} path="/login" name="Login" component={Login}/>
          <Redirect from="/" to="/login"/>
        </Switch>
      );
    }
  }
}

/**
* Sets props to be accessed by the component from redux
* global state
*/
function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

// Connects the set props to the component
export default connect(mapStateToProps)(Full);
