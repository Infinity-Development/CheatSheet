import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const botOffline = () => {
    copy('Your bot was offline when we tried to review it. Please get your bot online and re-apply.');
    toast.success('Copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
      icon: '👏',
      className: 'flex items-center justify-center px-8 py-3 font-mono text-md font-medium text-color2 bg-dark border rounded border-color2',
      style:{
        backgroundColor: '#1C1B24',
        color: '#7047BC'
      },
      iconTheme: {
        primary: '#ffff',
        secondary: '#7047BC'
      }
    })
  };

  export default botOffline;