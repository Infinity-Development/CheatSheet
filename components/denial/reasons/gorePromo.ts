import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const gorePromo = () => {
  copy(
    "Your bot has a suicide command which is considered as glorification/promotion of suicide, which is against Discord ToS. Please remove this command entirely."
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

export default gorePromo;
