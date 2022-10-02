module.exports = {
  data: {
    name: `register-menu`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `You select: ${interaction.values[0]}`,
    });
  },
};
