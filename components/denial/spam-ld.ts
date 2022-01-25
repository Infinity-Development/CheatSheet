import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const spamLongDesc = () => {
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

  export default spamLongDesc;