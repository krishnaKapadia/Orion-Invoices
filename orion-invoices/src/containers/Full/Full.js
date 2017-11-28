import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Clients from '../../views/Clients/';
import Employees from '../../views/Employees/';
import Jobs from '../../views/Jobs/';
import NewOrder from '../../views/Jobs/NewOrder';
import Invoices from '../../views/Invoices/Invoices';

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
                <Route path="/clients" name="Clients" component={Clients} />
                <Route path="/employees" name="Employees" component={Employees} />
                <Route path="/orders" name="Orders" component={Jobs} />
                <Route path="/newOrder" name="New Order" component={NewOrder} />
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
