"use strict";
function cbFunction(text) {
    console.log(`inside cbFunction ${text}`);
}
function doSomethingWithACallback(initialText, callback) {
    console.log(`inside doSomethingWithCallback ${initialText}`);
    callback(initialText);
}
doSomethingWithACallback('myText', cbFunction);
