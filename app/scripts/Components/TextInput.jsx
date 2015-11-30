/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { PropTypes, Component } from 'react'
import Radium from 'radium'

import * as colors from '../utils/colors'

/**
 * @const ENTER_KEY_CODE
 */
const ENTER_KEY_CODE = 13

/**
 * This is the TextInput component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
@Radium
export default class TextInput extends Component {

  /**
   * Declare component property types.
   *
   * @type {Object}
   */
  static propTypes = {
    placeholder: PropTypes.string,
    onSave: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  /**
   * Set default values for component properties.
   *
   * @type {Object}
   */
  static defaultProps = {
    placeholder: '',
    value: ''
  }

  /**
   * Initiate and set state for the component.
   *
   * @param {object} props
   *
   * @return void
   */
  constructor (props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  /**
   * Event handler that updates the state of the component when the
   * value of the input field changes.
   *
   * @param {object} event
   *
   * @return void
   */
  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  /**
   * Event handler listens for 'keydown' and saves the item if the enter key
   * was pressed.
   *
   * @param {object} event
   *
   * @return void
   */
  onKeyDown (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.save()
    }
  }

  /**
   * Event handler that clears the input on blur.
   *
   * @return void
   */
  save () {
    const { value } = this.state
    const { onSave } = this.props

    onSave(value)

    this.setState({
      value: ''
    })
  }

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
        style={styles.base}
        placeholder={placeholder}
        onBlur={this.save.bind(this)}
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        value={value}
        autoFocus />
    )
  }

}

const styles = {
  base: {
    padding: '.75em 1em',
    width: '100%',

    color: colors.fontBase,
    fontWeight: '200',

    margin: '.5em 0',

    backgroundColor: colors.base,

    border: 'none',
    borderRadius: 0
  }
}
