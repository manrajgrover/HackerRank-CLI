#!/usr/bin/env node

/*
* @Author: Manraj Singh
* @Date:   2016-05-26 21:51:20
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-04 11:30:01
*/

'use strict';

const yargs = require('yargs');
const ora = require('ora');
const chalk = require('chalk');
const request = require('request');
const config = require('./config');

const RUN_URL = 'http://api.hackerrank.com/checker/submission.json';

var run = function(yargs){

}

var changeConfig = function(yargs){

}

const argv = yargs
  .usage('$0 <command>')
  .command('run', 'Run code on HackerRank server', function(yargs){
    argv = yargs
      .usage(chalk.blue('usage: $0 run <options>'))
      .demand(['s', 'i', 'l', 'o'])
      .example('$0 run -s CodeJamA.cpp -i Input00.in -o Output.txt -l CPP')
  })
  .command('config', 'Change config file', function(yargs){

  })
  .help('h')
  .alias('h', 'help')
  .argv;


// var source = 'print 1';

/* var data = {
  'api_key': config.api_key,
  'source': source,
  'lang': 5,
  'testcases': '["1"]'
};

console.log(data);

request.post({ url : RUN_URL, form : data}, function(err,response){
  if(err){
    console.log('Error');
  }
  else{
    console.log(response);
  }
});*/