/*
The MIT License (MIT)

Copyright (c) 2021 James Panther (https://jamespanther.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Defined in https://github.com/jpanther/congo/blob/dev/assets/js/appearance.js
const commentSitePreference = document.documentElement.getAttribute("data-default-appearance");
const commentUserPreference = localStorage.getItem("appearance");



if ((commentSitePreference === "dark" && commentUserPreference === null) || commentUserPreference === "dark") {
    sendThemeUpdate("dark");
}

if (document.documentElement.getAttribute("data-auto-appearance") === "true") {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    commentUserPreference !== "light"
  ) {
    sendThemeUpdate("dark");
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (event.matches) {
        sendThemeUpdate("dark");
    } else {
        sendThemeUpdate("dark");
    }
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  const switcher = document.getElementById("appearance-switcher");
  if (switcher) {
    switcher.addEventListener("click", () => {
      sendThemeUpdate(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
  }
});

function sendThemeUpdate(newTheme) {

    if (newTheme == "dark") newTheme = "dark_dimmed"
    console.log("Switching themes to " + newTheme);
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: { setConfig: { theme: newTheme}} }, 'https://giscus.app');

}

// This is kind of hacky, I could listen for the Iframe load event, but it is slightly easier to do it this way.
// This is just listening for the first message from giscus.app, and then sending the default theme data.
var first_giscus_message = true;

function handleMessage(event) {
    if (event.origin !== 'https://giscus.app') return;
    if (!(typeof event.data === 'object' && event.data.giscus)) return;

    if (first_giscus_message)  { 
        first_giscus_message = false 
        sendThemeUpdate(document.documentElement.classList.contains("dark") ? "dark" : "light");
    }
    // Do whatever you want with it, e.g. `console.log(giscusData)`.
    // You'll need to make sure that `giscusData` contains the message you're
    // expecting, e.g. by using `if ('discussion' in giscusData)`.
  }
  
  window.addEventListener('message', handleMessage);