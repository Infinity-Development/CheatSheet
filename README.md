# Infinity Cheat Sheet
Pre-Configured list of templates that any Bot List or Bot List Staff are free to use!

---

## Contributing
I tried to make contributing to this site as simple as possible.

### File Structure
- Denial Section: [components/denial](./components/denial)
- Approval Section: [components/approval](./components/approval)

### Note
When adding new reasons please make sure you also update the corresponding **features** file.

### Feature Example
```ts
const denyFeatures = [
  {
    name: '📡 Bot Offline',
    description: `Your bot was offline when we tried to review it. Please get your bot online and re-apply.`,
    click: botOffline
  },
]
```

### Denial Reason Example
```ts
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
```


---

## Made With
[Next.js](https://nextjs.org/) | [TailwindCSS](https://tailwindcss.com/)
