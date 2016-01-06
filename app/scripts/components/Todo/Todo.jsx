/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './todo.scss'

import React, { PropTypes } from 'react'

import TextInput from '../common/TextInput/TextInput'
import Checkbox from '../common/Checkbox/Checkbox'

/**
 * This is the Todo component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const Todo = React.createClass({

  /**
   * Declare component property types.
   */
  propTypes: {
    todo: PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool
    }),
    update: PropTypes.func,
    destroy: PropTypes.func,
    toggleCompleted: PropTypes.func
  },

  /**
   * Set default values for component properties.
   */
  defaultProps: {},

  /**
   * Initiate and set state for the component.
   *
   * @return {object}
   */
  getInitialState () {
    return {
      isEditing: false
    }
  },

  /**
   * Event handler that toggles the "complete" state of the todo.
   *
   * @return {void}
   */
  onToggleCompleted () {
    const { todo, toggleCompleted } = this.props

    toggleCompleted(todo)
  },

  /**
   * Event handler that triggers edit mode when double clicking the todo.
   *
   * @return {void}
   */
  onDoubleClick () {
    this.setState({isEditing: true})
  },

  /**
   * Event handler passed down to the TextInput component that triggers save
   * when the todo has been edited.
   *
   * @param {string} text
   */
  onSubmit (text) {
    const { todo, update } = this.props

    update(todo.id, text)

    this.setState({isEditing: false})
  },

  /**
   * Event handler that deletes the todo.
   *
   * @return {void}
   */
  onDestroy () {
    const { todo, destroy } = this.props

    destroy(todo.id)
  },

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    const { todo } = this.props
    const { isEditing } = this.state

    let input = null

    if (isEditing) {
      input = (
        <TextInput
          onSubmit={this.onSubmit}
          initialValue={todo.text} />
      )
    }

    return (
      <li className='todo'>
        <div>
          <Checkbox checked={todo.completed} onChange={this.onToggleCompleted} />
          <label onDoubleClick={this.onDoubleClick}>
            {todo.text}
          </label>
          <button
            className='destroy-button'
            onClick={this.onDestroy}>
            <svg
              viewBox='0 0 512 512'>
              <path d='M444.9 66.9h-99.3V47c0-21.9-17.8-39.7-39.7-39.7h-99.3c-21.9 0-39.7 17.8-39.7 39.7v19.9H67.4v19.9h20.5l19.9 377.5c0 21.9 17.8 39.7 39.7 39.7h218.5c21.9 0 39.7-17.8 39.7-39.7l19.5-377.5h19.6V66.9zM186.6 47c0-11 8.9-19.9 19.9-19.9h99.3c11 0 19.9 8.9 19.9 19.9v19.9H186.6V47zM385.9 463.2l0 0.5v0.5c0 10.9-8.9 19.9-19.9 19.9H147.5c-10.9 0-19.9-8.9-19.9-19.9v-0.5l0-0.5L107.7 86.8h297.7L385.9 463.2z'/><rect height='317.9' width='19.9' x='246.2' y='126.5'/><polygon points='206.9 443.8 186.6 126.5 166.7 127.8 187.1 445 '/><polygon points='345.6 127.1 325.8 125.9 305.8 443.8 325.6 445 '/>
            </svg>
          </button>
        </div>
        {input}
      </li>
    )
  }

})

export default Todo
