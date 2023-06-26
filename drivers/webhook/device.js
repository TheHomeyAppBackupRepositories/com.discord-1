'use strict';

const { fetch } = require('homey-oauth2app');
const DiscordDevice = require('../../lib/DiscordDevice');

module.exports = class DiscordWebhookDevice extends DiscordDevice {

  async sendMessage({ message, tts = false }) {
    const {
      webhookId,
      webhookToken,
    } = this.getData();

    const url = `https://discord.com/api/webhooks/${webhookId}/${webhookToken}`;
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tts,
        content: message,
      }),
    });
  }

};
