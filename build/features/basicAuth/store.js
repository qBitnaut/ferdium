"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cancelLogin=exports.sendCredentials=exports.resetState=exports.state=void 0;const mobx_1=require("mobx"),electron_1=require("electron"),debug=require("debug")("Ferdi:feature:basicAuth"),defaultState={isModalVisible:!0,service:null,authInfo:null};function resetState(){Object.assign(exports.state,defaultState)}function sendCredentials(e,t){debug("Sending credentials to main",e,t),electron_1.ipcRenderer.send("feature-basic-auth-credentials",{user:e,password:t})}function cancelLogin(){debug("Cancel basic auth event"),electron_1.ipcRenderer.send("feature-basic-auth-cancel")}exports.state=(0,mobx_1.observable)(defaultState),exports.resetState=resetState,exports.sendCredentials=sendCredentials,exports.cancelLogin=cancelLogin;