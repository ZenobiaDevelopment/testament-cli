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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.js
var main_exports = {};
__export(main_exports, {
  ASCII: () => ASCII,
  Black: () => Black,
  Blue: () => Blue,
  Clock: () => Clock,
  Cyan: () => Cyan,
  Gray: () => Gray,
  Green: () => Green,
  Magenta: () => Magenta,
  Red: () => Red,
  Yellow: () => Yellow,
  animate: () => animate,
  animateFail: () => animateFail,
  animateSuccess: () => animateSuccess,
  default: () => main_default,
  error: () => error,
  progressBar: () => progressBar,
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

// src/clock.js
function clock(format) {
  if (format === "24") {
    let update_24 = function(i) {
      if (i < 10) {
        return "0" + i;
      } else {
        return i;
      }
    }, current = function() {
      let date_24 = new Date();
      let hours = date_24.getHours();
      let minutes = date_24.getMinutes();
      let seconds = date_24.getSeconds();
      hours = update_24(hours);
      minutes = update_24(minutes);
      seconds = update_24(seconds);
      process.stdout.write(hours + " : " + minutes + " : " + seconds + `\r`);
      setTimeout(() => {
        current();
      }, 1e3);
    };
    current();
  } else if (format === "12") {
    let update_12 = function(k) {
      if (k < 10) {
        return "0" + k;
      } else {
        return k;
      }
    }, currentTime = function() {
      let date_12 = new Date();
      let hours = date_12.getHours();
      let minutes = date_12.getMinutes();
      let seconds = date_12.getSeconds();
      let midday = "AM";
      midday = hours >= 12 ? "PM" : "AM";
      hours = hours == 0 ? 12 : hours > 12 ? hours - 12 : hours;
      hours = update_12(hours);
      minutes = update_12(minutes);
      seconds = update_12(seconds);
      process.stdout.write(hours + " : " + minutes + " : " + seconds + " " + midday + `\r`);
      setTimeout(() => {
        currentTime();
      }, 1e3);
    };
    currentTime();
  }
}

// src/ASCII.js
var import_puppeteer = __toESM(require("puppeteer"));
function GenerateASCII(String) {
  async function fetchContent(url2, selector) {
    const browser = await import_puppeteer.default.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url2);
    await page.waitForSelector(selector);
    const content = await page.$eval(selector, (element) => element.innerHTML);
    await browser.close();
    return content;
  }
  const url = "https://patorjk.com/software/taag/#p=display&f=Big&t=" + String;
  const divSelector = "pre#taag_output_text";
  fetchContent(url, divSelector).then((content) => {
    console.log(content);
  }).catch((error2) => console.error("Error fetching data:", error2));
}

// src/colors/yellow.js
function yellow(String) {
  return "\x1B[33m" + String + "\x1B[39m";
}

// src/warn.js
function Warn(String) {
  console.log(`${yellow("[!]")} ${String}`);
}

// src/progressbar.js
function progressbar(percentage) {
  if (percentage < 1 || percentage > 100) {
    console.error("Error: Progress should be a number between 1 and 100.");
    return;
  }
  percentage = Math.min(100, Math.max(0, percentage));
  const numBars = Math.floor(percentage / 5);
  const progressBar2 = `[${"=".repeat(numBars)}${" ".repeat(20 - numBars)}] ${percentage}%`;
  console.log(progressBar2);
}

// src/colors/black.js
function black(String) {
  return "\x1B[30m" + String + "\x1B[39m";
}

// src/colors/red.js
function red(String) {
  return "\x1B[31m" + String + "\x1B[39m";
}

// src/colors/green.js
function green(String) {
  return "\x1B[32m" + String + "\x1B[39m";
}

// src/colors/blue.js
function blue(String) {
  return "\x1B[34m" + String + "\x1B[39m";
}

// src/colors/magenta.js
function magenta(String) {
  return "\x1B[35m" + String + "\x1B[39m";
}

// src/colors/cyan.js
function cyan(String) {
  return "\x1B[36m" + String + "\x1B[39m";
}

// src/colors/gray.js
function gray(String) {
  return "\x1B[90m" + String + "\x1B[39m";
}

// main.js
function Black(string) {
  return black(string);
}
function Blue(string) {
  return blue(string);
}
function Cyan(string) {
  return cyan(string);
}
function Gray(string) {
  return gray(string);
}
function Yellow(string) {
  return yellow(string);
}
function Red(string) {
  return red(string);
}
function Magenta(string) {
  return magenta(string);
}
function Green(string) {
  return green(string);
}
function animate(String) {
  Spinner(String);
}
function Clock(String) {
  clock(String);
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
function progressBar(percentage) {
  progressbar(percentage);
}
var testament = {
  Clock,
  animate,
  ASCII,
  animateSuccess,
  animateFail,
  error,
  warn,
  progressBar,
  Black,
  Red,
  Green,
  Blue,
  Magenta,
  Gray,
  Cyan,
  Yellow
};
var main_default = testament;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ASCII,
  Black,
  Blue,
  Clock,
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
  progressBar,
  warn
});
