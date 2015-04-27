/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import dispatcher from '../dispatcher';
import * as constants from '../constants';

/**
 * This is the Actions class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
class Actions {

  /**
   * Create new item.
   *
   * @param {string} text
   *
   * @return void
   */
  create(text) {
    dispatcher.dispatch({
      actionType: constants.CREATE,
      text: text
    });
  }

  /**
   * Update item.
   *
   * @param {string} id
   * @param {string} text
   *
   * @return void
   */
  updateText(id, text) {
    dispatcher.dispatch({
      actionType: constants.UPDATE_TEXT,
      id: id,
      text: text
    });
  }

  /**
   * Toggle whether a single item is complete.
   *
   * @param {object} item
   *
   * @return void
   */
  toggleComplete(item) {
    let { id } = item;
    let actionType = item.complete ?
        constants.UNDO_COMPLETE :
        constants.COMPLETE;

    dispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  }

  /**
   * Mark all items as complete.
   *
   * @return void
   */
  toggleCompleteAll() {
    dispatcher.dispatch({
      actionType: constants.TOGGLE_COMPLETE_ALL
    });
  }

  /**
   * Destroy item.
   *
   * @param  {string} id
   *
   * @return void
   */
  destroy(id) {
    dispatcher.dispatch({
      actionType: constants.DESTROY,
      id: id
    });
  }

  /**
   * Delete all the completed items.
   *
   * @return void
   */
  destroyCompleted() {
    dispatcher.dispatch({
      actionType: constants.DESTROY_COMPLETED
    });
  }

}

export default new Actions();
