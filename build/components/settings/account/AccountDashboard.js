"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),_propTypes=_interopRequireDefault(require("prop-types")),_mobxReact=require("mobx-react"),_reactIntl=require("react-intl"),_reactTooltip=_interopRequireDefault(require("react-tooltip")),_headline=require("../../ui/headline"),_Loader=_interopRequireDefault(require("../../ui/Loader")),_Button=_interopRequireDefault(require("../../ui/Button")),_Infobox=_interopRequireDefault(require("../../ui/Infobox")),_config=require("../../../config"),_jsxRuntime=require("react/jsx-runtime");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const messages=(0,_reactIntl.defineMessages)({headline:{id:"settings.account.headline",defaultMessage:[{type:0,value:"Account"}]},headlineDangerZone:{id:"settings.account.headlineDangerZone",defaultMessage:[{type:0,value:"Danger Zone"}]},accountEditButton:{id:"settings.account.account.editButton",defaultMessage:[{type:0,value:"Edit account"}]},invoicesButton:{id:"settings.account.headlineInvoices",defaultMessage:[{type:0,value:"Invoices"}]},userInfoRequestFailed:{id:"settings.account.userInfoRequestFailed",defaultMessage:[{type:0,value:"Could not load user information"}]},tryReloadUserInfoRequest:{id:"settings.account.tryReloadUserInfoRequest",defaultMessage:[{type:0,value:"Try again"}]},deleteAccount:{id:"settings.account.deleteAccount",defaultMessage:[{type:0,value:"Delete account"}]},deleteInfo:{id:"settings.account.deleteInfo",defaultMessage:[{type:0,value:"If you don't need your Ferdi account any longer, you can delete your account and all related data here."}]},deleteEmailSent:{id:"settings.account.deleteEmailSent",defaultMessage:[{type:0,value:"You have received an email with a link to confirm your account deletion. Your account and data cannot be restored!"}]},yourLicense:{id:"settings.account.yourLicense",defaultMessage:[{type:0,value:"Your Ferdi License:"}]},accountUnavailable:{id:"settings.account.accountUnavailable",defaultMessage:[{type:0,value:"Account is unavailable"}]},accountUnavailableInfo:{id:"settings.account.accountUnavailableInfo",defaultMessage:[{type:0,value:"You are using Ferdi without an account. If you want to use Ferdi with an account and keep your services synchronized across installations, please select a server in the Settings tab then login."}]}});class AccountDashboard extends _react.Component{render(){const{user:e,isLoading:s,userInfoRequestFailed:t,retryUserInfoRequest:a,deleteAccount:n,isLoadingDeleteAccount:i,isDeleteAccountSuccessful:u,openEditAccount:o,openInvoices:r,server:c}=this.props,{intl:l}=this.props,d=c===_config.LOCAL_SERVER,_=c===_config.LIVE_FRANZ_API;return(0,_jsxRuntime.jsxs)("div",{className:"settings__main",children:[(0,_jsxRuntime.jsx)("div",{className:"settings__header",children:(0,_jsxRuntime.jsx)("span",{className:"settings__header-item",children:l.formatMessage(messages.headline)})}),(0,_jsxRuntime.jsxs)("div",{className:"settings__body",children:[d&&(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)("h1",{style:{marginBottom:0},children:l.formatMessage(messages.accountUnavailable)}),(0,_jsxRuntime.jsx)("p",{className:"settings__message",style:{borderTop:0,marginTop:0},children:l.formatMessage(messages.accountUnavailableInfo)})]}),!d&&(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[s&&(0,_jsxRuntime.jsx)(_Loader.default,{}),!s&&t&&(0,_jsxRuntime.jsx)(_Infobox.default,{icon:"alert",type:"danger",ctaLabel:l.formatMessage(messages.tryReloadUserInfoRequest),ctaLoading:s,ctaOnClick:a,children:l.formatMessage(messages.userInfoRequestFailed)}),!t&&(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[!s&&(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)("div",{className:"account",children:(0,_jsxRuntime.jsxs)("div",{className:"account__box account__box--flex",children:[(0,_jsxRuntime.jsx)("div",{className:"account__avatar",children:(0,_jsxRuntime.jsx)("img",{src:"./assets/images/logo.svg",alt:""})}),(0,_jsxRuntime.jsxs)("div",{className:"account__info",children:[(0,_jsxRuntime.jsx)(_headline.H1,{children:(0,_jsxRuntime.jsx)("span",{className:"username",children:`${e.firstname} ${e.lastname}`})}),(0,_jsxRuntime.jsxs)("p",{children:[e.organization&&`${e.organization}, `,e.email]}),(0,_jsxRuntime.jsx)("div",{className:"manage-user-links",children:(0,_jsxRuntime.jsx)(_Button.default,{label:l.formatMessage(messages.accountEditButton),className:"franz-form__button--inverted",onClick:o})})]})]})}),e.isSubscriptionOwner&&_&&(0,_jsxRuntime.jsx)("div",{className:"account",children:(0,_jsxRuntime.jsxs)("div",{className:"account__box",children:[(0,_jsxRuntime.jsx)(_headline.H2,{children:l.formatMessage(messages.yourLicense)}),(0,_jsxRuntime.jsx)("p",{children:"Franz"}),(0,_jsxRuntime.jsx)("div",{className:"manage-user-links",children:(0,_jsxRuntime.jsx)(_Button.default,{label:l.formatMessage(messages.invoicesButton),className:"franz-form__button--inverted",onClick:r})})]})})]}),_&&(0,_jsxRuntime.jsx)("div",{className:"account franz-form",children:(0,_jsxRuntime.jsxs)("div",{className:"account__box",children:[(0,_jsxRuntime.jsx)(_headline.H2,{children:l.formatMessage(messages.headlineDangerZone)}),!u&&(0,_jsxRuntime.jsxs)("div",{className:"account__subscription",children:[(0,_jsxRuntime.jsx)("p",{children:l.formatMessage(messages.deleteInfo)}),(0,_jsxRuntime.jsx)(_Button.default,{label:l.formatMessage(messages.deleteAccount),buttonType:"danger",onClick:()=>n(),loaded:!i})]}),u&&(0,_jsxRuntime.jsx)("p",{children:l.formatMessage(messages.deleteEmailSent)})]})})]})]})]}),(0,_jsxRuntime.jsx)(_reactTooltip.default,{place:"right",type:"dark",effect:"solid"})]})}}AccountDashboard.propTypes={user:_mobxReact.PropTypes.observableObject.isRequired,isLoading:_propTypes.default.bool.isRequired,userInfoRequestFailed:_propTypes.default.bool.isRequired,retryUserInfoRequest:_propTypes.default.func.isRequired,deleteAccount:_propTypes.default.func.isRequired,isLoadingDeleteAccount:_propTypes.default.bool.isRequired,isDeleteAccountSuccessful:_propTypes.default.bool.isRequired,openEditAccount:_propTypes.default.func.isRequired,openInvoices:_propTypes.default.func.isRequired,server:_propTypes.default.string.isRequired};var _default=(0,_reactIntl.injectIntl)((0,_mobxReact.observer)(AccountDashboard));exports.default=_default;