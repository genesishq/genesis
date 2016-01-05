/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './items.scss'

import React from 'react'

import { completeAll } from 'actions'

import Item from './Item/Item'
import Checkbox from 'components/TodoApp/common/Checkbox/Checkbox'

/**
 * This is the Items component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const Items = ({ items, areAllCompleted }) =>
  <section className='item-list'>
    <Checkbox checked={areAllCompleted} text='Toggle all as completed' onChange={completeAll} />
    <ul className='items'>
      {Object.keys(items).map(key => <Item key={key} item={items[key]} />)}
    </ul>
  </section>

export default Items
