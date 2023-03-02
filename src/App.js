import React from 'react';
import './App.css';
import Form from './components/Form';
import Task from './components/Task';

class App extends React.Component {
  state = {
    title: '',
    description: '',
    category: 'Trabalho',
    tasks: [],
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
      title: '',
      description: '',
    }));
  };

  removeTask = (taskIndex) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_task, index) => index !== taskIndex),
    }));
  };

  render() {
    const { title, description, tasks, category } = this.state;
    return (
      <div className="App">
        <Form
          title={ title }
          description={ description }
          category={ category }
          handleChange={ this.handleChange }
          addTask={ this.addTask }
        />
        {tasks.map((task, index) => (
          <Task
            key={ task.title }
            title={ task.title }
            description={ task.description }
            category={ task.category }
            removeTask={ () => this.removeTask(index) }
          />))}
      </div>
    );
  }
}

export default App;
