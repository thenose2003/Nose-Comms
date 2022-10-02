const {
  SlashCommandBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("modal")
    .setDescription("Returns a modal"),
  async execute(interaction, client) {
    const modal = new ModalBuilder()
        .setCustomId('registration-modal')
        .setTitle('Registration Modal');

    const textInput = new TextInputBuilder()
        .setCustomId(`ign`)
        .setLabel(`Enter your IGN`)
        .setRequired(true)
        .setStyle(TextInputStyle.Short)

    modal.addComponents(new ActionRowBuilder().addComponents(textInput));

    await interaction.showModal(modal);
  },
};
