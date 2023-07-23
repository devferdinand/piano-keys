# Title: Piano Keys

## The goal of this project is to:
1. Create an interactive game to help beginner-level piano students study.

## Pre-requisites
+ JavaScript
+ Git and GitHub
+ Command line
+ DOM Events

## How to use
1. Open Git Bash/terminal and git clone https://github.com/devferdinand/piano-keys.git
2. Open the directory and open index.html file with Google Chrome
3. Click the piano key and follow the lyric notes on the bottom!

## Personal additional feature
1. At the start of each page, the first lyric note is higlighted to notify user to press on that piano key note. Pressing the correct note makes the program highlight the next key note for user to press. After every note is pressed by the user, the program automatically clicks the button to display the next set of notes. Program follows the same procedure as before.

## issues
1. Currently not tracking sharp/high keys
2. Removed the line that sets HTML element display to inline-block to align with my idea of where I wanted the project to go. (After each key note on current page is pressed, automatically change to next page). Currently not sure why event.target.id is set to null after firing the event before the last one. Normally you would have 6 words and notes, but if you uncomment the inline-block you have 7 words and notes. Issue could be due to event delegation where affected element is dynamically added or modified after initial page load

## future cool ideas
1. Attach key note sound when the piano key is pressed down.