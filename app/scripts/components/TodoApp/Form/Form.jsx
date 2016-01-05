/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './form.scss'

import React from 'react'

import { create } from 'actions'

import TextInput from 'components/TodoApp/common/TextInput/TextInput'

function onSubmit (text) {
  if (text.trim()) {
    create(text)
  }
}

/**
 * This is the Form component.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const Form = () =>
  <div className='form'>
    <h2>Todo</h2>
    <TextInput placeholder='What needs to be done?' onSubmit={onSubmit} />
  </div>

export default Form
