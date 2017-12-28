import React, { Component } from 'react';
import Task from './Task';
import {
  Table, Card, CardBody, CardFooter, Button, Input
} from 'reactstrap';

class TaskTable extends Component {
  /*
  *    Endpoint to send to API:
  *
  *    itemCount: 2,
  *    tasks [
  *        { task: "Do this" },
  *        { task: "Do that"}
  *    ]
  */

  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
      taskCount: 0,
      newTaskToggle: false,
      newTask: ""
    }

    this.removeTask     = this.removeTask.bind(this);
    this.toggleInput    = this.toggleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.setNewTask     = this.setNewTask.bind(this);
    this.saveTask       = this.saveTask.bind(this);
  }

  // Saves the inputted task
  saveTask() {
    var tasks = this.state.tasks;
    const newTask = { key: this.state.taskCount, task: this.state.newTask }
    tasks.push(newTask);
    console.log(tasks);

    // Increment the key value
    const taskCount = this.state.taskCount + 1;

    this.setState( { tasks, taskCount } );

    // toggle back the input
    this.toggleInput();
  }

  // Removes a spesific task, In other words marked as completed
  removeTask(taskId, e) {
    var tasks = this.state.tasks;

    //Removal operation, filters out the spesific task
    tasks = tasks.filter(i => i.key !== taskId );
    this.setState( { tasks } );
  }

  // Toggles the input new task mode
  toggleInput() {
    var newTaskToggle = this.state.newTaskToggle;

    newTaskToggle === false ? newTaskToggle = true : newTaskToggle = false;

    this.setState( { newTaskToggle } );
  }

  // Sets the task
  setNewTask(e) {
    var task = this.state.newTask;
    task = e.target.value;
    this.setState( { newTask: task } );
  }

  handleCheckbox() {
    const target = event.target;
    console.log(event.target);
    this.setState({
        [target.name]: target.checked
    });
  }

  render(){
    return(
      <div>
        <Card>
          <CardBody>
            <Table hover bordered>
              <thead>
                <tr>
                  <th colSpan="2"><h3>Tasks</h3></th>
                  {/* <th className="center"></th> */}
                </tr>
              </thead>

              <tbody>
                {
                  this.state.tasks.length > 0 ?
                  this.state.tasks.map( (item) => (
                    <tr key={item.key}>
                      <td>{item.task}</td>
                      <td width="25%"><Button onClick={(e) => this.removeTask(item.key, e)} className="addButton fullWidthButton" color="primary"> Done </Button></td>
                    </tr>
                  )) : <tr><td colSpan="2"><p className="centerText">No Tasks remaining</p></td></tr>
                }
                {
                  this.state.newTaskToggle === true &&
                    <tr>
                      <td><Input onChange={this.setNewTask} type="text"/></td>
                      <td width="25%"><Button onClick={this.saveTask} className="addButton fullWidthButton" color="primary"> Save </Button></td>
                    </tr>
                }
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="2">
                    {
                      this.state.newTaskToggle === false ?
                        <Button onClick={this.toggleInput} className="addButton fullWidthButton" color="primary">Add Task</Button>
                      : <Button onClick={this.toggleInput} className="addButton fullWidthButton" color="danger">Cancel</Button>
                    }
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
