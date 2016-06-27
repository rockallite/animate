webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(180);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAnimate = __webpack_require__(170);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _objectAssign = __webpack_require__(6);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Todo = _react2.default.createClass({
	  displayName: 'Todo',
	
	  propTypes: {
	    children: _react.PropTypes.any,
	    end: _react.PropTypes.func,
	    onClick: _react.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      visible: true,
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
	      display: props.visible ? 'block' : 'none',
	      width: 100,
	      border: '1px solid red',
	      padding: 10,
	      margin: 10
	    };
	    return _react2.default.createElement(
	      'div',
	      {
	        onClick: this.props.onClick,
	        style: style,
	        __self: this
	      },
	      props.children
	    );
	  }
	}); /* eslint no-console:0, react/no-multi-comp:0 */
	
	var TodoList = _react2.default.createClass({
	  displayName: 'TodoList',
	  getInitialState: function getInitialState() {
	    return {
	      items: [{ content: 'hello', visible: true }, { content: 'world', visible: true }, { content: 'click', visible: true }, { content: 'me', visible: true }]
	    };
	  },
	  handleHide: function handleHide(i, item) {
	    var newItems = this.state.items.concat([]);
	    newItems.forEach(function (n, index) {
	      newItems[index] = (0, _objectAssign2.default)({}, n, {
	        visible: true
	      });
	    });
	    newItems[i] = (0, _objectAssign2.default)({}, item, {
	      visible: false
	    });
	    this.setState({ items: newItems });
	  },
	  render: function render() {
	    var _this = this;
	
	    var items = this.state.items.map(function (item, i) {
	      return _react2.default.createElement(
	        Todo,
	        {
	          key: item.content,
	          visible: item.visible,
	          onClick: _this.handleHide.bind(_this, i, item),
	          __self: _this
	        },
	        item.content
	      );
	    });
	    return _react2.default.createElement(
	      'div',
	      {
	        __self: this
	      },
	      _react2.default.createElement(
	        _rcAnimate2.default,
	        {
	          showProp: 'visible',
	          transitionName: 'fade',
	          __self: this
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
	    'Hide Todo'
	  ),
	  _react2.default.createElement(TodoList, {
	    __self: undefined
	  })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=hide-todo.js.map