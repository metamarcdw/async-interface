const { PythonShell } = require('python-shell');
const pyShell = new PythonShell('test.py'); // , options);

// sends a message to the Python script via stdin
pyShell.send('hello');
pyShell.send('world');
pyShell.send('@end');

pyShell.on('message', message => {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(`Recieved: ${message}`);
});

// end the input stream and allow the process to exit
pyShell.end((err, code, signal) => {
  if (err) throw err;
  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
  console.log('finished');
});
