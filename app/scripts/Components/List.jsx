/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { PropTypes, Component } from 'react'
import Radium from 'radium'

import * as colors from '../styles/colors'

import Actions from '../Actions'

import Item from './Item'

/**
 * This is the TodoList component class.
 */
@Radium
export default class TodoList extends Component {

  /**
   * Declare component property types.
   *
   * @type {Object}
   */
  static propTypes = {
    allItems: PropTypes.object.isRequired,
    areAllComplete: PropTypes.bool.isRequired
  }

  /**
   * Initiate and set state for the component.
   *
   * @param {object} props
   *
   * @return void
   */
  constructor (props) {
    super(props)
  }

  /**
   * Event handler to mark all items as complete.
   *
   * @return void
   */
  onToggleCompleteAll () {
    Actions.toggleCompleteAll()
  }

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    const { allItems, areAllComplete } = this.props

    if (Object.keys(this.props.allItems).length < 1) return null

    const items = []

    for (const key in allItems) {
      if (allItems.hasOwnProperty(key)) {
        items.push(<Item key={key} item={allItems[key]} />)
      }
    }

    return (
      <section style={styles.base}>
        <label style={styles.checkboxLabel}>
          <input
            style={styles.checkboxInput}
            type='checkbox'
            onChange={this.onToggleCompleteAll.bind(this)}
            checked={areAllComplete ? 'checked' : ''} />
          <span style={styles.checkBoxFaker}>
            <svg
              style={[styles.checkIcon, {opacity: areAllComplete ? 1 : 0}]}
              viewBox='0 0 66 66'>
              <path d='M51.54,10.618c-2.298,2.166-6.747,6.813-8.902,9.119c-6.253,6.688-11.96,13.833-17.181,21.355  c-2.481-3.795-5.425-7.676-9.043-10.486c-1.441-1.119-3.826-2.878-5.051-0.342c-0.992,2.053,1.476,3.57,2.627,4.894  c3.016,3.47,5.377,7.553,7.244,11.743c0.454,0.968,0.785,2.107,1.483,2.942c1.794,2.144,4.678,1.252,5.907-0.909  c4.822-8.483,10.175-16.751,16.388-24.296c2.347-2.85,6.99-8.002,9.451-10.754c1.269-1.419,2.706-3.471,1.466-4.712  C54.687,7.932,52.905,9.33,51.54,10.618z' />
            </svg>
          </span>
          Mark all as complete
        </label>
        <ul style={styles.items}>{items}</ul>
      </section>
    )
  }

}

const styles = {
  base: {
    padding: '2em 2em 0',

    '@media (max-width: 32em)': { padding: '2em 0 0' }
  },

  checkboxLabel: {
    position: 'relative',

    paddingLeft: '2em'
  },

  checkboxInput: {
    position: 'absolute',
    overflow: 'hidden',

    clip: 'rect(0 0 0 0)',
    border: '0',

    width: '1px',
    height: '1px',

    margin: '-1px',
    padding: '0'
  },

  checkBoxFaker: {
    position: 'absolute',
    top: '.2em',
    left: '0',

    width: '1em',
    height: '1em',

    border: '1px solid ' + colors.base
  },

  checkIcon: {
    width: '160%',

    fill: colors.base,
    backgroundColor: 'transparent',

    transform: 'translate(-5%, -30%)',
    transition: 'opacity 100ms ease-out'
  },

  items: {
    listStyle: 'none',
    margin: '1em 0',
    padding: '1em 0',
    borderTop: '1px solid ' + colors.base,
    borderBottom: '1px solid ' + colors.base
  }
}
