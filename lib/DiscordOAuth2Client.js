'use strict';

const { OAuth2Client } = require('homey-oauth2app');
const DiscordOAuth2Token = require('./DiscordOAuth2Token');

module.exports = class DiscordOAuth2Client extends OAuth2Client {

  static API_URL = 'https://discord.com/api';
  static TOKEN = DiscordOAuth2Token;
  static TOKEN_URL = 'https://discord.com/api/oauth2/token';
  static AUTHORIZATION_URL = 'https://discord.com/api/oauth2/authorize?permissions=2147490816';
  static SCOPES = ['webhook.incoming'];

  async getOAuth2Me() {
    return this.get({
      path: '/oauth2/@me',
    });
  }

  async getOAuth2ApplicationMe() {
    return this.get({
      path: '/oauth2/applications/@me',
    });
  }

  async getUserMe() {
    return this.get({
      path: '/users/@me',
    });
  }

  async getUserMeGuilds() {
    return this.get({
      path: '/users/@me/guilds',
    });
  }

  async getChannel({
    channelId,
  }) {
    return this.get({
      path: `/channels/${channelId}`,
    });
  }

  async getGuildChannels({
    guildId,
  }) {
    return this.get({
      path: `/guilds/${guildId}/channels`,
    });
  }

  async createMessage({
    channelId,
    content,
  }) {
    return this.post({
      path: `/channels/${channelId}/messages`,
      json: {
        content,
      },
    });
  }

};
