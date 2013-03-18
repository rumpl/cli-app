module.exports = {
  commands: {},
  name: 'cli-command',
  command: function (name, description, callback, context) {
    this.commands[name] = {
      callback: callback,
      context: context,
      description: description
    };
  },
  run: function () {
    var args = process.argv.slice(2);
    var commandName = args.shift();

    if (!commandName) {
      this.printHelp();
      return;
    }

    var command = this.commands[commandName];

    if (command) {
      command.callback.apply(command.context ? command.context : this, args);
    } else {
      console.error('Undefined command: ' + commandName);
      this.printHelp();
    }
  },
  printHelp: function () {
    console.error('Usage: ' + this.name + ' [COMMANDS] [OPTIONS]');
    console.error();
    var commands = [];
    var padding = 0;

    for (var commandName in this.commands) {
      var command = this.commands[commandName];
      var parameterNames = this.paramNames(command.callback);
      var parameters = '';

      if (parameterNames) {
        parameters = ' [' + parameterNames.join(', ') + ']';
      }

      if ((commandName + parameters).length > padding) {
        padding = (commandName + parameters).length;
      }

      commands.push({'command': commandName + parameters, 'description': command.description});
    }

    for (var i in commands) {
      var c = commands[i];
      console.error(c.command + this.strRepeat(' ', 4 + padding - c.command.length) + c.description);
    }
  },
  paramNames: function (func) {
    var funStr = func.toString();
    return funStr.slice(funStr.indexOf('(') + 1, funStr.indexOf(')')).match(/([^\s,]+)/g);
  },
  strRepeat: function (str, num) {
    return new Array(num + 1).join(str);
  }
};
