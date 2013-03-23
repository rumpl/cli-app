# cli-app

Simple command line application helper. Helps you define actions for specific commands.

# Installation

```bash
npm install cli-app
```

# Usage

```javascript
var app = require('cli-app');

app.name = 'awesome';

app.command('command', 'Put some description', function() {
  console.log('YAY!');
});

app.command('commandWithParams', 'Some other description', function(param1, param2) {
  console.log('YAY too!');
  console.log('Got params: ', param1, param2);
});

app.run();
```

When run:
```
$ node app.js command
```
You will see `YAY!`

Or:
```
$ node app.js commandWithParams Hello World
Got params: Hello World
```

**Bonus: free usage!**

```
$ node app.js wat
Undefined command: wat
Usage: awesome [COMMANDS] [OPTIONS]

command                      Put some description
command2 [param1, param2]    Some other description
```

# License

[MIT](http://mit-license.org/rumpl)
