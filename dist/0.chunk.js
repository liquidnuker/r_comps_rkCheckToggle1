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

function Btn_Checkall(props) {
  return React.createElement(
    "button",
    { onClick: props.pr_onClick },
    "Check All"
  );
}

function Btn_UnCheckAll(props) {
  return React.createElement(
    "button",
    { onClick: props.pr_onClick },
    "Uncheck All"
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
      console.log(event.target.id);
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
    }
  }, {
    key: "checkAll",
    value: function checkAll() {
      console.log("checkall");
    }
  }, {
    key: "unCheckAll",
    value: function unCheckAll() {
      console.log("uncheckall");
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
        React.createElement(Btn_Checkall, { pr_onClick: function pr_onClick() {
            _this2.checkAll();
          } }),
        React.createElement(Btn_UnCheckAll, { pr_onClick: function pr_onClick() {
            _this2.unCheckAll();
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