#!/usr/bin/env node

/*
* @Author: Manraj Singh
* @Date:   2016-05-26 21:51:20
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-04 15:10:43
*/

'use strict';

const yargs = require('yargs');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const request = require('request');
const config = require('./config');

const RUN_URL = 'http://api.hackerrank.com/checker/submission.json';

const argv = yargs
  .usage('$0 <command>')
  .command('run', 'Run code on HackerRank server', function(yargs){
    argv = yargs
      .usage('Usage: $0 run <options>')
      .demand(['s', 'i', 'o'])
      .alias('s', 'source').describe('s', 'Source Code file path')
      .alias('i', 'input').describe('i', 'Input file path')
      .alias('l', 'language').describe('l', 'Language. Change `config` for default.')
      .alias('o', 'output').describe('o', 'Output file path')
      .example('$0 run -s A.cpp -i Input00.in -o Output.txt -l CPP')
      .argv;
  })
  .command('config', 'Change config file', function(yargs){
    var argv = yargs
      .usage('Usage: $0 config [options]')
      .alias('l', 'list').describe('l', 'List language and their code').boolean('l')
      .example('$0 config -l')
      .argv;

    if (argv.list){
      const spinner = ora('Getting languages').start();
      request('http://api.hackerrank.com/checker/languages.json', (error, response, body)=> {
        if (!error && response.statusCode === 200) {
          var languages = JSON.parse(body)
          spinner.stop();
          console.log(languages);
        } else {
          spinner.stop();
          console.log(error);
        }
      });
    }
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