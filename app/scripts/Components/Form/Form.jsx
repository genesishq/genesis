/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

require('./form.scss')

import React, { Component } from 'react'

import Actions from 'Actions'

import TextInput from 'Components/TextInput/TextInput'

/**
 * This is the TodoForm component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class TodoForm extends Component {

  /**
   * Event handler that creates a new todo item.
   *
   * @param {string} text
   *
   * @return void
   */
  onSave (text) {
    if (text.trim()) {
      Actions.create(text)
    }
  }

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    return (
      <header className='heading'>
        <h2>Todo</h2>
        <TextInput placeholder='What needs to be done?' onSave={this.onSave.bind(this)} />
      </header>
    )
  }
}
