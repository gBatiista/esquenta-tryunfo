import React from 'react';
import './App.css';
import Form from './components/Form';
import Task from './components/Task';

class App extends React.Component {
  state = {
    title: '',
    description: '',
    category: 'Trabalho',
    urgent: false,
    tasks: [],
    disabledButton: true,
  };

  validateFields = () => {
    const titleLength = 4;
    const descriptionLength = 10;
    const { title, description } = this.state;
    if (title.length > titleLength && description.length > descriptionLength) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  };

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, this.validateFields);
  };

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
      title: '',
      description: '',
      urgent: false,
      disabledButton: true,
    }));
  };

  removeTask = (taskIndex) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_task, index) => index !== taskIndex),
    }));
  };

  render() {
    const { title, description, tasks, category, urgent, disabledButton } = this.state;
    return (
      <div className="App">
        <Form
          title={ title }
          description={ description }
          category={ category }
          urgent={ urgent }
          disabledButton={ disabledButton }
          handleChange={ this.handleChange }
          addTask={ this.addTask }
        />
        {tasks.map((task, index) => (
          <Task
            key={ task.title }
            title={ task.title }
            description={ task.description }
            category={ task.category }
            urgent={ task.urgent }
            removeTask={ () => this.removeTask(index) }
          />))}
      </div>
    );
  }
}

export default App;
