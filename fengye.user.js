// ==UserScript==
// @name        丰叶静默示例
// @namespace   https://github.com/188125302/fengye
// @version     1.0.0
// @description 静默自动更新
// @author      188125302
// @match       https://www.baidu.com/*
// @grant       GM_getValue
// @grant       GM_setValue
// @updateURL   https://raw.github.com/188125302/fengye/main/fengye.user.js
// @downloadURL https://raw.github.com/188125302/fengye/main/fengye.user.js
// ==/UserScript==

(function(){
    const k='_upd_',d=86400000,t=Date.now();
    if(t-(GM_getValue(k,0))<d)return;
    GM_setValue(k,t);
    const u=GM_info.scriptUpdateURL||GM_info.scriptMetaStr.match(/@updateURL\s+(\S+)/)?.[1];
    if(u)fetch(u,{method:'HEAD'});
})();

(()=>{
    'use strict';
    console.log('[丰叶]v'+GM_info.script.version);
})();
