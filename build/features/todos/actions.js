"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.todoActions=void 0;const tslib_1=require("tslib"),prop_types_1=(0,tslib_1.__importDefault)(require("prop-types")),actions_1=require("../../actions/lib/actions");exports.todoActions=(0,actions_1.createActionsFromDefinitions)({resize:{width:prop_types_1.default.number.isRequired},toggleTodosPanel:{},toggleTodosFeatureVisibility:{},setTodosWebview:{webview:prop_types_1.default.instanceOf(Element).isRequired},handleHostMessage:{action:prop_types_1.default.string.isRequired,data:prop_types_1.default.object},handleClientMessage:{channel:prop_types_1.default.string.isRequired,message:prop_types_1.default.shape({action:prop_types_1.default.string.isRequired,data:prop_types_1.default.object})},openDevTools:{},reload:{}},prop_types_1.default.checkPropTypes),exports.default=exports.todoActions;