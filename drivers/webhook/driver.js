'use strict';

const DiscordDriver = require('../../lib/DiscordDriver');

module.exports = class DiscordWebhookDriver extends DiscordDriver {

  async onOAuth2Init() {
    this.homey.flow
      .getActionCard('send_message')
      .registerRunListener(async ({ device, message }) => {
        return device.sendMessage({ message, tts: false });
      });

    this.homey.flow
      .getActionCard('say_message')
      .registerRunListener(async ({ device, message }) => {
        return device.sendMessage({ message, tts: true });
      });
  }

};
