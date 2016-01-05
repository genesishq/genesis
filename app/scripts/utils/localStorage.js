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
  * Read from localStorage by key.
  *
  * @param {string} key
  *
  * @return {object}
  */
 export function read (key) {
   const data = JSON.parse(window.localStorage.getItem(key))

   for (const k in data) {
     if (data.hasOwnProperty(k)) {
       return data
     }
   }

   return false
 }

 /**
  * Write to localStorage with key.
  *
  * @param {string} key
  * @param {object} data
  *
  * @return void
  */
 export function write (key, data) {
   const value = typeof data === 'boolean' ? data : JSON.stringify(data)

   window.localStorage.setItem(key, value)
 }

 /**
  * Delete key from localStorage.
  *
  * @param {string} key
  *
  * @return void
  */
 export function unset (key) {
   delete window.localStorage[key]
 }
