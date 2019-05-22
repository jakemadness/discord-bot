// modules.
var bot       = new (require('discord.js')).Client();
var config    = new (require('./includes/config.js'))();
var data      = new (require('./includes/data.js'))();
var utilities = new (require('./includes/utilities.js'))();
var callbacks = new (require('./includes/callbacks.js'))();
var events    = new (require('./includes/events.js'))(bot, config, data, utilities, callbacks);

// register commands.
require('./commands/avatar.js')(bot, config, data, utilities, callbacks);
require('./commands/say.js')(bot, config, data, utilities, callbacks);
require('./commands/invite.js')(bot, config, data, utilities, callbacks);
require('./commands/ping.js')(bot, config, data, utilities, callbacks);
require('./commands/uptime.js')(bot, config, data, utilities, callbacks);
require('./commands/servers.js')(bot, config, data, utilities, callbacks);
require('./commands/version.js')(bot, config, data, utilities, callbacks);
require('./commands/help.js')(bot, config, data, utilities, callbacks);

// set events
bot.on('error',   events.error);
bot.on('ready',   events.ready);
bot.on('message', events.message);
bot.login(config.token);
