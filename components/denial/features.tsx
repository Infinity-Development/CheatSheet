import botOffline from "./reasons/offline";
import apiAbuse from "./reasons/api-abuse";
import codeLeak from "./reasons/code-leak";
import dmAbuse from "./reasons/dm-abuse";
import spamLongDesc from "./reasons/spam-ld";
import botUnresponsive from "./reasons/unresponsive";
import adminNote from "./reasons/admin";
import presenceAbuse from "./reasons/presenceAbuse";
import noHelpCmd from "./reasons/noHelpCmd";
import gorePromo from "./reasons/gorePromo";
import bdfdFork from "./reasons/bdfdFork";
import crossPromo from "./reasons/crossPromo";
import flashyContent from "./reasons/flashyContent";
import nsfwContent from "./reasons/nsfwContent";
import ossFork from "./reasons/ossFork";
import join4Join from "./reasons/join4join";
import flaggedBot from "./reasons/flaggedBot";
import noFunctions from "./reasons/noFunctions";
import ownerBanned from "./reasons/ownerBanned";
import adminBots from "./reasons/adminBots";
import unknownApp from "./reasons/unknownApp";
import brokenCommands from "./reasons/brokenCommands";
import pubDevCmds from "./reasons/pubDevCmds";
import multiInstance from "./reasons/multiInstance";

const denyFeatures = [
  {
    name: "📡 Bot Offline",
    description: `Your bot was offline when we tried to review it. Please get your bot online and re-apply.`,
    click: botOffline,
  },
  {
    name: "🚫 API Abuse",
    description: `Your bot has feature/commands that spams or abuses Discord's API. This causes your bot to get rate-limited and can be considered Discord API Abuse. Please fix the issue and re-apply.`,
    click: apiAbuse,
  },
  {
    name: "🛑 Requires Admin Perms",
    description: `Some of your bot's features require the bot itself to have the ADMINISTRATOR permission. NO bot requires administrator permissions to function. Please only require the permissions your bot truly needs.`,
    click: adminNote,
  },
  {
    name: "🤨 Source Code/Token Leak",
    description:
      "Your bot description is your bots code. Your long description should not consist of your bots code, it should be about what your bot does, command list, etc. Please rewrite your description to include more useful information about your bot. Friendly reminder to NEVER share your bots token with __anyone.__",
    click: codeLeak,
  },
  {
    name: "👾 Long Description Spam",
    description:
      "The long description on your bots page is filled out with spam, junk or invisible characters. Please rewrite your description to include more useful information about your bot.",
    click: spamLongDesc,
  },
  {
    name: "📵 Stopped Responding",
    description:
      "Your bot stopped responding during testing due to this we are unable to continue the testing process.",
    click: botUnresponsive,
  },
  {
    name: "🛂 Open DM Commands",
    description:
      "Your bot has a DM command/function which allows anyone to DM a user which can be used maliciously. The message your bot sends in DMs must state the author or that its from an anonymous user. It must also have a block/opt-out feature. Otherwise, remove this command entirely before resubmitting.",
    click: dmAbuse,
  },
  {
    name: "🌀 Presence/Status Abuse",
    description:
      "Your bots presence changes every few seconds. The maximum frequency you can change your status is 5 times per 20 seconds any faster than that is considered as Discord API Abuse. We suggest you change it to something more reasonable, such as every 120 seconds.",
    click: presenceAbuse,
  },
  {
    name: "❌ No Help Command",
    description:
      "Your bot doesnt have a (working) help command or obvious point of entry. Please make sure your bot has a help command or has an explanation in the bot description. ",
    click: noHelpCmd,
  },
  {
    name: "🔪 Suicide/Gore Promotion",
    description:
      "Your bot has a suicide command which is considered as glorification/promotion of suicide, which is against Discord ToS. Please remove this command entirely.",
    click: gorePromo,
  },
  {
    name: "🤖 BDFD Fork or Template",
    description:
      "Your bot seems to be an unmodified instance of [Bot Designer for Discord.](https://botdesignerdiscord.com/) We dont allow unmodified clones of other bots or bot creation services.",
    click: bdfdFork,
  },
  {
    name: "👀 Cross Promotion",
    description:
      "Your bots page is filled out with a link/button to another bot listing website. Please remove any references to other bot listing websites in your description and re-apply.",
    click: crossPromo,
  },
  {
    name: "🏨 Seizure Inducing Content",
    description:
      "Your bots commands have emojis or gifs that could cause epileptic seizures due to its flashy and flickering nature. Please remove all content of such nature in your commands.",
    click: flashyContent,
  },
  {
    name: "🔞 NSFW Features/Content",
    description:
      "Your bot page mentions, or promotes NSFW functions in its descriptions. Please remove any mentioning of NSFW features and make sure that all the NSFW functions are locked for [NSFW channels](https://support.discord.com/hc/en-us/articles/115000084051-NSFW-Channels-and-Content).",
    click: nsfwContent,
  },
  {
    name: "⚙️ Unmodified Instance",
    description:
      "Your bot seems to be an unmodified instance of: [Link to Bot](https://somelink.com). We dont allow unmodified clones of other bots.  Please note for BotGhost/BDFD clones in particular, we require 5 or more custom commands.",
    click: ossFork,
  },
  {
    name: "🔖 J4J/Third Party Ads",
    description:
      "Your bot is promoting sponsors/partners/servers. Bots are not allowed to use the Discord API to advertise/promote any third - party service. As stated in their [Terms](https://i.imgur.com/eTLRu3m.png), You may not use the APIs in any way to target users with advertisements or marketing. If your bot has a Join4Join feature, please read Discords stance regarding bots of this nature here or join the [Discord Developers](https://discord.gg/discord-developers) server for more information.",
    click: join4Join,
  },
  {
    name: "⚠️ Flagged/Banned Bot",
    description:
      "Your bot has been flagged by Discord for one of the following reasons (Spam, Abusive Behaviour, Reaching guild limit without verification, Verified successfully by Discord but using privileged intents that your application was not whitelisted for.) which results in us being unable to test your bot. For more information, please reach out Discord directly [here](https://dis.gd/contact) if you have questions. Please resolve this issue before reapplying.",
    click: flaggedBot,
  },
  {
    name: "🤷‍♂️ No Functions/Features",
    description:
      "Your bot doesnt have any actual (functioning) features/commands. We require a bot to have a minimum of at least 7 Working Commands not including the Help and About Commands. Please add some features and or commands to your bot before re-applying!",
    click: noFunctions,
  },
  {
    name: "⚖️ Main Owner Banned",
    description:
      "The primary owner of this bot was banned from our discord server. As such they are prohibited from adding any bots. They can however appeal any and all bans by contacting our Support Team",
    click: ownerBanned,
  },
  {
    name: "⚔️ Admin Bots",
    description:
      "Your bot is asking for the admin permission on invite. No bot should require this kind of permission to function correctly.",
    click: adminBots,
  },
  {
    name: "🤔 Unknown Application",
    description:
      "There is an unknown application error when trying to invite your bot. Please make sure that the application ID you entered is correct, you have a bot user with your application and your bot application wasnt deleted",
    click: unknownApp,
  },
  {
    name: "💻 Broken Commands",
    description:
      "The majority of your commands listed on your bots page, or help command do not provide a response, or do not seem to function/work. Please resolve this issue and resubmit!",
    click: brokenCommands,
  },
  {
    name: "🔓 Public Owner/Dev Commands",
    description:
      "Your bot has an owner only command/s that allows users to access potential vulnerabilities or features that should be locked to developers. Please lock these commands for developers/owners only and re-apply.",
    click: pubDevCmds,
  },
  {
    name: "👨‍👩‍👧‍👦 Running Multiple Instances",
    description:
      "Your bot application seems to be running multiple instances, which could cause unhandled ratelimits and api abuse, as well as spam. Please be sure that your bot isnt running on multiple instances prior to resubmitting.",
    click: multiInstance,
  },
];

export default denyFeatures;
