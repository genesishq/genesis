/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';

import Actions from '../actions/';

/**
 * @const Component
 * @const PropTypes
 */
const {
  Component,
  PropTypes
} = React;

/**
 * This is the Footer component class.
 */
export default class Footer extends Component {

  /**
   * Initiate and set state for the component.
   *
   * @param {object} props
   *
   * @return void
   */
  constructor(props) {
    super(props);

    this.state = {
      allItems: props.allItems
    };
  }

  /**
   * Render react component.
   *
   * @return {object}
   */
  render() {
    const { allItems } = this.props;
    const total = Object.keys(allItems).length;

    if (total === 0) {
      return null;
    }

    let completed = 0;

    for (let key in allItems) {
      if (allItems.hasOwnProperty(key) && allItems[key].complete) {
        completed++;
      }
    }

    const itemsLeft = total - completed;

    let clearCompletedButton = null;

    if (completed > 0) {
      clearCompletedButton = (
        <button
          className="clear-completed"
          onClick={this.onClearCompletedClick.bind(this)}>
          Clear completed ({completed})
        </button>
      );
    }

    return (
      <footer className="footer">
        <p>
          <small>Double click a todo to edit its content.</small>
        </p>
        <span className="item-count">
          <strong>{itemsLeft}</strong> {itemsLeft > 1 ? 'items' : 'item'} left
        </span>
        {clearCompletedButton}
      </footer>
    );
  }

  /**
   * Event handler to delete all completed TODOs
   *
   * @return void
   */
  onClearCompletedClick() {
    Actions.destroyCompleted();
  }
}

Footer.propTypes = {
  allItems: PropTypes.object.isRequired
};

Footer.defaultProps = {
  allItems: {}
};
