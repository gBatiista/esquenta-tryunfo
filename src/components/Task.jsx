import PropTypes from 'prop-types';
import React from 'react';

export default class Task extends React.Component {
  render() {
    const { title, description, category, removeTask, urgent } = this.props;
    return (
      <div className="taskCard">
        <h2>{ title }</h2>
        <p>{ description }</p>
        <p>{ category }</p>
        {urgent && <p>Importante!</p>}
        <button type="button" onClick={ removeTask }>Feito!</button>
      </div>
    );
  }
}

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  removeTask: PropTypes.func,
}.isRequired;
