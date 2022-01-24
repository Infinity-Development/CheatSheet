import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const apiAbuse = () => {
    copy('Your bot has feature/commands that spams or abuses Discords API. This causes your bot to get rate-limited and can be considered Discord API Abuse. Please fix the issue and re-apply.');
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

  export default apiAbuse;