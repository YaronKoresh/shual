### Shual: A fibonacci based hashing function. With passwords/salts Utf-8 support & hash length/strength by selection.

- - -

# About the project:

* The project was created by Yaron Koresh <aharonkoresh1@gmail.com>

* This project supports ESM/CJS & the browser.

* This project is licensed under the MIT open-source license.

- - -

# What it does?

* Hashes passwords into a sequence of capital english charset.

* Generate hashes by length/strength, with each length/strength independent from other lengths/strength.

* Supports passwords/salts with emojis & other high level characters.

- - -

# How it works?

1. Gets the password, salt, general strength factor & length for the new hash.

2. Generates some fibonacci sequences, inside a loop, based on the given parameters.

3. Processes the fibonacci sequences with all the parameters, into a new hash.

- - -

# Basic installation:

* To install the npm package, run: `npm i shual`

* To use it inside the browser, add the following tag into the HTML head tag: `<script src="https://unpkg.com/shual@latest/dist/bundle.min.js"></script>`.

- - -

# Basic usage:

* When using node & npm, import/require a module simply by the standard syntax. The npm package supports both of them.

* When using the browser, exports of this project are available under a global object, called `$shual`.

- - -

# Do you need help?

* Before asking general support questions, please make sure you are using the [latest version](https://github.com/YaronKoresh/shual/releases/latest).

* When looking for support, please first search for your question in [open or closed issues](https://github.com/YaronKoresh/shual/issues?q=is%3Aissue).

* GitHub issues are a good way for tracking enhancements and bugs, but also for get some help.

* Feel free to open new issues, using one of the available templates, or create an issue from scratch.

- - -

# What exports are available?

#### Using "Shual":

* Purpose: Calculate a new Shual hash.

* Parameters:

* * Password: The string to be hashed (required).

* * Salt: The string to be used to create different hashes for the same passwords (required).

* * Strength: The strength factor for the Shual hashing algorithm (default = 1).

* * Length: The length of the new Shual hash (default = 64).

* Examples:

* * `Shual("abc","defg", 1, 5)` , which returns: "SHUAL:defg:NUNOV"

* * `Shual("abc","defg", 1, 3)` , which returns: "SHUAL:defg:MDI"