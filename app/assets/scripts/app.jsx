/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import {RouteHandler} from 'react-router';

/**
 * This is the App component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class App extends React.Component {

  /**
   * Render react component.
   *
   * @return {object}
   */
  render() {
    return (
      <RouteHandler />
    );
  }
}
