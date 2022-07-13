import HomeIcon from "@mui/icons-material/Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ListIcon from "@mui/icons-material/List";

export const drawerData = [
  {
    Icon: HomeIcon,
    title: `Dashboard`,
    route: "",
  },
  {
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
    Icon: ListIcon,
    title: `Orders`,
    hasBadge: true,
    badgeContent: 14,
    route: "",
  },
  //   {
  //     isMenuItem: true,
  //     Icon: PersonIcon,
  //     title: `Customers`,
  //     route: "",
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: TargetIcon,
  //     title: `Marketing`,
  //     route: "",
  //     childs: [
  //       {
  //         title: "Discount codes",
  //         route: "",
  //       },
  //       {
  //         title: "Exit intent",
  //         route: "",
  //       },
  //       {
  //         title: "Checkout Features",
  //         route: "",
  //       },
  //       {
  //         title: "Post-purchase conversion",
  //         route: "",
  //       },
  //       {
  //         title: "Cart abandonment",
  //         route: "",
  //       },
  //       {
  //         title: "Timer checkout",
  //         route: "",
  //       },
  //       {
  //         title: "Sell on Social",
  //         route: "",
  //       },
  //       {
  //         title: "Special Offer",
  //         route: "",
  //       },
  //       {
  //         title: "Seasonal Offer",
  //         route: "",
  //       },
  //     ],
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: TruckIcon,
  //     title: `Delivery Options`,
  //     route: "",
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: USDIcon,
  //     title: `Payment Options`,
  //     route: "",
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: BrushIcon,
  //     title: `Store Design`,
  //     route: "",
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: CreditCardIcon,
  //     title: `Subscription`,
  //     route: "",
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: CogPlanetIcon,
  //     title: `Integrations`,
  //     route: "",
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: NewAppIcon,
  //     title: `Extensions`,
  //     route: "",
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: SettingsIcon,
  //     title: `Settings`,
  //     route: "",
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: LogoutIcon,
  //     title: `Log out`,
  //     route: "",
  //   },
  //   {
  //     isDivider: true,
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: HelpCircleIcon,
  //     title: `Customer Support`,
  //     route: "",
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: ShareIcon,
  //     title: `Share your shop`,
  //     route: "",
  //   },
  //   {
  //     isMenuItem: true,
  //     Icon: EyeIcon,
  //     title: `View your shop`,
  //     route: "",
  //   },
  //   {
  //     isSelect: true,
  //     title: "Select your shop",
  //     items: ["Fenoh Store", "Fenoh Store 2", "Fenoh Store 3", "Fenoh Store 4"],
  //   },
];
