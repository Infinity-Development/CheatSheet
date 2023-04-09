import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const goodBot = () => {
  copy(
    "Very nice bot with a Huge Variety of features. I experience little to no errors when Testing the Bots features. Keep up the amazing work and welcome to [Bot List Name]"
  );
  toast.success("Copied to clipboard!", {
    duration: 4000,
    position: "bottom-right",
    icon: "👏",
    className:
      "flex items-center justify-center px-8 py-3 font-mono text-md font-medium text-color-2 bg-dark border rounded border-slate-500",
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

export default goodBot;
