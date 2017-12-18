import React, { Component } from 'react';
import Task from './Task';
import {
  Table, Card, CardBody, CardFooter, Button
} from 'reactstrap';

class TaskTable extends Component {

  constructor(props) {
    super(props)

    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox() {
      const target = event.target;
      console.log(event.target);
      this.setState({
          [target.name]: target.checked
      });
  };
  render(){
    return(
      <div>
        <Card>
          <CardBody>
            <Table hover bordered>
              <thead>
                <tr>
                  <th><h3>Tasks</h3></th>
                  <th className="center"></th>
                </tr>
              </thead>

              <tbody>
                <Task task="Send out invoices"/>
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="2">
                    <Button className="addButton fullWidthButton" color="primary">+</Button>

                  </td>
                </tr>
              </tfoot>

            </Table>
          </CardBody>

        </Card>
      </div>
    );
  }

}

export default TaskTable;
