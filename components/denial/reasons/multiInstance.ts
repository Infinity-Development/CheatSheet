import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const multiInstance = () => {
  copy(
    "Your bot application seems to be running multiple instances, which could cause unhandled ratelimits and api abuse, as well as spam. Please be sure that your bot isnt running on multiple instances prior to resubmitting."
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

export default multiInstance;
