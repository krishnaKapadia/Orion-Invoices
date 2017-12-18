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

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
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
    );
  }
}

export default Full;
