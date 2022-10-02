require("dotenv").config();
const { token } = process.env;
const { Client, Collection } = require{'discord.js'};
const { GatewayIntentBits, ClientUser } = require("discord.js");
const fs = require('fs');

const client = Client({ intents: GatewayIntentBits.Guilds });
clients.commands = new Collection();

const functionFolders = fs.readdirSync("./src/functions");
for (const folder of functionFolders) {
    const functionFiles = fs
    .readdirSync(`./scr/function/${folder}`)
    .filter((file) => file.endsWith(".js"));
}