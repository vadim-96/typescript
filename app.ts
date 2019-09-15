function cbFunction(text: string): void {
  console.log(`inside cbFunction ${text}`);
}

function doSomethingWithACallback(
  initialText: string,
  callback: (initialText: string) => void,
) {
  console.log(`inside doSomethingWithCallback ${initialText}`);
  callback(initialText);
}

doSomethingWithACallback('myText', cbFunction);
