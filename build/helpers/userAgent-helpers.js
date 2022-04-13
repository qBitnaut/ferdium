"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=require("tslib"),os_1=require("os"),macos_version_1=(0,tslib_1.__importDefault)(require("macos-version")),useragent_generator_1=require("useragent-generator"),environment_1=require("../environment");function macOS(){const e=(0,macos_version_1.default)()||"";let n=(0,os_1.cpus)()[0].model.split(" ")[0];return n&&/\(/.test(n)&&(n=n.split("(")[0]),`Macintosh; ${n} Mac OS X ${e.replace(/\./g,"_")}`}function windows(){const e=environment_1.osRelease,[n,r]=e.split(".");return`Windows NT ${n}.${r}; ${environment_1.is64Bit?"Win64":"Win32"}; ${environment_1.osArch}`}function linux(){return`X11; Ubuntu; Linux ${environment_1.is64Bit?"x86_64":environment_1.osArch}`}function userAgent(){let e="";return e=environment_1.isMac?macOS():environment_1.isWindows?windows():linux(),(0,useragent_generator_1.chrome)({os:e,version:environment_1.chromeVersion})}exports.default=userAgent;