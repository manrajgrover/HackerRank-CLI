/*
* @Author: Manraj Singh
* @Date:   2016-05-26 21:51:20
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-05-26 21:51:48
*/

'use strict';

const program = require('commander');
const ora = require('ora');
const chalk = require('chalk');
const request = require('request');
const config = require('./config');

const COMPILE_URL = 'http://api.hackerearth.com/code/compile/';
const RUN_URL = 'http://api.hackerearth.com/code/run/';

var data = {
  'client_secret': config.CLIENT_SECRET,
  'source': source,
  'lang': 'PYTHON',
};

request.post({ url : RUN_URL, form : data}, function(err,response){
  if(err){
    console.log('Error');
  }
  else{
    console.log(response);
  }
});