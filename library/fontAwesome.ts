import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faDiscord,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faSearch,
  faCalendarDay,
  faGlobeEurope,
  faHome,
  faCaretDown as faSolidCaretDown,
  faCaretUp as faSolidCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent Font Awesome from adding its CSS since we did it manually above:
config.autoAddCss = false;

// Import @fortawesome/free-brands-svg-icons
library.add(faTwitter, faGithub, faDiscord, faSpotify);

// Import @fortawesome/free-solid-svg-icons
library.add(
  faEnvelope,
  faSearch,
  faCalendarDay,
  faGlobeEurope,
  faHome,
  faSolidCaretDown,
  faSolidCaretUp
);

// Import @fortawesome/free-regular-svg-icons
library.add(faClock);
