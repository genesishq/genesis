/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './controls.scss'

import React from 'react'

import { destroyCompleted } from 'actions'

/**
 * This is the Controls component.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const Controls = ({ total, completed, todos }) => {
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
          <strong>{todosLeft}</strong> {todosLeft > 1 ? 'todos' : 'todo'} left
        </span>
        {destroyCompletedButton}
      </div>
    </section>
  )
}

export default Controls
