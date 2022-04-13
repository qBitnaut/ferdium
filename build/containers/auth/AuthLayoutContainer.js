"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),_propTypes=_interopRequireDefault(require("prop-types")),_mobxReact=require("mobx-react"),_reactJss=require("react-jss"),_AuthLayout=_interopRequireDefault(require("../../components/auth/AuthLayout")),_AppStore=_interopRequireDefault(require("../../stores/AppStore")),_UserStore=_interopRequireDefault(require("../../stores/UserStore")),_GlobalErrorStore=_interopRequireDefault(require("../../stores/GlobalErrorStore")),_UIStore=_interopRequireDefault(require("../../stores/UIStore")),_SettingsStore=_interopRequireDefault(require("../../stores/SettingsStore")),_AppLoader=_interopRequireDefault(require("../../components/ui/AppLoader")),_propTypes2=require("../../prop-types"),_FeaturesStore=_interopRequireDefault(require("../../stores/FeaturesStore")),_jsxRuntime=require("react/jsx-runtime");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}class AuthLayoutContainer extends _react.Component{render(){const{stores:e,actions:t,children:r,location:s}=this.props,{app:u,features:a,globalError:i,user:o}=e;if(a.defaultFeaturesRequest.isExecuting&&!a.defaultFeaturesRequest.wasExecuted)return(0,_jsxRuntime.jsx)(_reactJss.ThemeProvider,{theme:e.ui.theme,children:(0,_jsxRuntime.jsx)(_AppLoader.default,{})});const{isLoggingOut:p}=o;return p?(0,_jsxRuntime.jsx)(_reactJss.ThemeProvider,{theme:e.ui.theme,children:(0,_jsxRuntime.jsx)(_AppLoader.default,{texts:["Logging you out..."]})}):(0,_jsxRuntime.jsx)(_reactJss.ThemeProvider,{theme:e.ui.theme,children:(0,_jsxRuntime.jsx)(_AuthLayout.default,{error:i.response,pathname:s.pathname,isOnline:u.isOnline,isAPIHealthy:!u.healthCheckRequest.isError,retryHealthCheck:t.app.healthCheck,isHealthCheckLoading:u.healthCheckRequest.isExecuting,isFullScreen:u.isFullScreen,installAppUpdate:t.app.installUpdate,appUpdateIsDownloaded:u.updateStatus===u.updateStatusTypes.DOWNLOADED,children:r})})}}AuthLayoutContainer.propTypes={children:_propTypes2.oneOrManyChildElements.isRequired,location:_propTypes.default.shape({pathname:_propTypes.default.string.isRequired}).isRequired},AuthLayoutContainer.propTypes={stores:_propTypes.default.shape({app:_propTypes.default.instanceOf(_AppStore.default).isRequired,features:_propTypes.default.instanceOf(_FeaturesStore.default).isRequired,globalError:_propTypes.default.instanceOf(_GlobalErrorStore.default).isRequired,user:_propTypes.default.instanceOf(_UserStore.default).isRequired,ui:_propTypes.default.instanceOf(_UIStore.default).isRequired}).isRequired,actions:_propTypes.default.shape({app:_propTypes.default.instanceOf(_AppStore.default).isRequired,settings:_propTypes.default.instanceOf(_SettingsStore.default).isRequired}).isRequired};var _default=(0,_mobxReact.inject)("stores","actions")((0,_mobxReact.observer)(AuthLayoutContainer));exports.default=_default;