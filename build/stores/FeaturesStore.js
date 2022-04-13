"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _class,_descriptor,_descriptor2,_descriptor3,_mobx=require("mobx"),_Store=_interopRequireDefault(require("./lib/Store")),_CachedRequest=_interopRequireDefault(require("./lib/CachedRequest")),_serviceProxy=_interopRequireDefault(require("../features/serviceProxy")),_basicAuth=_interopRequireDefault(require("../features/basicAuth")),_workspaces=_interopRequireDefault(require("../features/workspaces")),_quickSwitch=_interopRequireDefault(require("../features/quickSwitch")),_publishDebugInfo=_interopRequireDefault(require("../features/publishDebugInfo")),_communityRecipes=_interopRequireDefault(require("../features/communityRecipes")),_todos=_interopRequireDefault(require("../features/todos")),_appearance=_interopRequireDefault(require("../features/appearance"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _initializerDefineProperty(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function _applyDecoratedDescriptor(e,t,r,i,s){var a={};return Object.keys(i).forEach((function(e){a[e]=i[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),a),s&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(s):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}function _initializerWarningHelper(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}let FeaturesStore=(_class=class extends _Store.default{constructor(...e){super(...e),_initializerDefineProperty(this,"defaultFeaturesRequest",_descriptor,this),_initializerDefineProperty(this,"featuresRequest",_descriptor2,this),_initializerDefineProperty(this,"features",_descriptor3,this),this._updateFeatures=()=>{const e={};if(this.stores.user.isLoggedIn){let t={};try{t=this.featuresRequest.execute().result}catch(e){console.error(e)}Object.assign(e,t)}(0,_mobx.runInAction)("FeaturesStore::_updateFeatures",(()=>{this.features=e}))}}async setup(){this.registerReactions([this._updateFeatures,this._monitorLoginStatus.bind(this)]),await this.featuresRequest._promise,setTimeout(this._setupFeatures.bind(this),1)}get anonymousFeatures(){return this.defaultFeaturesRequest.execute().result||{}}_monitorLoginStatus(){this.stores.user.isLoggedIn?this.featuresRequest.invalidate({immediately:!0}):(this.defaultFeaturesRequest.execute(),this.defaultFeaturesRequest.invalidate({immediately:!0}))}_setupFeatures(){(0,_serviceProxy.default)(this.stores),(0,_basicAuth.default)(),(0,_workspaces.default)(this.stores,this.actions),(0,_quickSwitch.default)(),(0,_publishDebugInfo.default)(),(0,_communityRecipes.default)(this.stores,this.actions),(0,_todos.default)(this.stores,this.actions),(0,_appearance.default)(this.stores)}},_descriptor=_applyDecoratedDescriptor(_class.prototype,"defaultFeaturesRequest",[_mobx.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new _CachedRequest.default(this.api.features,"default")}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,"featuresRequest",[_mobx.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new _CachedRequest.default(this.api.features,"features")}}),_descriptor3=_applyDecoratedDescriptor(_class.prototype,"features",[_mobx.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),_applyDecoratedDescriptor(_class.prototype,"anonymousFeatures",[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,"anonymousFeatures"),_class.prototype),_class);exports.default=FeaturesStore;