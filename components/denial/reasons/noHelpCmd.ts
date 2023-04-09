import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const noHelpCmd = () => {
  copy(
    "Your bot doesnt have a (working) help command or obvious point of entry. Please make sure your bot has a help command or has an explanation in the bot description."
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

export default noHelpCmd;
