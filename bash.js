// Output a prompt
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  let cmd = data.toString().trim();
  cmd = cmd.split(' ');
  let argument = cmd[1];

  if (cmd[0] === 'pwd') {
    pwd();
  } else if (cmd[0] === 'ls') {
    ls();
  } else if (cmd[0] === 'cat') {
    cat(argument);
  }
  else {
    process.stdout.write('this isnt a command');
  }
});
