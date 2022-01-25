import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const presenceAbuse = () => {
    copy('Your bots presence changes every few seconds. The maximum frequency you can change your status is [https://discordapp.com/developers/docs/topics/gateway#activity-object-example-activity-with-rich-presence](5 times per 20 seconds;) any faster than that is considered as Discord API Abuse. We suggest you change it to something more reasonable, such as every 120 seconds.');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      className: 'flex items-center justify-center px-8 py-3 font-mono text-md font-medium text-color2 bg-dark border rounded border-slate-500',
      style:{
        backgroundColor: '#1e293b',
        color: '#ffffff'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#7047BC'
      }
   })
}

export default presenceAbuse;