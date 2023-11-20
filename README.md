### Shual is a fibonacci based cryptography toolset.

- - -

# About the project:

* The project was created by Yaron Koresh <aharonkoresh1@gmail.com>

* This project supports ESM/CJS & the browser.

* This project is licensed under the MIT open-source license.

- - -

# What it does?

* Hashes passwords into a sequence of capital english characters.

* Pad & encrypt your data with a password & a salt, while choosing the complexity factor to fit your needs.

* Supports passwords/salts with emojis & other high level characters.

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

#### Using "ShualHash":

* Purpose: Calculate a Shual hash.

* Parameters:

* * Password: The string to be hashed (required).

* * Salt: The string to be used to create different hashes for the same passwords (required).

* * Strength: The strength factor for the Shual hashing algorithm (default = 1).

* * Length: The length of the new Shual hash (default = 32).

* Examples:

* * `ShualHash("abcd","efg", 1, 13)` , which returns: "SHUAL/HASH/PKKMZCQTZWLYG/Rsl5".

* * `ShualHash("abcd","efg", 1, 40)` , which returns: "SHUAL/HASH/JZKQUDCEBTJHFAUIQTBZFHMDQEBZQBLCFJAISXOL/Rsl5".

- - -

#### Using "Pad":

* Purpose: Pad an input before encryption.

* Parameters:

* * Message: The string to be padded (required).

* * Length: The minimal length for the new string (default = 16).

* Examples:

* * `Pad("abcd",7)` , which returns: "LUOabcd".

* * `Pad("abcd",9)` , which returns: "NMZBLabcd".

- - -

#### Using "Unpad":

* Purpose: Unpad an output after decryption.

* Parameters:

* * Message: The string to be unpadded (required).

* Examples:

* * `Unpad("NMZBLabcd")` , which returns: "abcd".

- - -

#### Using "ShualEncrypt":

* Purpose: Message encryption.

* Parameters:

* * Key: The password for the encryption (required).

* * Salt: The salt for the encryption (required).

* * Message: The input string (required).

* * Power: The strength/complexity factor of the process (default = 1).

* Examples:

* * `ShualEncrypt("Pa$$word123*","a random text", "my message is... Hello World!")` , which returns: "SHUAL/CRYPT/9C2E9DE40F71575A3D10D7B9F5F635CD18633E22AF94E37B86CF589470/2bPtyE4LFaxg9wo4hA".

* * `ShualEncrypt("Pa$$word123*","a random text", "my message is... Hello World?")` , which returns: "SHUAL/CRYPT/81345C197E897BD8B96509DDA2A1393BFD45FAC7044358D8C820F60BBE/2bPtyE4LFaxg9wo4hA".

- - -

#### Using "ShualDecrypt":

* Purpose: Message decryption.

* Parameters:

* * Key: The password for the decryption (required).

* * Ciphertext: The protected string (required).

* * Power: The strength/complexity factor of the process (default = 1).

* Examples:

* * `ShualDecrypt("Pa$$word123*","SHUAL/CRYPT/9C2E9DE40F71575A3D10D7B9F5F635CD18633E22AF94E37B86CF589470/2bPtyE4LFaxg9wo4hA")` , which returns: "my message is... Hello World!".