/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './text-input.scss'

import React, { PropTypes } from 'react'

/**
 * @const ENTER_KEY_CODE
 */
const ENTER_KEY_CODE = 13

/**
 * This is the TextInput component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const TextInput = React.createClass({

  /**
   * Declare component property types.
   */
  propTypes: {
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    initialValue: PropTypes.string
  },

  /**
   * Set default values for component properties.
   */
  defaultProps: {},

  /**
   * Initiate and set state for the component.
   *
   * @param {object} props
   *
   * @return {void}
   */
  getInitialState () {
    const { initialValue } = this.props

    return {
      value: initialValue || ''
    }
  },

  /**
   * Event handler that updates the state of the component when the
   * value of the input field changes.
   *
   * @param {object} event
   *
   * @return {void}
   */
  onChange (event) {
    this.setState({
      value: event.target.value
    })
  },

  /**
   * Event handler listens for 'keydown' and saves the item if the enter key
   * was pressed.
   *
   * @param {object} event
   *
   * @return {void}
   */
  onKeyDown (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.submit()
    }
  },

  /**
   * Event handler that clears the input on blur.
   *
   * @return {void}
   */
  submit () {
    const { value } = this.state
    const { onSubmit } = this.props

    onSubmit(value)

    this.setState({
      value: ''
    })
  },

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    const { placeholder } = this.props
    const { value } = this.state

    return (
      <input
        className='text-input'
        placeholder={placeholder}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value={value}
        autoFocus />
    )
  }

})

export default TextInput
