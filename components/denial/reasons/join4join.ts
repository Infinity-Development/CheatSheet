import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const join4Join = () => {
    copy('Your bot is promoting sponsors/partners/servers. Bots are not allowed to use the Discord API to advertise/promote any third - party service. As stated in their [Terms](https://i.imgur.com/eTLRu3m.png), You may not use the APIs in any way to target users with advertisements or marketing. If your bot has a Join4Join feature, please read Discords stance regarding bots of this nature here or join the [Discord Developers](https://discord.gg/discord-developers) server for more information.');
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

export default join4Join;