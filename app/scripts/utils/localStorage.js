/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * These are some localStorage helper functions.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

/**
 * Load item from localStorage by key.
 *
 * @param {string} key
 *
 * @return {object}
 */
export function readFromStorage (key) {
  const state = JSON.parse(window.localStorage.getItem(key))

  for (let k in state) {
    if (state.hasOwnProperty(k)) {
      return state
    }
  }

  return false
}

/**
 * Save data to localStorage with key.
 *
 * @param {string} key
 * @param {object} data
 *
 * @return void
 */
export function writeToStorage (key, data) {
  window.localStorage.setItem(key, JSON.stringify(data))
}
