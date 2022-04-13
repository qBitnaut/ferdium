"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),_propTypes=_interopRequireDefault(require("prop-types")),_mobxReact=require("mobx-react"),_reactIntl=require("react-intl"),_Button=_interopRequireDefault(require("../../ui/Button")),_jsxRuntime=require("react/jsx-runtime");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const messages=(0,_reactIntl.defineMessages)({headline:{id:"service.disabledHandler.headline",defaultMessage:[{type:1,value:"name"},{type:0,value:" is disabled"}]},action:{id:"service.disabledHandler.action",defaultMessage:[{type:0,value:"Enable "},{type:1,value:"name"}]}});class ServiceDisabled extends _react.Component{render(){const{name:e,enable:t}=this.props,{intl:a}=this.props;return(0,_jsxRuntime.jsxs)("div",{className:"services__info-layer",children:[(0,_jsxRuntime.jsx)("h1",{children:a.formatMessage(messages.headline,{name:e})}),(0,_jsxRuntime.jsx)(_Button.default,{label:a.formatMessage(messages.action,{name:e}),buttonType:"inverted",onClick:()=>t()})]})}}ServiceDisabled.propTypes={name:_propTypes.default.string.isRequired,enable:_propTypes.default.func.isRequired};var _default=(0,_reactIntl.injectIntl)((0,_mobxReact.observer)(ServiceDisabled));exports.default=_default;