  const fs = require('fs');

  const messageFile = process.env.HUSKY_GIT_PARAMS;
  const message = fs.readFileSync(messageFile, {
    encoding: 'utf-8',
  });
  const messageTitle = message.split('\n')[0].replace(/(.+\s\|\s)?/, '');

  const branchName = require('child_process').execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf-8',
  }).split('\n')[0];

  const messageLines = message.split('\n');
  messageLines[0] = `${branchName} | ${messageTitle}`;
  fs.writeFileSync(messageFile, messageLines.join('\n'), {
    encoding: 'utf-8',
  });