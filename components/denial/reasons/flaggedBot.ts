import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const flaggedBot = () => {
    copy('Your bot has been flagged by Discord for one of the following reasons (Spam, Abusive Behaviour, Reaching guild limit without verification, Verified successfully by Discord but using privileged intents that your application was not whitelisted for.) which results in us being unable to test your bot. For more information, please reach out Discord directly [here](https://dis.gd/contact) if you have questions. Please resolve this issue before reapplying.');
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

export default flaggedBot;