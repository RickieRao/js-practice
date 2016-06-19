var http=require('http');
var url = require('url');
var wechat = require('wechat');
var configjson = require('./config/config.json');
var request = require('request');

require('request-debug')(request);

var aturl = {};

var options = {
	url: 'https://api.weixin.qq.com/cgi-bin/token',
	qs:{
		'grant_type':'client_credential',
		'appid':configjson.appid,
		'secret':configjson.appsecret
	}
};

function callback(error,response,body){
	if(!error && response.statusCode == 200) {
		console.log(body);
	}
};

request(options,callback);

// request.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential'
// 	+'&appid='+configjson.appid
// 	+'&secret='+configjson.appsecret,
// 	function(error,response,body){
// 		console.log(body);
// });
