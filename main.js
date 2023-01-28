#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node


import { Error } from './src/error.js';
import { SuccessAnimation } from './src/animateSuccess.js';
import { FailAnimation } from './src/animateFail.js';
import { Spinner } from './src/animate.js';
import { clock } from './src/clock.js';
import { GenerateASCII } from './src/ASCII.js';
import { Warn } from './src/warn.js';

// import { Black } from './src/colors/Black.js';
// import { Red } from './src/colors/Red.js';
// import { Green } from './src/colors/Green.js';
// import { Yellow } from './src/colors/Yellow.js';
// import { Blue } from './src/colors/Blue.js';
// import { Magenta } from './src/colors/Magenta.js';
// import { Cyan } from './src/colors/Cyan.js';
// import { Gray } from './src/colors/Gray.js';

export function Black(String) {
    return '\x1b[30m' + String + '\x1b[39m';
}

export function Blue(String) {
    return '\x1b[34m' + String + '\x1b[39m';
}

export function Cyan(String) {
    return '\x1b[36m' + String + '\x1b[39m';
}

export function Gray(String) {
    return '\x1b[90m' + String + '\x1b[39m';
}

export function Yellow(String) {
    return '\x1b[33m' + String + '\x1b[39m';
}

export function Red(String) {
    return '\x1b[31m' + String + '\x1b[39m';
}

export function Magenta(String) {
    return '\x1b[35m' + String + '\x1b[39m';
}

export function Green(String) {
    return '\x1b[32m' + String + '\x1b[39m';
}


export function animate(String) {
    Spinner(String);
}

export function Clock(String) {
    clock(String);
}


export function animateSuccess(String) {
    SuccessAnimation(String);
}

export function animateFail(String) {
    FailAnimation(String)
}

export function ASCII(String) {
    GenerateASCII(String);
}

export function error(String) {
    Error(String);
}

export function warn(String) {
    Warn(String);
}

const testament = {
    Clock,
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
    Yellow
};

export default testament;
