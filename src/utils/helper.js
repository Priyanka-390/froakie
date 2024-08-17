import mediumIcon from "../assets/images/svg/medium-icon.svg"
import telegramIcon from "../assets/images/svg/telegram-icon.svg"
import twitterIcon from "../assets/images/svg/twitter-icon.svg"
import {
  CONTACT_LINK_PATH,
  DEVELOPERS_LINK_PATH,
  FAQ_LINK_PATH,
  HOME_LINK_PATH,
  MEDIUM_LINK_PATH,
  TELEGRAM_LINK_PATH,
  TWITTER_LINK_PATH,
} from "./constans";

export const NAV_LINK_LIST = [
  {
    title: "Home",
    url: HOME_LINK_PATH,
  },
  {
    title: "Developers",
    url: DEVELOPERS_LINK_PATH,
  },
  {
    title: "FAQ",
    url: FAQ_LINK_PATH,
  },
  {
    title: "Contact us",
    url: CONTACT_LINK_PATH,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    icons: mediumIcon,
    url: MEDIUM_LINK_PATH,
  },
  {
    icons: telegramIcon,
    url: TELEGRAM_LINK_PATH,
  },
  {
    icons: twitterIcon,
    url: TWITTER_LINK_PATH,
  },
];
