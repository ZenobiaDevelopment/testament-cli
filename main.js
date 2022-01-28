#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

export function Rainbow(String) {
    chalkAnimation.rainbow(String);
}

export function animate(String) {
    createSpinner(String).start()
}

export function animateSuccess(String) {
    const success = createSpinner(String).start()

    success.success()
}

export function animateFail(String) {
    const failure = createSpinner(String).start()

    failure.error()
}

export function pulse(String) {
    chalkAnimation.pulse(String)
}

export function ASCII(hex, String) {
    const color = chalk.hex(hex);

    figlet(String, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(color(data));
    });
}

export function error(String) {
    console.log(chalk.bold.gray("[ERROR]" ) + chalk.bold.red(String).trim())
}

const testament = {
    Rainbow,
    animate,
    pulse,
    ASCII,
    animateSuccess,
    animateFail,
    error
};

export default testament