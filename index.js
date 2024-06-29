const Argument = require('./lib/argument.js');
const Command = require('./lib/command.js');
const { CommanderError, InvalidArgumentError } = require('./lib/error.js');
const Help = require('./lib/help.js');
const Option = require('./lib/option.js');
const { startNextServer } = require('./next-utils');

// Apelați funcția startNextServer pentru a porni serverul Next.js
startNextServer();


module.exports = {
  Argument,
  Command,
  CommanderError,
  InvalidArgumentError,
  Help,
  Option

};

