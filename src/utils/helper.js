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

export const SOCIAL_MEDIA_LINKS_LIST = [
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

export const BUY_DATA_LIST = [
  {
    title: "Create a Wallet",
    Paragraph:"Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io."
  },
   {
    title: "Get Some ETH",
    Paragraph:"Have ETH in your wallet to switch to $Froakie. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet."
  },
    {
    title: "Go to Uniswap",
    Paragraph:"Connect to Uniswap. Go to uniswap.finance/swap in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $Froakie token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign."
  },
     {
    title: "Swap ETH for Froakie",
    Paragraph:"Switch ETH for $Froakie. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility."
  },
]

export const TOKENOMICS_DATA_LIST = [
  {
    title: "0",
    description:"Transaction tax"
  },
  {
    title: "90",
    description:"Liquidity"
  },
  {
    title: "5",
    description:"Team"
  },
  {
    title: "5",
    description:"Marketing"
  },
]
export const FOOTER_LINK_LIST = [
  {
    title: "Contact",
    url: CONTACT_LINK_PATH,
  },
  {
    title: "FAQ",
    url: FAQ_LINK_PATH,
  },
  {
    title: "Privacy policy",
    url: "#",
  },
  {
    title: "Contact",
    url: "#",
  },
]