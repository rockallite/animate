webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(186);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAnimate = __webpack_require__(170);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint no-console:0, react/no-multi-comp:0, no-alert:0 */
	
	var Todo = _react2.default.createClass({
	  displayName: 'Todo',
	
	  propTypes: {
	    children: _react.PropTypes.any,
	    end: _react.PropTypes.func,
	    onClick: _react.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      end: function end() {}
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    console.log('componentWillUnmount');
	    console.log(this.props.children);
	    this.props.end();
	  },
	  render: function render() {
	    var props = this.props;
	    var style = {
	      width: 100,
	      border: '1px solid red',
	      padding: 10,
	      margin: 10
	    };
	    return _react2.default.createElement(
	      'div',
	      { onClick: this.props.onClick, style: style, __self: this
	      },
	      props.children
	    );
	  }
	});
	var TodoList = _react2.default.createClass({
	  displayName: 'TodoList',
	  getInitialState: function getInitialState() {
	    return { items: ['hello', 'world', 'click', 'me'] };
	  },
	  handleAdd: function handleAdd() {
	    var items = this.state.items.concat([prompt('Enter some text')]);
	    this.setState({ items: items });
	  },
	  handleRemove: function handleRemove(i) {
	    var items = this.state.items.concat();
	    items.splice(i, 1);
	    this.setState({ items: items });
	  },
	  render: function render() {
	    var _this = this;
	
	    var items = this.state.items.map(function (item, i) {
	      return _react2.default.createElement(
	        Todo,
	        { key: item, onClick: _this.handleRemove.bind(_this, i), __self: _this
	        },
	        item
	      );
	    });
	    return _react2.default.createElement(
	      'div',
	      {
	        __self: this
	      },
	      _react2.default.createElement(
	        'button',
	        { onClick: this.handleAdd, __self: this
	        },
	        'Add Item'
	      ),
	      _react2.default.createElement(
	        _rcAnimate2.default,
	        { transitionName: 'fade', __self: this
	        },
	        items
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  {
	    __self: undefined
	  },
	  _react2.default.createElement(
	    'h2',
	    {
	      __self: undefined
	    },
	    'Todo'
	  ),
	  _react2.default.createElement(TodoList, {
	    __self: undefined
	  })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=todo.js.map