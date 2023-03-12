/*eslint-disable */
const { JSDOM } = require("jsdom");
const Module = require("module");

const { window } = new JSDOM('<div class="app"></div>', {
    url: "http://localhost:3000",
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;

const originalRequire = Module.prototype.require;
Module.prototype.require = function fn() {
    if (arguments[0] && arguments[0].endsWith(".css")) return;
    return originalRequire.apply(this, arguments);
};
