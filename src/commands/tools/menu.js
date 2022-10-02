const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Makes select menu."),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`register-menu`)
      .setMinValues(1)
      .setMaxValues(1)
      .setPlaceholder(`Hello Gamer o/ Please make a gamer selection!`)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `epic opetion 1`,
          value: `gamer website 1`,
        }),
        new SelectMenuOptionBuilder({
          label: `epic opetion 2`,
          value: `gamer website 2`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
