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

import Store from '../stores';

import Intro from './intro.jsx';
import Form from './form.jsx';
import List from './list.jsx';
import Controls from './controls.jsx';
import Footer from './footer.jsx';

/**
 * @const Component
 */
const { Component } = React;

/**
 * Retrieve the current item data from the Store.
 *
 * @return {object}
 */
function getState() {
  return {
    allItems: Store.getAll(),
    areAllComplete: Store.areAllComplete()
  };
}

/**
 * This is the TodoApp component class, it operates as a "Controller-View".
 * It listens for changes in the Store and passes the new data to its children.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
@Radium
export default class TodoApp extends Component {

  /**
   * Initiate and set state for the component.
   *
   * @param {object} props
   *
   * @return void
   */
  constructor(props) {
    super(props);

    this.state = getState();

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Add event listener when component is mounted.
   *
   * @return void
   */
  componentDidMount() {
    Store.addChangeListener(this.onChange);
  }

  /**
   * Remove event listener when component will unmount.
   *
   * @return void
   */
  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  /**
   * Render react component.
   *
   * @return {object}
   */
  render() {
    return (
      <section style={styles.base}>
        <Intro />
        <Form />
        <List
          allItems={this.state.allItems}
          areAllComplete={this.state.areAllComplete}
        />
        <Controls allItems={this.state.allItems} />
        <Footer />
      </section>
    );
  }

  /**
   * Event handler that updates the state when the 'change' event is
   * triggered from the store.
   *
   * @return void
   */
  onChange() {
    this.setState(getState());
  }
}

const fadeIn = Radium.keyframes({
  from: {opacity: 0},
  to: {opacity: 1}
});

const styles = {
  base: {
    opacity: 0,
    animation: `${fadeIn} 200ms linear forwards`,

    padding: '0 20%',

    '@media (max-width: 56em)': { padding: '0 15%' },
    '@media (max-width: 48em)': { padding: '0 10%' },
    '@media (max-width: 40em)': { padding: '0 5%' },
    '@media (max-width: 32em)': { padding: '0 1em' }
  }
};
