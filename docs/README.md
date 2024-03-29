# Welcome to testament-cli documentation.

# Importing

To import testament-cli to your project, write this code in your main file.

EJS: `import testament from 'testament-cli';`

CJS: `const testament = require("testament-cli");`

# animate

animate is done by `animate()` function and show a spinner text.

Parameters:

- String: String

Example:
`testament.animate('TEST')`

# ASCII

ASCII animation is done by `ASCII()` function and show ASCII text.

Parameters:

- String: String

Example:
`testament.ASCII('TEST')`

# animateSuccess

animateSuccess animation is done by `animateSuccess()` function and show a green tick and text.

Parameters:

- String: String

Example:
`testament.animateSuccess('TEST')`

# animateFail

animateFail animation is done by `animateFail()` function and show a red tick and text.

Parameters:

- String: String

Example:
`testament.animateFail('TEST')`

# error

error animation is done by `error()` function and show a error tag and text.

Parameters:

- String: String

Example:
`testament.error('TEST')`

If you using error handlers, you can use this function instead of `console.log`.

# warn

warn is done using the `warn()` method, and will show a warning tag and text.

Parameters:

- String: String

Example:
`testament.warn('TEST')`

If you using debugging warning, you can use this function instead of `console.log`.

# Clock

Clock is done using the `Clock()` method, and will run a digital clock on your terminal.

Parameters:

- String: `24` or `12` hour format.

Example:
`testament.Clock('24')`

# ProgressBar

ProgressBar is done using the `progressBar()` method, and will run a progress bar on your terminal.

Parameters:

- percentage: It can be a string or a number ranging from 1 to 100.

Example:
`testament.percentage(50)`

# shuffleArray

shuffleArray is done using the `shuffleArray()` method, and will an array for you.

Parameters:

- array: It can be an array with values.

Example:
`testament.shuffleArray([1,2,3,4])`


# Colors

- <a href="https://github.com/ZenobiaDevelopment/testament-cli/blob/main/docs/COLORS.md">Click here.</a>
