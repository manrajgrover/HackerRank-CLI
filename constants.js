const RUN_URL = 'http://api.hackerrank.com/checker/submission.json';
const LANG_URL = 'http://api.hackerrank.com/checker/languages.json';

const OPEN_ISSUE_MSG = 'If problem persist, please open an issue at https://github.com/manrajgrover/HackerRank-CLI/issues .';

const AUTHOR_MSG = 'Copyright © 2016 Manraj Singh.';
const POWERED_BY_MSG = 'Powered by HackerRank API (https://www.hackerrank.com/api)';
const SUPPORT_MSG = 'Support project at https://github.com/manrajgrover/HackerRank-CLI';

const API_KEY_ERR_MSG = 'Please add API KEY to config. Run `sudo hackerrank config` for this.';
const GENERAL_ERR_MSG = 'Error Occurred.';
const COMPILATION_ERR_MSG = 'Compilation Error';

module.exports = {
  RUN_URL,
  LANG_URL,
  OPEN_ISSUE_MSG,
  AUTHOR_MSG,
  POWERED_BY_MSG,
  SUPPORT_MSG,
  API_KEY_ERR_MSG,
  GENERAL_ERR_MSG,
  COMPILATION_ERR_MSG
};
