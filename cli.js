#!/usr/bin/env node

/*
* @Author: Manraj Singh
* @Date:   2016-05-26 21:51:20
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-04 11:51:59
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
      .usage(chalk.green('usage: $0 run <options>'))
      .demand(['s', 'i', 'o'])
      .alias('s', 'source').describe('s', 'Source Code file path')
      .alias('i', 'input').describe('i', 'Input file path')
      .alias('l', 'language').describe('l', 'Language')
      .alias('o', 'output').describe('o', 'Output file path')
      .example('$0 run -s A.cpp -i Input00.in -o Output.txt -l CPP')
  })
  .command('config', 'Change config file', function(yargs){
    argv = yargs
      .usage(chalk.green('usage: $0 config [options]'))
      .alias('l', 'language').describe('l', 'List language codes')
      .example('$0 config -l')
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