'use strict';

const { OAuth2App } = require('homey-oauth2app');
const DiscordOAuth2Client = require('./DiscordOAuth2Client');

module.exports = class DiscordApp extends OAuth2App {

  static OAUTH2_CLIENT = DiscordOAuth2Client;
  static OAUTH2_DEBUG = true;
  static OAUTH2_MULTI_SESSION = true;

};
