/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './todo-list.scss'

import React from 'react'

import { completeAll } from 'actions'

import Todo from './Todo/Todo'
import Checkbox from 'components/TodoApp/common/Checkbox/Checkbox'

/**
 * This is the TodoList component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const TodoList = ({ todos, areAllCompleted }) =>
  <section className='todos'>
    <Checkbox checked={areAllCompleted} text='Toggle all as completed' onChange={completeAll} />
    <ul className='todo-list'>
      {Object.keys(todos).map(key => <Todo key={key} todo={todos[key]} />)}
    </ul>
  </section>

export default TodoList
