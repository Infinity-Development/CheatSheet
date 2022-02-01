import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const noFunctions = () => {
  copy(
    "Your bot doesnt have any actual (functioning) features/commands. We require a bot to have a minimum of at least 7 Working Commands not including the Help and About Commands. Please add some features and or commands to your bot before re-applying!"
  );
  toast.success("Copied to clipboard!", {
    duration: 4000,
    position: "bottom-right",
    icon: "👏",
    className:
      "flex items-center justify-center px-8 py-3 font-mono text-md font-medium text-color2 bg-dark border rounded border-slate-500",
    style: {
      backgroundColor: "#1e293b",
      color: "#ffffff",
    },
    iconTheme: {
      primary: "#ffff",
      secondary: "#7047BC",
    },
  });
};

export default noFunctions;
