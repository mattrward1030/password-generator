# Password-Generator

## Description 

The goal of this project was to create a random password generator that would generate a password between 8 and 128 characters. The generator would be given different parameters from a defined array of lowercase letters, uppercase letters, numbers, and symbols. The user can choose which of these options they want their password to include as long as one option is selected, as well as a given length fits the criteria. This is accomplished by using prompt windows and having the users make the selections which are then stored and randomized.

## Installation 

To install this repo on your local drive you would have to clone the ssh key from my repo. Head into your local drive of choice in terminal or bash and do a git clone. Once you have done a git clone you are free to start working on this project. If you want to push your changes to my repo then you would have to head into terminal/bash and do a git add . Then a git commit -m explaning the changes made, and finally a git push to push the files onto the repo. 

## Finished project

My page is live on github!


## Features
<ul>
<li> A random password generator built using javascript.</li>
<li>When the user clicks generate password button the function starts to run and a prompt window is displayed to the user asking them to pick a password length between 8 and 128 characters.</li>
<li>The password must be between 8 and 128 characters, if not an alert to the user will be displayed indicating the selection was not in the right range of characters.</li>
<li>Following the length prompt is prompts asking if the user wants lowercase, uppercase, numbers, or symbols in their password.</li>
<li>The password will be generated as long as one option is selected.
<li>Once the password is generated it will then be entered into the password textbox.</li>
<li>This application is comprised of three main files, an HTML, CSS, and JavaScript file.</li>
<li>The HTML file gives the page strcuture and lays out the elements that make up the passsword text-box as well as the generate password button.</li>
<li>The CSS file gives the page style, style is applied to every element on the page including the headers, the text box having a border, the style of the generate password button and giving the page responsiveness for different screen sizes.</li>
<li>The JavaScript for this apploication contained many elements including functions that could be called when the generate password button was clicked. To recognize the password button being clicked we ha to use DOM events such as addEventListener() so certain script could be run when the button was clicked. The main function of the script conatined many JavaScript properties including prompts, alerts, confirm methods, if statements and for loops.</li>
</ul>

## Tests
N/A

## Credits
N/A

## Contributing

Pull requests are welcome and encouraged. Hit me up on my github <a href="https://github.com/mattrward1030">mattrward1030</a>

## Badges
 <img src="https://shields.io/badge/license-MIT-green" alt="mit license badge">

## License

MIT License

Copyright (c) [2021] [Matthew Ward]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
