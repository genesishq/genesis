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
 */
const { Component } = React;

/**
 * This is the NotFound component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class NotFound extends Component {

  /**
   * Render react component.
   *
   * @return {object}
   */
  render() {
    return (
      <h1>404</h1>
    );
  }
}
