import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const brokenCommands = () => {
    copy('The majority of your commands listed on your bots page, or help command do not provide a response, or do not seem to function/work. Please resolve this issue and resubmit!');
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

export default brokenCommands;