const { exec } = require('child_process');

exec('react-scripts build', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});