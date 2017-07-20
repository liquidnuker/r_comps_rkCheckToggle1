webpackJsonp([0],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Btn_Toggle(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { id: "checkAll", onClick: props.pr_checkAll, disabled: props.pr_checkDisabled },
      "Check All"
    ),
    React.createElement(
      "button",
      { id: "unCheckAll", onClick: props.pr_unCheckAll },
      "Uncheck All"
    )
  );
}

function SelectedItems(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Selected: [",
      props.pr_selectedItems,
      "]"
    )
  );
}

function CheckList(props) {
  return React.createElement(
    "div",
    null,
    props.pr_state.map(function (i, index) {
      return React.createElement(
        "span",
        { className: "checkToggle1-01" },
        React.createElement("input", { type: "checkbox", id: i, value: i, onChange: props.pr_onChange }),
        React.createElement(
          "label",
          { htmlFor: i, className: "checkToggle1-01_bg" },
          React.createElement(
            "span",
            { className: "checkToggle1-01_switch" },
            "\xA0"
          )
        ),
        React.createElement(
          "label",
          { htmlFor: i, className: "checkToggle1-01_vlabel" },
          i
        )
      );
    })
  );
}

var RkCheckToggle1 = function (_React$Component) {
  _inherits(RkCheckToggle1, _React$Component);

  function RkCheckToggle1(props) {
    _classCallCheck(this, RkCheckToggle1);

    var _this = _possibleConstructorReturn(this, (RkCheckToggle1.__proto__ || Object.getPrototypeOf(RkCheckToggle1)).call(this, props));

    _this.state = {
      items: ["item1", "item2"],
      selectedItems: []
    };

    // binders
    _this.toggleSelected = _this.toggleSelected.bind(_this);
    return _this;
  }

  // methods


  _createClass(RkCheckToggle1, [{
    key: "toggleSelected",
    value: function toggleSelected(event) {
      var selectedItems = this.state.selectedItems;
      var index = void 0;

      if (event.target.checked) {
        selectedItems.push(event.target.value);
      } else {
        index = selectedItems.indexOf(event.target.value);
        selectedItems.splice(index, 1);
      }

      this.setState({
        selectedItems: selectedItems
      });

      this.watch();
    }
  }, {
    key: "toggleCheck",
    value: function toggleCheck(checked) {
      var items = this.state.items;
      var selectedItems = this.state.selectedItems;

      var x = document.querySelectorAll("input");

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = x[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _i = _step.value;

          _i.checked = checked;
        }

        // push / empty selectedItems
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (checked) {
        selectedItems = [];
        for (var i in items) {
          selectedItems.push(items[i]);
        }
      } else {
        selectedItems = [];
      }

      this.setState(function (prevState) {
        return {
          selectedItems: selectedItems
        };
      });

      this.watch();
    }

    // watcher

  }, {
    key: "watch",
    value: function watch() {
      var btn_checkAll = document.getElementById("checkAll");
      var btn_unCheckAll = document.getElementById("unCheckAll");
      var items = this.state.items;
      var selectedItems = this.state.selectedItems;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          null,
          React.createElement(CheckList, { pr_state: this.state.items,
            pr_onChange: this.toggleSelected })
        ),
        React.createElement(Btn_Toggle, { pr_checkAll: function pr_checkAll() {
            _this2.toggleCheck(true);
          },
          pr_unCheckAll: function pr_unCheckAll() {
            _this2.toggleCheck(false);
          } }),
        React.createElement(SelectedItems, { pr_selectedItems: this.state.selectedItems })
      );
    }
  }]);

  return RkCheckToggle1;
}(React.Component);

exports.default = RkCheckToggle1;

/***/ })

});