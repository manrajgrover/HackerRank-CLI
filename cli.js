/*
* @Author: Manraj Singh
* @Date:   2016-05-26 21:51:20
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-05-26 22:03:43
*/

'use strict';

const program = require('commander');
const ora = require('ora');
const chalk = require('chalk');
const request = require('request');
const config = require('./config');

const RUN_URL = 'http://api.hackerrank.com/checker/submission.json';

var source = 'print 1';

var data = {
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
});