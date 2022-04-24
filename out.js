#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.js
var main_exports = {};
__export(main_exports, {
  ASCII: () => ASCII,
  Black: () => Black,
  Blue: () => Blue,
  Cyan: () => Cyan,
  Gray: () => Gray,
  Green: () => Green,
  Magenta: () => Magenta,
  Red: () => Red,
  Yellow: () => Yellow2,
  animate: () => animate,
  animateFail: () => animateFail,
  animateSuccess: () => animateSuccess,
  default: () => main_default,
  error: () => error,
  warn: () => warn
});
module.exports = __toCommonJS(main_exports);

// src/error.js
function Error2(String) {
  console.log("\x1B[90m[ERROR] \x1B[31m" + String + "\x1B[39m");
}

// src/animateSuccess.js
function SuccessAnimation(String) {
  console.log("\x1B[32m\u221A \x1B[39m" + String);
}

// src/animateFail.js
function FailAnimation(String) {
  console.log("\x1B[31m\xD7 \x1B[39m" + String);
}

// src/animate.js
var import_readline = __toESM(require("readline"));
var std = process.stdout;
function Spinner(String) {
  process.stdout.write("\x1B[?25l");
  const spinners = ["- " + String, "\\ " + String, "| " + String, "/ " + String];
  let index = 0;
  setInterval(() => {
    let line = spinners[index];
    if (line == void 0) {
      index = 0;
      line = spinners[index];
    }
    std.write(line);
    import_readline.default.cursorTo(std, 0, 2);
    index = index > spinners.length ? 0 : index + 1;
  }, 100);
}

// src/ASCII.js
var import_node_fetch = __toESM(require("node-fetch"));
function GenerateASCII(String) {
  let ENDPOINT = "https://artii.herokuapp.com/make?text=" + String;
  (0, import_node_fetch.default)(ENDPOINT, {
    method: "GET"
  }).then((res) => res.text()).then((text) => {
    console.log(text);
  });
}

// src/colors/Yellow.js
function Yellow(String) {
  return "\x1B[33m" + String + "\x1B[39m";
}

// src/warn.js
function Warn(String) {
  console.log(`${Yellow("[!]")} ${String}`);
}

// main.js
function Black(String) {
  return "\x1B[30m" + String + "\x1B[39m";
}
function Blue(String) {
  return "\x1B[34m" + String + "\x1B[39m";
}
function Cyan(String) {
  return "\x1B[36m" + String + "\x1B[39m";
}
function Gray(String) {
  return "\x1B[90m" + String + "\x1B[39m";
}
function Yellow2(String) {
  return "\x1B[33m" + String + "\x1B[39m";
}
function Red(String) {
  return "\x1B[31m" + String + "\x1B[39m";
}
function Magenta(String) {
  return "\x1B[35m" + String + "\x1B[39m";
}
function Green(String) {
  return "\x1B[32m" + String + "\x1B[39m";
}
function animate(String) {
  Spinner(String);
}
function animateSuccess(String) {
  SuccessAnimation(String);
}
function animateFail(String) {
  FailAnimation(String);
}
function ASCII(String) {
  GenerateASCII(String);
}
function error(String) {
  Error2(String);
}
function warn(String) {
  Warn(String);
}
var testament = {
  animate,
  ASCII,
  animateSuccess,
  animateFail,
  error,
  warn,
  Black,
  Red,
  Green,
  Blue,
  Magenta,
  Gray,
  Cyan,
  Yellow: Yellow2
};
var main_default = testament;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ASCII,
  Black,
  Blue,
  Cyan,
  Gray,
  Green,
  Magenta,
  Red,
  Yellow,
  animate,
  animateFail,
  animateSuccess,
  error,
  warn
});
