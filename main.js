#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node


import {Error} from './src/error.js'
import {SuccessAnimation} from './src/animateSuccess.js'
import {FailAnimation} from './src/animateFail.js'
import {Spinner} from './src/animate.js'
import {GenerateASCII} from './src/ASCII.js'



export function animate(String) {
    Spinner(String);
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

const testament = {
    animate,
    ASCII,
    animateSuccess,
    animateFail,
    error
};

export default testament;
