"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shuffleArray=void 0;const shuffleArray=r=>r.map((r=>[Math.random(),r])).sort(((r,e)=>r[0]-e[0])).map((r=>r[1]));exports.shuffleArray=shuffleArray;