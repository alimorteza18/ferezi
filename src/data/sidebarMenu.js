import { ReactComponent as About } from "assets/icons/sidebarMenu/about.svg";
import { ReactComponent as Contact } from "assets/icons/sidebarMenu/contact.svg";
import { ReactComponent as Coupons } from "assets/icons/sidebarMenu/coupons.svg";
import { ReactComponent as Help } from "assets/icons/sidebarMenu/help.svg";
import { ReactComponent as Transactions } from "assets/icons/sidebarMenu/transactions.svg";
import { ReactComponent as Lang } from "assets/icons/sidebarMenu/lang.svg";
import { ReactComponent as Logout } from "assets/icons/sidebarMenu/logout.svg";
import { ReactComponent as Location } from "assets/icons/sidebarMenu/location.svg";

const sidebarMenuItems = [
  {
    id: 0,
    icon: <Location />,
    name: "Delivery addresses",
    link: "/addresses",
  },
  {
    id: 1,
    icon: <Transactions />,
    name: "Transactions",
    link: "/order-list",
  },
  {
    id: 2,
    icon: <Coupons />,
    name: "Coupons",
    link: "",
  },
  {
    id: 3,
    icon: <Lang />,
    name: "Language",
    link: "",
  },
  {
    id: 4,
    icon: <About />,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 5,
    icon: <Contact />,
    name: "Contact Us",
    link: "/condition",
  },
  {
    id: 6,
    icon: <Help />,
    name: "Help",
    link: "/help",
  },
  // {
  //   id: 7,
  //   icon: <Logout />,
  //   name: "Log out",
  //   link: "",
  // },
];

export default sidebarMenuItems;
