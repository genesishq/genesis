/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

require('./footer.scss')

import React, { Component } from 'react'

/**
 * This is the Footer component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class Footer extends Component {

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    return (
      <footer className='footer'>
        <p><small>Made with ♥ by <a href='https://magnus.sexy'>Magnus Bergman</a></small></p>
      </footer>
    )
  }

}
