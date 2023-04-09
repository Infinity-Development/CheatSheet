import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const crossPromo = () => {
  copy(
    "Your bots page is filled out with a link/button to another bot listing website. Please remove any references to other bot listing websites in your description and re-apply."
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

export default crossPromo;
