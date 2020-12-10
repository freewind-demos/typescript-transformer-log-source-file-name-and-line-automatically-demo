function log(...params: any[]): void {
  console.log(...params)
}

function hello(name: string) {
  // have to log the entry manually
  // Is it possible to log it automatically? Or just doing some general setup?
  // It can get:
  //  1. the function name
  //  2. the params names and values
  // Just like generating the following line manually
  log('> hello', { name });
  
  console.log(`Hello, ${name}`);
}

hello('typescript');
