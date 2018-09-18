// Output a prompt
const pwd = require('./pwd');
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remove the newLine

  if (cmd === 'pwd') {
    pwd();
  } else {
    process.stdout.write('this isnt a command');
  }
  process.stdout.write('\nprompt > ');
});
