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
 * This is the Footer component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class Footer extends React.Component {

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
    let allItems = this.props.allItems;
    let total = Object.keys(allItems).length;

    if (total === 0) {
      return null;
    }

    let completed = 0;
    for (let key in allItems) {
      if (allItems[key].complete) {
        completed++;
      }
    }

    let itemsLeft = total - completed;
    let itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

    let clearCompletedButton = null;

    if (completed) {
      clearCompletedButton =
        <button
          className="clear-completed"
          onClick={this.onClearCompletedClick.bind(this)}>
          Clear completed ({completed})
        </button>;
    }

    return (
      <footer className="footer">
        <p><small>Double click a todo to edit its content.</small></p>
        <span className="item-count">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
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
  allItems: React.PropTypes.object.isRequired
};

Footer.defaultProps = {
  allItems: {}
};
