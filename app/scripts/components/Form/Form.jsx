/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './form.scss'

import React, { PropTypes } from 'react'

import TextInput from '../common/TextInput/TextInput'

/**
 * This is the Form component.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const Form = ({ create }) =>
  <div className='form'>
    <h2>Todo</h2>
    <TextInput placeholder='What needs to be done?' onSubmit={create} />
  </div>

Form.proptypes = {
  create: PropTypes.func
}

export default Form
