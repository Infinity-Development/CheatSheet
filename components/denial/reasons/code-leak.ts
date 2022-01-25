import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const codeLeak = () => {
    copy('Your bot description is your bots code. Your long description should not consist of your bots code, it should be about what your bot does, command list, etc. Please rewrite your description to include more useful information about your bot. Friendly reminder to NEVER share your bots token with __anyone.__');
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

  export default codeLeak;