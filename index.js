'use strict'
const { handleText } = require( "./handleText" );

// start
const http = require('https');
const request = require('request');

const accessType = 'Bearer';
const accessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const LINE_HEADER = {
  "Content-Type": "application/json",
  "Authorization": accessType + accessToken
}

let LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";

const replyMessage = (replyToken, message) => {
  (message) = Array.isArray(message) ? message : [message];
  return request.post({
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify(handleFlex(
      replyToken,
      message.map((message) => ({type: 'message', message}))
    ))
  });
};


