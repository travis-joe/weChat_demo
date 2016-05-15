/**
 * Created by apple on 5/11/16.
 */
'use strict'
var Koa = require('koa')
var path = require('path')
var wechat = require('./wechat/g')
var wechat_file = path.join(__dirname,'./config/wechat.txt')
var util = require('./libs/util')
var config = {
    wechat :{
        appID:'wxc710e8d8bc5ad457',
        appSecret:'2eecc9e5ab2b5f9c5192968777ef3b35',
        token:'wee911',
        getAccessToken:function(){
            return util.readFileAsync(wechat_file)
        },
        saveAccessToken:function(data){
            data = JSON.stringify(data)
            return util.writeFileAsync(wechat_file,data)
        }
    }
}

var app = new Koa()

app.use(wechat(config.wechat))

app.listen(1234)
console.log('Listen:1234')