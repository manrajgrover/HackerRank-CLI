const chalk = require('chalk');

const {
  OPEN_ISSUE_MSG,
  AUTHOR_MSG,
  POWERED_BY_MSG,
  SUPPORT_MSG
} = require('./constants');

const openIssue = () => {
    console.log(chalk.yellow(OPEN_ISSUE_MSG));
    process.exit(-1);
};

const end = () => {
  console.log(chalk.cyan(AUTHOR_MSG))
  console.log(chalk.green(POWERED_BY_MSG));
  console.log(chalk.yellow(SUPPORT_MSG));
  process.exit(-1);
};

module.exports = {
    openIssue,
    end
};
