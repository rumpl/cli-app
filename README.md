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

app.command('command2', 'Some other description', function(param1, param2) {
  console.log('YAY too!');
});

app.run();
```

When run:
```
$ node app.js command
```
You will see `YAY!`

Bonus: free usage!

```bash
$ node app.js wat
Undefined command: wat
Usage: awesome [COMMANDS] [OPTIONS]

command                      Put some description
command2 [param1, param2]    Some other description
```

# License

[MIT](http://mit-license.org/rumpl)
