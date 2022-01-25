import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const botUnresponsive = () => {
    copy('Your bot stopped responding during testing due to this we are unable to continue the testing process.');
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
}

export default botUnresponsive;