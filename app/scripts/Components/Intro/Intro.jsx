/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

require('./intro.scss')

import React, { Component } from 'react'

import logo from '../../../images/logo.png'

/**
 * This is the Intro component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class Intro extends Component {

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    return (
      <article className='intro'>
        <header className='intro-heading'>
          <img className='logo' src={logo} />
          <h1>genesis</h1>
        </header>
        <p>This is a awesome page using the <a href='https://github.com/magnus-bergman/genesis'>genesis</a> boilerplate.</p>
        <p>Below is a sample todo app built with react.</p>
      </article>
    )
  }

}
