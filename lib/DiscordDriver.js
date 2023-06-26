'use strict';

const { OAuth2Driver } = require('homey-oauth2app');

module.exports = class DiscordDriver extends OAuth2Driver {

  async onPairListDevices({ oAuth2Client }) {
    const { webhook } = await oAuth2Client.getToken();

    return [{
      name: webhook.name,
      data: {
        webhookId: webhook.id,
        webhookToken: webhook.token,
        channelId: webhook.channel_id,
        guildId: webhook.guild_id,
      },
    }];
  }

};
