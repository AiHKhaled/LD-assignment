import HomeIcon from "@mui/icons-material/Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@mui/icons-material/Person";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BrushIcon from "@mui/icons-material/Brush";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ShareIcon from "@mui/icons-material/Share";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export const drawerData = [
  {
    isMenu: true,
    Icon: HomeIcon,
    title: `Dashboard`,
    route: "",
  },
  {
    isMenu: true,
    Icon: LocalGroceryStoreIcon,
    title: `Catalogue`,
    route: "",
    subnav: [
      {
        title: "Catalog subRoute1",
        route: "",
      },
      {
        title: "Catalog subRoute2",
        route: "",
      },
    ],
  },
  {
    isMenu: true,
    Icon: ListIcon,
    title: `Orders`,
    hasBadge: true,
    badgeContent: 14,
    route: "",
  },
  {
    isMenu: true,
    Icon: PersonIcon,
    title: `Customers`,
    route: "",
  },
  {
    isMenu: true,
    Icon: TrackChangesIcon,
    title: `Marketing`,
    route: "",
    subnav: [
      {
        title: "Discount codes",
        route: "",
      },
      {
        title: "Exit intent",
        route: "",
      },
      {
        title: "Checkout Features",
        route: "",
      },
      {
        title: "Post-purchase conversion",
        route: "",
      },
      {
        title: "Cart abandonment",
        route: "",
      },
      {
        title: "Timer checkout",
        route: "",
      },
      {
        title: "Sell on Social",
        route: "",
      },
      {
        title: "Special Offer",
        route: "",
      },
      {
        title: "Seasonal Offer",
        route: "",
      },
    ],
  },
  {
    isMenu: true,
    Icon: LocalShippingIcon,
    title: `Delivery Options`,
    route: "",
  },
  {
    isMenu: true,
    Icon: AttachMoneyIcon,
    title: `Payment Options`,
    route: "",
  },
  {
    isMenu: true,
    Icon: BrushIcon,
    title: `Store Design`,
    route: "",
  },
  {
    isMenu: true,
    Icon: CreditCardIcon,
    title: `Subscription`,
    route: "",
  },
  {
    isMenu: true,
    Icon: SettingsSuggestIcon,
    title: `Integrations`,
    route: "",
  },
  {
    isMenu: true,
    Icon: WidgetsIcon,
    title: `Extensions`,
    route: "",
  },
  {
    isMenu: true,
    Icon: SettingsIcon,
    title: `Settings`,
    route: "",
  },
  {
    isMenu: true,
    Icon: LogoutIcon,
    title: `Log out`,
    route: "",
  },
  {
    isDivider: true,
  },
  {
    isMenu: true,
    Icon: HelpOutlineIcon,
    title: `Customer Support`,
    route: "",
  },
  {
    isMenu: true,
    Icon: ShareIcon,
    title: `Share your shop`,
    route: "",
  },
  {
    isMenu: true,
    Icon: RemoveRedEyeIcon,
    title: `View your shop`,
    route: "",
  },
  {
    isDivider: true,
  },

  {
    isStore: true,
    title: "Select your shop",
    items: ["Fenoh Store", "Fenoh Store 2", "Fenoh Store 3", "Fenoh Store 4"],
  },
];
