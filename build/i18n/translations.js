"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generatedTranslations=void 0;const languages_1=require("./languages"),generatedTranslations=()=>{const e=[];for(const n of Object.keys(languages_1.APP_LOCALES))try{const s=require(`./locales/${n}.json`);e[n]=s}catch{console.warn(`Can't find translations for ${n}`)}return e};exports.generatedTranslations=generatedTranslations;