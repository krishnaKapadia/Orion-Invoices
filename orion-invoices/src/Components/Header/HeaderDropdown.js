import React, {Component} from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class HeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropAccnt() { 
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        {/* <DropdownToggle> */}
        <NavLink to="/profile" >
              <img src={'img/avatars/2.jpg'} style={ { width: '70%' } } className="img-avatar" alt="Profile Picture"/>
          {/* </DropdownToggle> */}
        </NavLink>
      </Dropdown>
    );
  }

  render() {
    const {...attributes} = this.props;
    return (
      this.dropAccnt()
    );
  }
}

export default HeaderDropdown;
