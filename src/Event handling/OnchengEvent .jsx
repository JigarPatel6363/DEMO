
import { Component } from 'react';

class OnchengEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { name: 'Task 1', completed: false },
        { name: 'Task 2', completed: false },
        { name: 'Task 3', completed: false },
      ],
    };
  }

  handleChange = (index) => {
    this.setState({
      tasks: this.state.tasks.map((task, i) => 
        i === index ? { ...task, completed: !task.completed } : task
      ),
    });
  };

  render() {
    const { tasks } = this.state;
    const completedTasks = tasks.filter(task => task.completed).length;
    const remainingTasks = tasks.length - completedTasks;

    return (
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => this.handleChange(index)}
            />
            {task.name}
          </div>
        ))}
       
       <h3>Completed tasks: {completedTasks}</h3>
        <h3>Remaining tasks: {remainingTasks}</h3>
      </div>
    );
  }
}

export default OnchengEvent;
