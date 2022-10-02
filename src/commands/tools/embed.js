const {
  SlashCommandBuilder,
  InteractionCollector,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Returns an embed."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Title Moment")
      .setDescription("Epic description")
      .setColor(0xff00ff)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail('https://cdn.discordapp.com/attachments/797552476341141524/1025932314108244029/pizap_51.jpg')
      .setTimestamp()
      .setAuthor({
        url: `https://www.youtube.com/channel/UC8M9jXgyNMMPppDT1izmPeg`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .setURL('https://www.youtube.com/channel/UC8M9jXgyNMMPppDT1izmPeg')
      .addFields([
        {
          name: "top part",
          value: "bottom part",
          inline: true,
        },
        {
          name: "top part",
          value: "bottom part",
          inline: true,
        },
      ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
