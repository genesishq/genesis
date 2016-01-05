/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

require('./todo-app.scss')

import React, { Component } from 'react'

import Store from 'stores'

import Intro from 'Components/Intro/Intro'
import Form from 'Components/Form/Form'
import List from 'Components/List/List'
import Controls from 'Components/Controls/Controls'
import Footer from 'Components/Footer/Footer'

/**
 * Retrieve the current item data from the Store.
 *
 * @return {object}
 */
function getState () {
  return {
    allItems: Store.getAll(),
    areAllComplete: Store.areAllComplete()
  }
}

/**
 * This is the TodoApp component class, it operates as a "Controller-View".
 * It listens for changes in the Store and passes the new data to its children.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class TodoApp extends Component {

  /**
   * Initiate and set state for the component.
   *
   * @param {object} props
   *
   * @return void
   */
  constructor (props) {
    super(props)

    this.state = getState()

    this.onChange = this.onChange.bind(this)
  }

  /**
   * Add event listener when component is mounted.
   *
   * @return void
   */
  componentDidMount () {
    Store.addChangeListener(this.onChange)
  }

  /**
   * Remove event listener when component will unmount.
   *
   * @return void
   */
  componentWillUnmount () {
    Store.removeChangeListener(this.onChange)
  }

  /**
   * Event handler that updates the state when the 'change' event is
   * triggered from the store.
   *
   * @return void
   */
  onChange () {
    this.setState(getState())
  }

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    const { allItems, areAllComplete } = this.state

    return (
      <main className='todo-app'>
        <Intro />
        <Form />
        <List allItems={allItems} areAllComplete={areAllComplete} />
        <Controls allItems={allItems} />
        <Footer />
      </main>
    )
  }

}
