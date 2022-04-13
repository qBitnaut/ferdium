"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),_propTypes=_interopRequireDefault(require("prop-types")),_mobxReact=require("mobx-react"),_reactIntl=require("react-intl"),_reactJss=_interopRequireDefault(require("react-jss")),_index=require("../../../components/ui/infobox/index"),_Loader=_interopRequireDefault(require("../../../components/ui/Loader")),_WorkspaceItem=_interopRequireDefault(require("./WorkspaceItem")),_CreateWorkspaceForm=_interopRequireDefault(require("./CreateWorkspaceForm")),_Request=_interopRequireDefault(require("../../../stores/lib/Request")),_Appear=_interopRequireDefault(require("../../../components/ui/effects/Appear")),_UIStore=_interopRequireDefault(require("../../../stores/UIStore")),_jsxRuntime=require("react/jsx-runtime");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const messages=(0,_reactIntl.defineMessages)({headline:{id:"settings.workspaces.headline",defaultMessage:[{type:0,value:"Your workspaces"}]},noServicesAdded:{id:"settings.workspaces.noWorkspacesAdded",defaultMessage:[{type:0,value:"You haven't created any workspaces yet."}]},workspacesRequestFailed:{id:"settings.workspaces.workspacesRequestFailed",defaultMessage:[{type:0,value:"Could not load your workspaces"}]},tryReloadWorkspaces:{id:"settings.workspaces.tryReloadWorkspaces",defaultMessage:[{type:0,value:"Try again"}]},updatedInfo:{id:"settings.workspaces.updatedInfo",defaultMessage:[{type:0,value:"Your changes have been saved"}]},deletedInfo:{id:"settings.workspaces.deletedInfo",defaultMessage:[{type:0,value:"Workspace has been deleted"}]},workspaceFeatureInfo:{id:"settings.workspaces.workspaceFeatureInfo",defaultMessage:[{type:0,value:"Ferdi Workspaces let you focus on what’s important right now. Set up different sets of services and easily switch between them at any time. You decide which services you need when and where, so we can help you stay on top of your game - or easily switch off from work whenever you want."}]},workspaceFeatureHeadline:{id:"settings.workspaces.workspaceFeatureHeadline",defaultMessage:[{type:0,value:"Less is More: Introducing Ferdi Workspaces"}]}}),styles={table:{width:"100%","& td":{padding:"10px"}},createForm:{height:"auto"},appear:{height:"auto"},teaserImage:{width:250,margin:[-8,0,0,20],alignSelf:"center"}};class WorkspacesDashboard extends _react.Component{render(){const{classes:e,getUserWorkspacesRequest:s,createWorkspaceRequest:t,deleteWorkspaceRequest:a,updateWorkspaceRequest:r,onCreateWorkspaceSubmit:i,onWorkspaceClick:o,workspaces:n}=this.props,{intl:u}=this.props;return(0,_jsxRuntime.jsxs)("div",{className:"settings__main",children:[(0,_jsxRuntime.jsx)("div",{className:"settings__header",children:(0,_jsxRuntime.jsx)("h1",{children:u.formatMessage(messages.headline)})}),(0,_jsxRuntime.jsxs)("div",{className:"settings__body",children:[r.wasExecuted&&r.result&&(0,_jsxRuntime.jsx)(_Appear.default,{className:e.appear,children:(0,_jsxRuntime.jsx)(_index.Infobox,{type:"success",icon:"checkbox-marked-circle-outline",dismissable:!0,onUnmount:r.reset,children:u.formatMessage(messages.updatedInfo)})}),a.wasExecuted&&a.result&&(0,_jsxRuntime.jsx)(_Appear.default,{className:e.appear,children:(0,_jsxRuntime.jsx)(_index.Infobox,{type:"success",icon:"checkbox-marked-circle-outline",dismissable:!0,onUnmount:a.reset,children:u.formatMessage(messages.deletedInfo)})}),(0,_jsxRuntime.jsx)("div",{className:e.createForm,children:(0,_jsxRuntime.jsx)(_CreateWorkspaceForm.default,{isSubmitting:t.isExecuting,onSubmit:i})}),s.isExecuting?(0,_jsxRuntime.jsx)(_Loader.default,{}):(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:s.error?(0,_jsxRuntime.jsx)(_index.Infobox,{icon:"alert",type:"danger",ctaLabel:u.formatMessage(messages.tryReloadWorkspaces),ctaLoading:s.isExecuting,ctaOnClick:s.retry,children:u.formatMessage(messages.workspacesRequestFailed)}):(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:0===n.length?(0,_jsxRuntime.jsx)("div",{className:"align-middle settings__empty-state",children:(0,_jsxRuntime.jsxs)("p",{className:"settings__empty-text",children:[(0,_jsxRuntime.jsx)("span",{className:"emoji",children:(0,_jsxRuntime.jsx)("img",{src:"./assets/images/emoji/sad.png",alt:""})}),u.formatMessage(messages.noServicesAdded)]})}):(0,_jsxRuntime.jsx)("table",{className:e.table,children:(0,_jsxRuntime.jsx)("tbody",{children:n.map((e=>(0,_jsxRuntime.jsx)(_WorkspaceItem.default,{workspace:e,onItemClick:e=>o(e)},e.id)))})})})})]})]})}}WorkspacesDashboard.propTypes={classes:_propTypes.default.object.isRequired,getUserWorkspacesRequest:_propTypes.default.instanceOf(_Request.default).isRequired,createWorkspaceRequest:_propTypes.default.instanceOf(_Request.default).isRequired,deleteWorkspaceRequest:_propTypes.default.instanceOf(_Request.default).isRequired,updateWorkspaceRequest:_propTypes.default.instanceOf(_Request.default).isRequired,onCreateWorkspaceSubmit:_propTypes.default.func.isRequired,onWorkspaceClick:_propTypes.default.func.isRequired,workspaces:_mobxReact.PropTypes.arrayOrObservableArray.isRequired};var _default=(0,_reactIntl.injectIntl)((0,_mobxReact.inject)("stores")((0,_reactJss.default)(styles,{injectTheme:!0})((0,_mobxReact.observer)(WorkspacesDashboard))));exports.default=_default,WorkspacesDashboard.propTypes={stores:_propTypes.default.shape({ui:_propTypes.default.instanceOf(_UIStore.default).isRequired}).isRequired};