import Image from "next/image";
import Footer from "@components/footer";
import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

export default function DenailPage() {
  const onClick4 = () => {
    copy('Your bot description is your bots code. Your long description should not consist of your bots code, it should be about what your bot does, command list, etc. Please rewrite your description to include more useful information about your bot. Friendly reminder to NEVER share your bots token with __anyone.__');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      style:{
        backgroundColor: '#7289DA'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  const onClick5 = () => {
    copy('The long description on your bots page is filled out with spam/junk. Please rewrite your description to include more useful information about your bot.');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      style:{
        backgroundColor: '#7289DA'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  const onClick6 = () => {
    copy('Your bot stopped responding during testing due to this we are unable to continue the testing process.');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      style:{
        backgroundColor: '#7289DA'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  const onClick7 = () => {
    copy('Your bot has a DM command/function which allows anyone to DM a user which can be used maliciously. The message your bot sends in DMs must state the author or that its from an anonymous user. It must also have a block/opt-out feature. Otherwise, remove this command entirely before resubmitting.');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      style:{
        backgroundColor: '#7289DA'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  const onClick8 = () => {
    copy('Your bots presence changes every few seconds. The maximum frequency you can change your status is [https://discordapp.com/developers/docs/topics/gateway#activity-object-example-activity-with-rich-presence](5 times per 20 seconds;) any faster than that is considered as Discord API Abuse. We suggest you change it to something more reasonable, such as every 120 seconds.');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      style:{
        backgroundColor: '#7289DA'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  const onClick9 = () => {
    copy('Your bot doesnt have a (working) help command or obvious point of entry. Please make sure your bot has a help command or has an explanation in the bot description. ');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      style:{
        backgroundColor: '#7289DA'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  const onClick10 = () => {
    copy('Your bot has a suicide command which is considered as glorification/promotion of suicide, which is against Discord ToS. Please remove this command entirely.');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      style:{
        backgroundColor: '#7289DA'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  const onClick11 = () => {
    copy('Your bot seems to be an unmodified instance of [Bot Designer for Discord.](https://botdesignerdiscord.com/) We dont allow unmodified clones of other bots.');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      className: '0',
      style:{
        backgroundColor: '#7289DA',
        borderColor: '#ffff'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  const onClick12 = () => {
    copy('Your bots page is filled out with a link/button to another bot listing website. Please remove any references to other bot listing websites in your description and re-apply.');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      style:{
        backgroundColor: '#7289DA'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  const onClick13 = () => {
    copy('Your bots commands have emojis or gifs that could cause epileptic seizures due to its flashy and flickering nature. Please remove all content of such nature in your commands.');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      style:{
        backgroundColor: '#7289DA'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  const onClick14 = () => {
    copy('Your bot page mentions, or promotes NSFW functions in its descriptions. Please remove any mentioning of NSFW features and make sure that all the NSFW functions are locked for [NSFW channels](https://support.discord.com/hc/en-us/articles/115000084051-NSFW-Channels-and-Content).');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      style:{
        backgroundColor: '#7289DA'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#0000'
      }
    })
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12">

      <h1 className="text-center text-7xl font-extrabold tracking-tighter leading-[1.1] sm:text-8xl lg:text-9xl xl:text-9xl">
          <span className="future inline-block text-transparent bg-clip-text bg-gradient-radial from-color2 to-color2 via-color1 animate-gradient-x bg-repeat">
            Denial Reasons.
          </span>{' '}
      </h1>

      <p className="max-w-lg mx-auto mt-6 text-3xl font-medium leading-tight text-center text-gray-400 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl">
          Pre-Configured list of Reasons why a Bot has been denied
      </p>

      <div className="flex justify-center grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">📡 Bot Offline</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Your bot was offline when we tried to review it. Please get your bot online and re-apply." 
            disabled />
            <br />
            <button
              onClick={onClick1}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">🚫 API Abuse</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Your bot has feature/commands that spams or abuses Discord's API. This causes your bot to get rate-limited and can be considered Discord API Abuse. Please fix the issue and re-apply." 
            disabled />
            <br />
            <button
              onClick={onClick2}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">🛑 Requires Admin Perms</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Some of your bot's features require the bot itself to have the ADMINISTRATOR permission. NO bot requires administrator permissions to function. Please only require the permissions your bot truly needs." 
            disabled />
            <br />
            <button
              onClick={onClick1}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">🤨 Source Code/Token Leak</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Your bot description is your bot's code. Your long description should not consist of your bot's code, it should be about what your bot does, command list, etc. Please rewrite your description to include more useful information about your bot. Friendly reminder to NEVER share your bots token with __anyone.__" 
            disabled />
            <br />
            <button
              onClick={onClick1}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">👾 Spam Long Description</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="The long description on your bot's page is filled out with spam/junk. Please rewrite your description to include more useful information about your bot." 
            disabled />
            <br />
            <button
              onClick={onClick1}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">📵 Stopped Responding</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Your bot stopped responding during testing due to this we are unable to continue the testing process." 
            disabled />
            <br />
            <button
              onClick={onClick1}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">🛂 Open DM Commands</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Your bot has a DM command/function which allows anyone to DM a user which can be used maliciously. The message your bot sends in DMs must state the author or that it's from an anonymous user. It must also have a block/opt-out feature. Otherwise, remove this command entirely before resubmitting." 
            disabled />
            <br />
            <button
              onClick={onClick1}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">🌀 Presence/Status Abuse</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Your bot's presence changes every few seconds. The maximum frequency you can change your status is [https://discordapp.com/developers/docs/topics/gateway#activity-object-example-activity-with-rich-presence](5 times per 20 seconds;) any faster than that is considered as Discord API Abuse. We suggest you change it to something more reasonable, such as every 120 seconds." 
            disabled />
            <br />
            <button
              onClick={onClick1}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">❌ No Help Command</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Your bot doesn't have a (working) help command or obvious point of entry. Please make sure your bot has a help command or has an explanation in the bot description. " 
            disabled />
            <br />
            <button
              onClick={onClick1}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">Suicide/Gore Promotion</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Your bot has a suicide command which is considered as glorification/promotion of suicide, which is against Discord ToS. Please remove this command entirely." 
            disabled />
            <br />
            <button
              onClick={onClick1}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

        <div className="mb-3 xl:w-96">
          <label for="exampleFormControlTextarea1" className="form-label mb-2 text-color2">BDFD Template</label>
          <textarea 
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-color2 #1C1B24" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Your bot seems to be an unmodified instance of [Bot Designer for Discord.](https://botdesignerdiscord.com/) We don't allow unmodified clones of other bots." 
            disabled />
            <br />
            <button
              onClick={onClick1}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-white bg-dark border rounded border-color2"
            >
              Copy Reason
            </button>
        </div>

      </div>
      <Toaster />
    </div>
  );
}
