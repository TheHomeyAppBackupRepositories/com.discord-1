'use strict';

const { OAuth2Token } = require('homey-oauth2app');

module.exports = class DiscordOAuth2Token extends OAuth2Token {

  constructor({
    guild,
    webhook,
    ...props
  }) {
    super({ ...props });

    this.guild = guild || null;
    this.webhook = webhook || null;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      guild: this.guild,
      webhook: this.webhook,
    };
  }

};
