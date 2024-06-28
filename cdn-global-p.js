const { program } = require('commander');
const { Argument, Command, CommanderError, InvalidArgumentError, Help, Option } = require('cdn-global-p');

program
  .version('1.1.1')
  .description('A wonderful script called "cdn-global-p"');

program
  .command('hello')
  .description('Displays a greeting message')
  .action(() => {
    console.log('Hello from "cdn-global-p"!');
  });

program.parse(process.argv);