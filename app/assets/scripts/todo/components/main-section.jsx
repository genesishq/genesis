/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import TextInput from './text-input.jsx';
import Actions from '../actions/';
import Item from './item.jsx';

/**
 * This is the MainSection component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class MainSection extends React.Component {

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
      allItems: props.allItems,
      areAllComplete: props.areAllComplete
    };
  }

  /**
   * Render react component.
   *
   * @return {object}
   */
  render() {
    if (Object.keys(this.props.allItems).length < 1) {
      return null;
    }

    const { allItems } = this.props;
    const items = [];

    for (let key in allItems) {
      items.push(<Item key={key} item={allItems[key]} />);
    }

    return (
      <section className="content">
        <label className="checkbox-label">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={this.onToggleCompleteAll.bind(this)}
            checked={this.props.areAllComplete ? 'checked' : ''}
          />
          <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 66 66" xml:space="preserve"><path d="M51.54,10.618c-2.298,2.166-6.747,6.813-8.902,9.119c-6.253,6.688-11.96,13.833-17.181,21.355  c-2.481-3.795-5.425-7.676-9.043-10.486c-1.441-1.119-3.826-2.878-5.051-0.342c-0.992,2.053,1.476,3.57,2.627,4.894  c3.016,3.47,5.377,7.553,7.244,11.743c0.454,0.968,0.785,2.107,1.483,2.942c1.794,2.144,4.678,1.252,5.907-0.909  c4.822-8.483,10.175-16.751,16.388-24.296c2.347-2.85,6.99-8.002,9.451-10.754c1.269-1.419,2.706-3.471,1.466-4.712  C54.687,7.932,52.905,9.33,51.54,10.618z"/></svg>'}} />
          Mark all as complete
        </label>
        <ul className="item-list">{items}</ul>
      </section>
    );
  }

  /**
   * Event handler to mark all items as complete.
   *
   * @return void
   */
  onToggleCompleteAll() {
    Actions.toggleCompleteAll();
  }
}

MainSection.propTypes = {
  allItems: React.PropTypes.object.isRequired,
  areAllComplete: React.PropTypes.bool.isRequired
};

MainSection.defaultProps = {
  allItems: {},
  areAllComplete: false
};
