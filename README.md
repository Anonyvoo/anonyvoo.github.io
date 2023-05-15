<style>
    .header {
        background-image: url('https://cdn.discordapp.com/attachments/1106143248075980843/1107353022603993098/anna.gif');
        background-repeat: no-repeat;
        background-size: cover;
        padding: 0;
        margin: 0;
        height: 400px;
    }
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .content img {
        max-width: 100%;
        height: auto;
        margin: 0 10px;
    }
    .Discord {
        background-color: #7289DA;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        margin-top: 10px;
    }
</style>

<div class="header"></div>

<div class="content">
    <img src="https://cdn.discordapp.com/attachments/1102436734123388928/1107328626837434448/eee.png" alt="Image Description">
</div>

<div class="content">
    <a href="https://discord.gg/n6bdnk5nUG"><button class="Discord">Discord</button></a>
</div>

const embed = {
  color: '#ff0000',
  title: 'Categories',
  description: 'Take your experience to the next level with custom mods and tools designed to enhance your gameplay and streamline your server management.',
  fields: [
    {
      name: 'DAYZ Mods',
      value: 'Take your DayZ experience to the next level with custom console mods tailored to your preferences. Our team, led by Anonymous OO Skill, can create personalized bases, unique gameplay mechanics, and much more.',
    },
    {
      name: 'DAYZ BOT',
      value: 'Enhance your DayZ server with powerful bot tools designed to streamline your gameplay. Our bot development team can create custom killfeeds, advanced radar systems, and other useful tools to optimize your DayZ experience.',
    },
    {
      name: 'SERVER DEVELOPMENTS',
      value: 'Running a server has never been easier. Our plug-and-play server development service takes care of everything, from setting up your server to custom coding plugins that fit your specific needs. Sit back, relax, and let us handle the hard work for you.',
    },
    {
      name: 'DISCORD BOT DEVELOPMENTS',
      value: 'Get the most out of your Discord server with unique and powerful bots. Our team of developers can create custom bots tailored to your needs, whether you need to automate tasks, moderate your community, or add advanced functionality to your server.',
    },
  ],
};

message.channel.send({ embed: embed });
