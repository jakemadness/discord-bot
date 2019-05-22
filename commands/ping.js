module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'ping$', 'i'),
      'description': 'check my ping latency',
      'example':     config.prefix + 'ping',
      'callback':    'pingPong',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false
   });
   callbacks.pingPong = function(message) {
      message.channel.send({'embed': {
         'color':       config.embedColor,
         'title':       config.name + ' - Ping',
         'description': 'pong, ' + utilities.shortenFloat(bot.ping, 2) + 'ms!'
      }});
   };
};