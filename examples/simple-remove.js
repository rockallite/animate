webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(185);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcAnimate = __webpack_require__(170);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint no-console:0, react/no-multi-comp:0 */
	
	var Demo = _react2.default.createClass({
	  displayName: 'Demo',
	  getInitialState: function getInitialState() {
	    return {
	      enter: true
	    };
	  },
	  toggleAnimate: function toggleAnimate() {
	    this.setState({
	      enter: !this.state.enter
	    });
	  },
	  render: function render() {
	    var style = {
	      display: this.state.enter ? 'block' : 'none',
	      marginTop: '20px',
	      width: '200px',
	      height: '200px',
	      backgroundColor: 'red'
	    };
	    return _react2.default.createElement(
	      'div',
	      {
	        __self: this
	      },
	      _react2.default.createElement(
	        'button',
	        { onClick: this.toggleAnimate, __self: this
	        },
	        'toggle'
	      ),
	      _react2.default.createElement(
	        _rcAnimate2.default,
	        {
	          component: '',
	          transitionName: 'fade',
	          __self: this
	        },
	        this.state.enter ? _react2.default.createElement('div', { key: '1', style: style, __self: this
	        }) : null
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Demo, {
	  __self: undefined
	}), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple-remove.js.map