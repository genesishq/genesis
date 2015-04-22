/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import Header from './header.jsx';
import MainSection from './main-section.jsx';
import Footer from './footer.jsx';
import Store from '../stores';

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
export default class TodoApp extends React.Component {

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
      <section>
        <Header />
        <MainSection
          allItems={this.state.allItems}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allItems={this.state.allItems} />
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
