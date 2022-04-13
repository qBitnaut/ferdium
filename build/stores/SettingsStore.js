"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _class,_descriptor,_descriptor2,_electron=require("electron"),_remote=require("@electron/remote"),_mobx=require("mobx"),_mobxLocalstorage=_interopRequireDefault(require("mobx-localstorage")),_config=require("../config"),_passwordHelpers=require("../helpers/password-helpers"),_Request=_interopRequireDefault(require("./lib/Request")),_Store=_interopRequireDefault(require("./lib/Store"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _initializerDefineProperty(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function _applyDecoratedDescriptor(e,t,r,i,s){var a={};return Object.keys(i).forEach((function(e){a[e]=i[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),a),s&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(s):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}function _initializerWarningHelper(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}const debug=require("debug")("Ferdi:SettingsStore");let SettingsStore=(_class=class extends _Store.default{constructor(...e){super(...e),_initializerDefineProperty(this,"updateAppSettingsRequest",_descriptor,this),this.loaded=!1,this.fileSystemSettingsTypes=_config.FILE_SYSTEM_SETTINGS_TYPES,_initializerDefineProperty(this,"_fileSystemSettingsCache",_descriptor2,this),this.actions.settings.update.listen(this._update.bind(this)),this.actions.settings.remove.listen(this._remove.bind(this))}async setup(){let e;await this._migrate(),(0,_mobx.reaction)((()=>this.all.app.autohideMenuBar),(()=>{const e=(0,_remote.getCurrentWindow)();e.setMenuBarVisibility(!this.all.app.autohideMenuBar),e.autoHideMenuBar=this.all.app.autohideMenuBar})),(0,_mobx.reaction)((()=>this.all.app.server),(e=>{e===_config.LOCAL_SERVER&&_electron.ipcRenderer.send("startLocalServer")}),{fireImmediately:!0}),(0,_remote.getCurrentWindow)().on("blur",(()=>{this.all.app.lockingFeatureEnabled&&0!==this.all.app.inactivityLock&&(e=setTimeout((()=>{this.actions.settings.update({type:"app",data:{locked:!0}})}),1e3*this.all.app.inactivityLock*60))})),(0,_remote.getCurrentWindow)().on("focus",(()=>{e&&clearTimeout(e)})),_electron.ipcRenderer.on("appSettings",((e,t)=>{!this.loaded&&"app"===t.type&&t.data.lockingFeatureEnabled&&process.nextTick((()=>{this.all.app.locked||(this.all.app.locked=!0)})),debug("Get appSettings resolves",t.type,t.data),Object.assign(this._fileSystemSettingsCache[t.type],t.data),this.loaded=!0,_electron.ipcRenderer.send("initialAppSettings",t)}));for(const e of this.fileSystemSettingsTypes)_electron.ipcRenderer.send("getAppSettings",e)}get app(){return this._fileSystemSettingsCache.app||_config.DEFAULT_APP_SETTINGS}get proxy(){return this._fileSystemSettingsCache.proxy||{}}get service(){return _mobxLocalstorage.default.getItem("service")||{activeService:""}}get stats(){return _mobxLocalstorage.default.getItem("stats")||{activeService:""}}get migration(){return _mobxLocalstorage.default.getItem("migration")||{}}get all(){return{app:this.app,proxy:this.proxy,service:this.service,stats:this.stats,migration:this.migration}}async _update({type:e,data:t}){const r=this.all;this.fileSystemSettingsTypes.includes(e)?(debug("Update settings on file system",e,t),_electron.ipcRenderer.send("updateAppSettings",{type:e,data:t}),Object.assign(this._fileSystemSettingsCache[e],t)):(debug("Update settings",e,t,this.all),_mobxLocalstorage.default.setItem(e,Object.assign(r[e],t)))}async _remove({type:e,key:t}){if("app"===e)return;const r=this.all[e];Object.hasOwnProperty.call(r,t)&&(delete r[t],this.actions.settings.update({type:e,data:r}))}_ensureMigrationAndMarkDone(e,t){if(!this.all.migration[e]){t();const r={};r[e]=!0,this.actions.settings.update({type:"migration",data:r})}}async _migrate(){const e=_mobxLocalstorage.default.getItem("app")||{};this._ensureMigrationAndMarkDone("password-hashing",(()=>{""!==this.stores.settings.app.lockedPassword&&this.actions.settings.update({type:"app",data:{lockedPassword:(0,_passwordHelpers.hash)(String(e.lockedPassword))}}),debug("Migrated updates settings")})),this._ensureMigrationAndMarkDone("5.6.0-beta.6-settings",(()=>{this.actions.settings.update({type:"app",data:{searchEngine:_config.DEFAULT_APP_SETTINGS.searchEngine}})})),this._ensureMigrationAndMarkDone("user-agent-settings",(()=>{this.actions.settings.update({type:"app",data:{userAgentPref:_config.DEFAULT_APP_SETTINGS.userAgentPref}})}))}},_descriptor=_applyDecoratedDescriptor(_class.prototype,"updateAppSettingsRequest",[_mobx.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new _Request.default(this.api.local,"updateAppSettings")}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,"_fileSystemSettingsCache",[_mobx.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{app:_config.DEFAULT_APP_SETTINGS,proxy:{}}}}),_applyDecoratedDescriptor(_class.prototype,"app",[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,"app"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"proxy",[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,"proxy"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"service",[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,"service"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"stats",[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,"stats"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"migration",[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,"migration"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"all",[_mobx.computed],Object.getOwnPropertyDescriptor(_class.prototype,"all"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"_update",[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,"_update"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"_remove",[_mobx.action],Object.getOwnPropertyDescriptor(_class.prototype,"_remove"),_class.prototype),_class);exports.default=SettingsStore;