import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const dmAbuse = () => {
    copy('Your bot has a DM command/function which allows anyone to DM a user which can be used maliciously. The message your bot sends in DMs must state the author or that its from an anonymous user. It must also have a block/opt-out feature. Otherwise, remove this command entirely before resubmitting.');
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
  };

  export default dmAbuse;