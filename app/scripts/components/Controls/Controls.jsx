/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './controls.scss'

import React, { PropTypes } from 'react'

/**
 * This is the Controls component.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const Controls = ({ total, completed, destroyCompleted }) => {
  const todosLeft = total - completed

  let destroyCompletedButton = null

  if (completed > 0) {
    destroyCompletedButton = (
      <button
        className='destroy-completed-button'
        onClick={destroyCompleted}>
        Clear completed ({completed})
      </button>
    )
  }

  return (
    <section className='controls'>
      <p>
        <small>Double click a as to edit its content.</small>
      </p>
      <div className='meta'>
        <span>
          <strong>{todosLeft}</strong> {todosLeft === 1 ? 'todo' : 'todos'} left
        </span>
        {destroyCompletedButton}
      </div>
    </section>
  )
}

Controls.proptypes = {
  total: PropTypes.number,
  completed: PropTypes.number,
  destroyCompleted: PropTypes.func
}

export default Controls
