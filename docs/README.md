# Welcome to testament-cli documentation.

# Importing

To import testament-cli to your project, you need to have module type in your package.json. After that, write this code in your main file.

`import testament from 'testament-cli'`

# Rainbow animation

Rainbow animation is done by `Rainbow()` function and show rainbow colored text.

Parameters:
  - String: String

Example:
`testament.Rainbow('TEST')`

# animate

animate is done by `animate()` function and show a spinner text.

Parameters:
  - String: String

Example:
`testament.animate('TEST')`

# pulse

pulse animation is done by `pulse()` function and show pulsing colored text.

Parameters:
  - String: String

Example:
`testament.pulse('TEST')`

# ASCII

ASCII animation is done by `ASCII()` function and show ASCII colored text.

Parameters:
  - hex: String
  - String: String

Example:
`testament.ASCII('#0095a4', 'TEST')`

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
