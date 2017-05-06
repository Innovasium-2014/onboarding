'use strict';

var React = require('react/addons');
var ReactBootstrap = require('react-bootstrap');
var joinClasses = require('react/lib/joinClasses');
var cx = require('classnames');

var BootstrapMixin = ReactBootstrap.BootstrapMixin;
var DropdownStateMixin = ReactBootstrap.DropdownStateMixin;
var DropdownMenu = ReactBootstrap.DropdownMenu;
var Input = ReactBootstrap.Input;
var MenuItem = ReactBootstrap.MenuItem;

var defaultMaxText = '+# more not shown';

var defaultFilter = function(filterText, optionName) { // also optionIndex as third arg
  return (optionName.toLowerCase().indexOf(filterText.toLowerCase()) >= 0);
};

var genLength = function(list) {
  // deal with both regular arrays and immutablejs objects, which have .count() instead of length
  return (typeof list.count !== 'undefined' ? list.count() : list.length);
};

var genGet = function(list, i) {
  // deal with both regular arrays and immutablejs objects, which have list.get(i) instead of list[i]
  return (typeof list.get !== 'undefined' ? list.get(i) : list[i]);
};

var caseInsensIndexOf = function(list, str) {
  var lowerList = list.map(function(item) { return item.toLowerCase(); });
  return lowerList.indexOf(str.toLowerCase());
};


var FilterSearch = React.createClass({

  mixins: [BootstrapMixin, DropdownStateMixin],

  propTypes: {
    pullRight: React.PropTypes.bool,
    dropup: React.PropTypes.bool,
    defaultValue: React.PropTypes.string,
    menuClassName: React.PropTypes.string,
    max: React.PropTypes.number,
    maxText: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    navItem: React.PropTypes.bool,
    options: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired,
    filter: React.PropTypes.func,
    // the rest are to make eslint happy
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    bsSize: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      value: this.props.defaultValue || '',
      curIndex: -1
    };
  },

  filteredOptions: function() {
    var filter = this.props.filter || defaultFilter;
    return this.props.options.filter(filter.bind(undefined, this.state.value));
  },

  cappedLength: function(options) {
    var total = genLength(options);
    if (total>this.props.max) {
      // if it exceeded the max, we took an extra one off
      total = this.props.max - 1;
    }
    return total;
  },

  render: function () {
    var classes = {
        'dropdown': true,
        'open': this.state.open,
        'dropup': this.props.dropup
      };
    // you can provide a filter prop, which is a function(filterText, optionName, optionIndex) which should
    // return true to show option with the given name and index, given the input filterText.
    var filteredOptions = this.filteredOptions();
    var numFiltered = genLength(filteredOptions);
    var maxMenuItem = null;
    var maxText = typeof this.props.maxText === 'undefined' ? defaultMaxText : this.props.maxText;
    if (this.props.max && numFiltered > this.props.max) {
      // take an extra one off, to leave space for the maxText
      filteredOptions = filteredOptions.slice(0, this.props.max - 1);
      maxText = maxText.replace('#', (numFiltered - this.props.max + 1));
      maxMenuItem = this.renderAsMenuItem(maxText, this.props.max, null, true);
    }
    var dropdown = null;
    if (numFiltered>0) {
      dropdown = (<DropdownMenu
          className={this.props.menuClassName}
          ref="menu"
          aria-labelledby={this.props.id}
          pullRight={this.props.pullRight}
          key={1}
          onSelect={null}>
          {filteredOptions.map(this.renderAsMenuItem)}
          {maxMenuItem}
        </DropdownMenu>);
    }
    return (
      <div className={joinClasses(this.props.className, cx(classes))}>
        <Input
          {...this.props}
          menuClassName={null}
          options={null}
          type="text"
          bsSize={this.props.bsSize}
          ref="dropdownInput"
          onClick={this.handleDropdownClick}
          key={0}
          navDropdown={this.props.navItem}
          navItem={null}
          pullRight={null}
          onSelect={null}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          dropup={null}
          value={this.state.value} />
        {dropdown}
      </div>
    );
  },

  renderAsMenuItem: function(item, index, options, disabled) {
    var start = item.toLowerCase().indexOf(this.state.value.toLowerCase()),
        end = start + this.state.value.length,
        part1 = item.slice(0, start),
        part2 = item.slice(start, end),
        part3 = item.slice(end);
    var classes = cx({active: this.state.curIndex===index, disabled: disabled===true});
    if (disabled) {
      // don't highlight parts of disabled items, eg. the maxText
      part1 = item;
      part2 = null;
      part3 = null;
    }
    return (
      <MenuItem
        key={index}
        onSelect={this.handleOptionSelect.bind(this, index, item)}
        className={classes}
        onMouseEnter={this.handleMouseEnter.bind(this, index)}>
          {part1}<b>{part2}</b>{part3}
      </MenuItem>
    );
  },

  handleInputChange: function(e) {
    // the user changed the input text
    this.setState({value: e.target.value, curIndex: -1});
    this.setDropdownState(true);
    // fire the supplied onChange event.
    this._handleChange({value: e.target.value});
  },

  handleKeyDown: function(e) {
    // catch arrow keys and the Enter key
    var filteredOptions = this.filteredOptions();
    var numOptions = this.cappedLength(filteredOptions);
    var newName;
    switch(e.keyCode){

      case 38: // This is the up arrow
        if (this.state.curIndex>0) {
          this.setState({curIndex: this.state.curIndex-1});
        } else {
          this.setState({curIndex: numOptions-1});
        }
        break;

      case 40: // This is the down arrow
        this.setState({curIndex: (this.state.curIndex+1) % numOptions});
        break;

      case 13: // This is enter
        var newIndex = caseInsensIndexOf(this.props.options, this.state.value);  // may need this
        if (this.state.open) {
          e.preventDefault();
        }
        if (this.state.curIndex >= 0 && this.state.curIndex < numOptions) {
          newIndex = this.state.curIndex;
          newName = genGet(filteredOptions, this.state.curIndex);
          this.setDropdownState(false);
        } else if (this.state.curIndex === -1 && newIndex >= 0) {
          newName = genGet(this.props.options, newIndex);
          this.setDropdownState(false);
        } else {
          newIndex = this.state.curIndex;
          newName = this.state.value;
        }
        this._handleSelect({value: newName, index: newIndex});
        this._handleChange({value: newName});
        this.setState({value: newName, curIndex: -1});
        break;

    }
  },

  handleMouseEnter: function(index) {
    // when the mouse enters a dropdown menu item, set the active item to the item
    this.setState({curIndex: index});
  },

  handleDropdownClick: function (e) {
    e.preventDefault();

    this.setDropdownState(!this.state.open);
  },

  handleOptionSelect: function(key, name) {
    // the user clicked on a dropdown menu item
    this.setDropdownState(false);
    this._handleSelect({value: name, index: this.state.curIndex});
    this._handleChange({value: name});
    this.setState({value: name, curIndex: -1});
  },

  _handleChange: function(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  },

  _handleSelect: function(e) {
    if (this.props.onSelect) {
      this.props.onSelect(e);
    }
  }


});

module.exports = FilterSearch;
