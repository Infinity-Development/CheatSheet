import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const codeLeak = () => {
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

  export default codeLeak;