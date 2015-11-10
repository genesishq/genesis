/**
 * This file is part of the FINN fritiden application.
 *
 * @author Magnus Bergman <magnus@apt.no>
 */

/**
 * These are some localStorage helper functions.
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
