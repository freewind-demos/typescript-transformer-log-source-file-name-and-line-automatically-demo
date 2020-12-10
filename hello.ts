function logWithFileLine(message: string): void {
  console.log(message);
}

function hello(name: string) {
  logWithFileLine(`will say hello to ${name}`);
  //             ^
  // is it possible to add the information of "the current file and line" where 'logWithFileLine' is called
  // e.g. So it will actually print "[hello.ts:6] will say hello to typescript"?
}

hello('typescript');
