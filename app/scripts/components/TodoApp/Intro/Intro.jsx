/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './intro.scss'
import logo from './logo.png'

import React from 'react'

/**
 * This is the Intro component.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const Intro = () =>
  <article className='intro'>
    <header className='intro-heading'>
      <img className='logo' src={logo} />
      <h1>genesis</h1>
    </header>
    <p>This is a awesome page using the <a href='https://github.com/magnus-bergman/genesis'>genesis</a> boilerplate.</p>
    <p>Below is a sample todo app built with react.</p>
  </article>

export default Intro
