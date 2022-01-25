import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const dmAbuse = () => {
    copy('Your bot has a DM command/function which allows anyone to DM a user which can be used maliciously. The message your bot sends in DMs must state the author or that its from an anonymous user. It must also have a block/opt-out feature. Otherwise, remove this command entirely before resubmitting.');
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

  export default dmAbuse;