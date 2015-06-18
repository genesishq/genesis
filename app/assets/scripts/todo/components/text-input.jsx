/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';

/**
 * @const Component
 * @const PropTypes
 */
const {
  Component,
  PropTypes
} = React;

/**
 * @const ENTER_KEY_CODE
 */
const ENTER_KEY_CODE = 13;

/**
 * This is the TextInput component class.
 */
export default class TextInput extends Component {

  /**
   * Initiate and set state for the component.
   *
   * @param {object} props
   *
   * @return void
   */
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  /**
   * Render react component.
   *
   * @return {object}
   */
  render() {
    const {
      className,
      placeholder
    } = this.props;

    const { value } = this.state;

    return (
      <input
        className={className}
        placeholder={placeholder}
        onBlur={this.save.bind(this)}
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        value={value}
        autoFocus={true}
      />
    );
  }

  /**
   * Event handler that clears the input on blur.
   *
   * @return void
   */
  save() {
    const { value } = this.state;
    const { onSave } = this.props;

    onSave(value);

    this.setState({
      value: ''
    });
  }

  /**
   * Event handler that updates the state of the component when the
   * value of the input field changes.
   *
   * @param {object} event
   *
   * @return void
   */
  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  /**
   * Event handler listens for 'keydown' and saves the item if the enter key
   * was pressed.
   *
   * @param {object} event
   *
   * @return void
   */
  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.save();
    }
  }
}

TextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  value: PropTypes.string
};

TextInput.defaultProps = {
  value: ''
};
