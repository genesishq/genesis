/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import Radium from 'radium';

import Actions from '../actions/';

import TextInput from './text-input.jsx';

/**
 * @const Component
 * @const PropTypes
 */
const {
  Component
} = React;

/**
 * This is the Header component class.
 */
@Radium
export default class Header extends Component {

  /**
   * Render react component.
   *
   * @return {object}
   */
  render() {
    return (
      <header>
        <h2 style={styles.heading}>Todo</h2>
        <TextInput
          placeholder="What needs to be done?"
          onSave={this.onSave.bind(this)}
        />
      </header>
    );
  }

  /**
   * Event handler that creates a new todo item.
   *
   * @param {string} text
   *
   * @return void
   */
  onSave(text) {
    if (text.trim()) {
      Actions.create(text);
    }
  }
}

const styles = {
  heading: {
    marginBottom: '.2em'
  }
};
