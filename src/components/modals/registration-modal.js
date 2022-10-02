module.exports = {
    data: {
        name: 'registration-modal'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `You said your ign is: ${interaction.fields.getTextInputValue(`ign`)}`
        })
    }
}