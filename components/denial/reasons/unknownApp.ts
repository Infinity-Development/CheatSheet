import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const unknownApp = () => {
    copy('There is an unknown application error when trying to invite your bot. Please make sure that the application ID you entered is correct, you have a bot user with your application and your bot application wasnt deleted');
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

export default unknownApp;