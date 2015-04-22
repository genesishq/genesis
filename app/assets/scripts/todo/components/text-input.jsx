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
 * @const ENTER_KEY_CODE
 */
const ENTER_KEY_CODE = 13;

/**
 * This is the TextInput component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class TextInput extends React.Component {

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
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this.save.bind(this)}
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        value={this.state.value}
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
    this.props.onSave(this.state.value);
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
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onSave: React.PropTypes.func.isRequired,
  value: React.PropTypes.string
};

TextInput.defaultProps = {
  value: ''
};
