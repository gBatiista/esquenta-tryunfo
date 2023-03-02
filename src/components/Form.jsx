import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { title, description, category, handleChange, addTask } = this.props;
    return (
      <form>
        <input
          type="text"
          name="title"
          placeholder="Adicione o título"
          value={ title }
          onChange={ handleChange }
        />
        <input
          type="textarea"
          name="description"
          placeholder="Descreva sua tarefa"
          value={ description }
          onChange={ handleChange }
        />
        <select name="category" onChange={ handleChange } value={ category }>
          <option value="Trabalho">Trabalho</option>
          <option value="Casa">Casa</option>
          <option value="Lazer">Lazer</option>
          <option value="Outros">Outros</option>
        </select>
        <label htmlFor="urgent">
          <input type="checkbox" name="urgent" onChange={ handleChange } />
          Urgente
        </label>
        <button
          type="button"
          onClick={ () => addTask({ title, description, category }) }
        >
          Adicionar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  handleChange: PropTypes.func,
  addTask: PropTypes.func,
}.isRequired;

export default Form;
