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

import logo from '../../images/logo.png'

/**
 * This is the Intro component class.
 */
@Radium
export default class Intro extends Component {

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    return (
      <article style={styles.base}>
        <header style={styles.header}>
          <img style={styles.logo} src={logo} />
          <h1>genesis</h1>
        </header>
        <p>This is a awesome page using the <a href='https://github.com/magnus-bergman/genesis'>genesis</a> boilerplate.</p>
        <p>Below is a sample todo app built with react.</p>
      </article>
    )
  }

}

const styles = {
  base: {
    textAlign: 'center',
    marginBottom: '2em',

    '@media (max-width: 32em)': {
      padding: '0 1em'
    }
  },

  header: {
    marginBottom: '2em'
  },

  logo: {
    width: '4.375em',
    height: 'auto',
    display: 'block',
    margin: '0 auto -1.6em'
  }
}
