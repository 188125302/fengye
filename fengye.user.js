// ==UserScript==
// @name        丰叶静默示例
// @namespace   https://github.com/188125302/fengye
// @version     1.0.0          <!-- 每次发版+1 -->
// @description 静默自动更新 + 正式功能演示
// @author      188125302
// @match       https://www.baidu.com/*
// @grant       GM_getValue
// @grant       GM_setValue
// @updateURL   https://raw.githubusercontent.com/188125302/fengye/main/fengye.user.js
// @downloadURL https://raw.githubusercontent.com/188125302/fengye/main/fengye.user.js
// ==/UserScript==

/* ====== 静默更新触发器（15行） ====== */
(function () {
    const KEY = '_upd_', DAY = 86400000;                     // 24 h
    const now = Date.now();
    if (now - (GM_getValue(KEY, 0)) < DAY) return;           // 未到时间
    GM_setValue(KEY, now);
    const u = GM_info.scriptUpdateURL || GM_info.scriptMetaStr.match(/@updateURL\s+(\S+)/)?.[1];
    if (u) fetch(u, {method: 'HEAD'});                     // 偷偷触发检查
})();
/* ===================================== */

/* ====== 正式功能区域（示例） ====== */
(() => {
    'use strict';
    console.log('[丰叶脚本] 当前版本 v' + GM_info.script.version);
    /* 这里写你的任何功能 */
})();
