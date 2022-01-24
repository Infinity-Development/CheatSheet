import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const adminNote = () => {
    copy('Some of your bots features require the bot itself to have the ADMINISTRATOR permission. NO bot requires administrator permissions to function. Please only require the permissions your bot truly needs.');
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

  export default adminNote;