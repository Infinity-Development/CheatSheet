import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const pubDevCmds = () => {
  copy(
    "Your bot has a owner only command/s that allows users to access potential vulnerabilities or features that should be locked to developers. Please lock these commands for developers/owners only and re-apply."
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

export default pubDevCmds;
