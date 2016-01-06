/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './todo-list.scss'

import React, { PropTypes } from 'react'

import Checkbox from '../common/Checkbox/Checkbox'

/**
 * This is the TodoList component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const TodoList = ({ children, areAllCompleted, toggleCompleteAll }) =>
  <section className='todos'>
    <Checkbox
      checked={areAllCompleted}
      text='Toggle all as completed'
      onChange={toggleCompleteAll} />
    <ul className='todo-list'>
      {children}
    </ul>
  </section>

TodoList.proptypes = {
  children: PropTypes.node,
  areAllCompleted: PropTypes.bool,
  toggleCompleteAll: PropTypes.func
}

export default TodoList
