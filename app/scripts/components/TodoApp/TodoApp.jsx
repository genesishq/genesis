/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './todo-app.scss'

import React from 'react'

import store from 'stores'

import Intro from './Intro/Intro'
import Form from './Form/Form'
import TodoList from './TodoList/TodoList'
import Controls from './Controls/Controls'
import Footer from './Footer/Footer'

/**
 * Retrieve the current todo data from the store.
 *
 * @return {object}
 */
function getState () {
  return {
    todos: store.getTodos(),
    areAllCompleted: store.getAreAllCompleted()
  }
}

/**
 * This is the TodoApp component class, it operates as a "Controller-View".
 * It listens for changes in the store and passes the new data to its children.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const TodoApp = React.createClass({

  /**
   * Initiate and set state for the component.
   *
   * @return {object}
   */
  getInitialState () {
    return getState()
  },

  /**
   * Add event listener when component is mounted.
   *
   * @return {void}
   */
  componentDidMount () {
    store.addChangeListener(this.onChange)
  },

  /**
   * Remove event listener when component will unmount.
   *
   * @return {void}
   */
  componentWillUnmount () {
    store.removeChangeListener(this.onChange)
  },

  /**
   * Event handler that updates the state when the 'change' event is
   * triggered from the store.
   *
   * @return {void}
   */
  onChange () {
    this.setState(getState())
  },

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    const { todos, areAllCompleted } = this.state

    let todoList = null
    let controls = null
    let completed = 0

    const total = Object.keys(todos).length

    if (total > 0) {
      for (const key in todos) {
        if (todos.hasOwnProperty(key) && todos[key].completed) {
          completed++
        }
      }

      todoList = <TodoList todos={todos} areAllCompleted={areAllCompleted} />
      controls = <Controls total={total} completed={completed} todos={todos} />
    }

    return (
      <main className='todo-app'>
        <Intro />
        <Form />
        {todoList}
        {controls}
        <Footer />
      </main>
    )
  }

})

export default TodoApp
