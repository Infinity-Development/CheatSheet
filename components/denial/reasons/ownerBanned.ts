import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const ownerBanned = () => {
  copy(
    "The primary owner of this bot was banned from our discord server. As such they are prohibited from adding any bots. They can however appeal any and all bans by contacting our Support Team"
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

export default ownerBanned;
