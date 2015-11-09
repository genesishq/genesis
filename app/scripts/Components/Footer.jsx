/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react'
import Radium from 'radium'

/**
 * This is the Footer component class.
 */
@Radium
export default class Footer extends Component {

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    return (
      <footer style={styles.base}>
        <p><small>Made with ♥ by <a href='https://magnus.sexy'>Magnus Bergman</a></small></p>
      </footer>
    )
  }

}

const styles = {
  base: {
    marginTop: '2em',
    textAlign: 'center'
  }
}
