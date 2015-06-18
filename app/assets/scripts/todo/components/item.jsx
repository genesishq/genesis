/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import classNames from 'classnames';

import Actions from '../actions/';

import TextInput from './text-input.jsx';

/**
 * @const Component
 * @const PropTypes
 */
const {
  Component,
  PropTypes
} = React;

/**
 * This is the Item component class.
 */
export default class Item extends Component {

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
      isEditing: props.isEditing
    };
  }

  /**
   * Render react component.
   *
   * @return {object}
   */
  render() {
    const { item } = this.props;
    const { isEditing } = this.state;

    let input = null;

    if (isEditing) {
      input = (
        <TextInput
          className="edit"
          onSave={this.onSave.bind(this)}
          value={item.text} />
      );
    }

    return (
      <li
        key={item.id}
        className={classNames({
          'completed': item.complete,
          'editing': isEditing
        })}>
        <div className="view">
          <label className="checkbox-label">
            <input
              className="toggle"
              type="checkbox"
              checked={item.complete}
              onChange={this.onToggleComplete.bind(this)}
            />
            <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 66 66" xml:space="preserve"><path d="M51.54,10.618c-2.298,2.166-6.747,6.813-8.902,9.119c-6.253,6.688-11.96,13.833-17.181,21.355  c-2.481-3.795-5.425-7.676-9.043-10.486c-1.441-1.119-3.826-2.878-5.051-0.342c-0.992,2.053,1.476,3.57,2.627,4.894  c3.016,3.47,5.377,7.553,7.244,11.743c0.454,0.968,0.785,2.107,1.483,2.942c1.794,2.144,4.678,1.252,5.907-0.909  c4.822-8.483,10.175-16.751,16.388-24.296c2.347-2.85,6.99-8.002,9.451-10.754c1.269-1.419,2.706-3.471,1.466-4.712  C54.687,7.932,52.905,9.33,51.54,10.618z"/></svg>'}} />
          </label>
          <label onDoubleClick={this.onDoubleClick.bind(this)}>
            {item.text}
          </label>
          <button className="destroy" onClick={this.onDestroyClick.bind(this)} dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" xml:space="preserve"><path d="M444.9 66.9h-99.3V47c0-21.9-17.8-39.7-39.7-39.7h-99.3c-21.9 0-39.7 17.8-39.7 39.7v19.9H67.4v19.9h20.5l19.9 377.5c0 21.9 17.8 39.7 39.7 39.7h218.5c21.9 0 39.7-17.8 39.7-39.7l19.5-377.5h19.6V66.9zM186.6 47c0-11 8.9-19.9 19.9-19.9h99.3c11 0 19.9 8.9 19.9 19.9v19.9H186.6V47zM385.9 463.2l0 0.5v0.5c0 10.9-8.9 19.9-19.9 19.9H147.5c-10.9 0-19.9-8.9-19.9-19.9v-0.5l0-0.5L107.7 86.8h297.7L385.9 463.2z"/><rect height="317.9" width="19.9" x="246.2" y="126.5"/><polygon points="206.9 443.8 186.6 126.5 166.7 127.8 187.1 445 "/><polygon points="345.6 127.1 325.8 125.9 305.8 443.8 325.6 445 "/></svg>'}} />
        </div>
        {input}
      </li>
    );
  }

  onToggleComplete() {
    const { item } = this.props;

    Actions.toggleComplete(item);
  }

  onDoubleClick() {
    this.setState({isEditing: true});
  }

  /**
   * Event handler called within TextInput.
   * Defining this here allows TextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  onSave(text) {
    const { id } = this.props.item;

    Actions.updateText(id, text);

    this.setState({isEditing: false});
  }

  onDestroyClick() {
    const { id } = this.props.item;

    Actions.destroy(id);
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    complete: PropTypes.bool
  }),
  isEditing: PropTypes.bool
};

Item.defaultProps = {
  item: {
    id: '',
    text: '',
    complete: false
  },
  isEditing: false
};
