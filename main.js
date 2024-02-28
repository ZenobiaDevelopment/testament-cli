#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node


import { Error } from './src/error.js';
import { SuccessAnimation } from './src/animateSuccess.js';
import { FailAnimation } from './src/animateFail.js';
import { Spinner } from './src/animate.js';
import { clock } from './src/clock.js';
import { GenerateASCII } from './src/ASCII.js';
import { Warn } from './src/warn.js';
import { progressbar } from './src/progressbar.js';

import { black } from './src/colors/black.js';
import { red } from './src/colors/red.js';
import { green } from './src/colors/green.js';
import { yellow } from './src/colors/yellow.js';
import { blue } from './src/colors/blue.js';
import { magenta } from './src/colors/magenta.js';
import { cyan } from './src/colors/cyan.js';
import { gray } from './src/colors/gray.js';

export function Black(string) {
    return black(string);
}

export function Blue(string) {
    return blue(string);
}

export function Cyan(string) {
    return cyan(string);
}

export function Gray(string) {
    return gray(string);
}

export function Yellow(string) {
    return yellow(string);
}

export function Red(string) {
    return red(string);
}

export function Magenta(string) {
    return magenta(string);
}

export function Green(string) {
    return green(string);
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
