#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node


import { Error } from './src/error.js';
import { SuccessAnimation } from './src/animateSuccess.js';
import { FailAnimation } from './src/animateFail.js';
import { Spinner } from './src/animate.js';
import { GenerateASCII } from './src/ASCII.js';
import { Warn } from './src/warn.js';

import { black } from './src/colors/Black.js';
import { red } from './src/colors/Red.js';
import { green } from './src/colors/Green.js';
import { yellow } from './src/colors/Yellow.js';
import { blue } from './src/colors/Blue.js';
import { magenta } from './src/colors/Magenta.js';
import { cyan } from './src/colors/Cyan.js';
import { gray } from './src/colors/Gray.js';



export function animate(String) {
    Spinner(String);
}

export function Black(string) {
    black(string);
}

export function Red(string) {
    red(string);
}

export function Green(string) {
    green(string);
}

export function Yellow(string) {
    yellow(string);
}

export function Blue(string) {
    blue(string);
}

export function Magenta(string) {
    magenta(string);
}

export function Cyan(string) {
    cyan(string);
}

export function Gray(string) {
    gray(string);
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
