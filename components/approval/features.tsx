import coolBot from "./reasons/coolBot";
import goodBot from "./reasons/goodBot";
import iffyBots from "./reasons/iffyBots";

const approveFeatures = [
    {
        name: '😁 Nice Bot',
        description: 'Very nice bot with a Huge Variety of features. I experience little to no errors when Testing the Bots features. Keep up the amazing work and welcome to [Bot List Name]',
        click: goodBot
    },
    {
        name: '🤨 Minor Issues',
        description: 'Your bot seems to be having a few issues with the [List Commands or Features] command. Everything else seems to work as intended. Welcome to [Bot List Name]',
        click: iffyBots
    },
    {
        name: '🥳 Cool Bot',
        description: 'Thank you for applying. Your bot is cool and all the commands seem to be working as they should. Welcome to [Bot List Name].',
        click: coolBot
    }
]

export default approveFeatures;