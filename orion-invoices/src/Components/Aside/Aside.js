import React, { Component } from 'react';
import {
  Nav, NavItem, NavbarToggler, NavbarBrand, NavLink, Badge, TabContent, TabPane,
  Label, Input, Progress
} from 'reactstrap';
import classnames from 'classnames';
import Settings from '../Tabs/Settings';

class Aside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '3'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <aside className="aside-menu">
        {/*Aside Menu*/}

        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                     onClick={() => { this.toggle('1'); }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                     onClick={() => { this.toggle('3'); }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>

        {/* Tab Contents */}
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="p-3">
            <h6>Notes</h6>

            <hr/>
          </TabPane>

          {/* Settings Tab */}
          <TabPane tabId="3" className="p-3">
            <h6>Settings</h6>
            <hr />
            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><b>Send anonymous data to server</b></small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </div>
              <div>
                <small className="text-muted">This data will be used to improve the service and solve issues.
                </small>
              </div>
            </div>

            <hr/>
            {/* <h6>System Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small><b>CPU Usage</b></small>
            </div>
            <Progress className="progress-xs" color="info" value="25"/>
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>Memory Usage</b></small>
            </div>
            <Progress className="progress-xs" color="warning" value="70"/>
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 1 Usage</b></small>
            </div>
            <Progress className="progress-xs" color="danger" value="95"/>
            <small className="text-muted">243GB/256GB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 2 Usage</b></small>
            </div> */}
            {/* <Progress className="progress-xs" color="success" value="10"/>
            <small className="text-muted">25GB/256GB</small> */}
          </TabPane>
        </TabContent>
      </aside>
    )
  }
}

export default Aside;
